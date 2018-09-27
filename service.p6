use Cro::HTTP::Log::File;
use Cro::HTTP::Server;
use Routes;
use CK;

my $ck = CK.new;
my $application = routes($ck);


my Cro::Service $http = Cro::HTTP::Server.new(
    http => <1.1>,
    host => %*ENV<CRAIGKAISER_HOST> ||
        die("Missing CRAIGKAISER_HOST in environment"),
    port => %*ENV<CRAIGKAISER_PORT> ||
        die("Missing CRAIGKAISER_PORT in environment"),
    :$application,
    after => [
        Cro::HTTP::Log::File.new(logs => $*OUT, errors => $*ERR)
    ]
);
$http.start;
say "Listening at http://%*ENV<CRAIGKAISER_HOST>:%*ENV<CRAIGKAISER_PORT>";
react {
    whenever signal(SIGINT) {
        say "Shutting down...";
        $http.stop;
        done;
    }
}
