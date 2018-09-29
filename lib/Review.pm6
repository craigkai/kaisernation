use OO::Monitors;

class Review {
    has Str $.message;
    has Str $.author;
}

monitor Reviewer {
    has Supplier $!message;
    has Review %!review-id;
}