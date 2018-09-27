use Cro::HTTP::Router;
use CK;

sub routes(CK $ck) is export {
    route {
        get -> {
            static 'static/index.html'
        }
        get -> 'js', *@path {
            static 'static/js', @path
        }
    }
}
