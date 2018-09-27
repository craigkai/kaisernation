use OO::Monitors;

class user {
    has Int $.id;
    has Str $.tip;
    has Int $.agreed;
    has Int $.disagreed;
}

monitor CK {
    method add-tip(Str $tip --> Nil) { ... }
    method agree(Int $tip-id --> Nil) { ... }
    method disagree(Int $tip-id --> Nil) { ... }
    method latest-tips(--> Supply) { ... }
    method top-tips(--> Supply) { ... }
}