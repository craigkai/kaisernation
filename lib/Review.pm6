use OO::Monitors;
class Message {
    has Int $.id;
    has Str $.message;
    has Str $.author;
}

class X::Review::NoSuchId is Exception {
    has $.id;
    method message() { "No review with ID '$!id'" }
}

monitor Review {
    has Int $!next-id = 1;
    has Message %!message-by-id{Int};
    has Supplier $!latest-reviews = Supplier.new;

    method add-message(Str $message, Str $author --> Nil) {
        my $id = $!next-id++;
        my $new-message = Message.new(:$id, :$message, :$author);
        %!message-by-id{$id} = $new-message;
        start $!latest-reviews.emit($new-message);
    }

    method latest-reviews(--> Supply) {
        my @latest-messages = %!message-by-id.values.sort(-*.id).head(10);
        supply {
            whenever $!latest-reviews {
                .emit;
            }
            .emit for @latest-messages;
        }
    }
}