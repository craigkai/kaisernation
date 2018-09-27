use Cro::HTTP::Router;
# use lib '.';
# use lib::Controller::General;

sub routes() is export {
    route {
        get -> {
            static 'static/index.html'
        }
        get -> 'js', *@path {
            static 'static/js', @path
        }
    }
}
