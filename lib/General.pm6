unit class General;

has $.db is rw;
has $.name is rw;

method test { 
    return self.name;
}

method testing (--> Supply) {
    supply {
        whenever $!name {
            .emit;
        }
    }
}
