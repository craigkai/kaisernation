use Cro::HTTP::Router;
use Cro::HTTP::Router::WebSocket;
use JSON::Fast;
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

sub routes(General $general) is export {
    route {
        subset LoggedIn of UserSession where *.logged-in;

        get -> LoggedIn $user, 'greet' {
            content 'text/plain', $general.test()
        }

        get -> {
            my $t = Template::Mojo.from-file('static/index.tm');
            content 'text/html', $t.render(
                {
                    pageId => 'Index',
                    Title  => 'Welcome!'
                }
            );
        }

        get -> 'work' {
            my $t = Template::Mojo.from-file('static/index.tm');
            content 'text/html', $t.render(
                {
                    pageId => 'Index',
                    Title   => 'Craig\'s Work!'
                }
            );
        }

        get -> 'code' {
            my $t = Template::Mojo.from-file('static/index.tm');
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
    }
}