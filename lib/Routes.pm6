use Cro::HTTP::Router;
use Cro::HTTP::Router::WebSocket;
use JSON::Fast;
use Review;
use General;
use Template::Mojo;

=begin head2

Create a websocket that will update the page every
second and add +1 to a value.

=end head2


class UserSession does Cro::HTTP::Auth {
    has $.username is rw;

    method logged-in() {
        $!username.chars > 1;
    }
}

sub routes(General $general, Review $review) is export {
    my $t = Template::Mojo.from-file('static/index.tm');
    route {
        subset LoggedIn of UserSession where *.logged-in;

        get -> LoggedIn $user, 'greet' {
            content 'text/plain', $general.test()
        }

        get -> {
            content 'text/html', $t.render(
                {
                    pageId => 'Index',
                    Title  => 'Welcome!'
                }
            );
        }

        get -> 'work' {
            content 'text/html', $t.render(
                {
                    pageId => 'Index',
                    Title   => 'Craig\'s Work!'
                }
            );
        }

        get -> 'code' {
            content 'text/html', $t.render(
                {
                    pageId  => 'Index',
                    Title   => 'Craig\'s Code!'
                }
            );
        }

        get -> 'js', *@path {
            static 'static/js', @path
        }

        get -> 'css', *@path {
            static 'static/css/pure', @path;
        }


        # Review
        post -> 'review' {
            request-body -> (:$message) {
                $review.add-tip($message);
                response.status = 204;
            }
        }
        # SOCKETS
        my $incoming_review = Supplier.new;
        get -> 'review' {
            web-socket -> $incoming {
                supply {
                    whenever $incoming -> $message {
                        $incoming_review.emit(await $message.body-text);
                    }
                    whenever $incoming_review -> $message {
                        emit $message;
                    }
                }
            }
        }
    }
}