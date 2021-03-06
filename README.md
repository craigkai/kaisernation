# craigkaiser

This is an application stub generated by `cro stub`.  To try it out,
you'll need to have Cro installed; you can do so using:

```
zef install --/test cro
```

Then change directory to the app root (the directory containing this
`README.md` file), and run these commands:

```
zef install --depsonly .
cro run
```

You can also build and run a docker image while in the app root using:

```
docker build -t craigkaiser .
docker run --rm -p 10000:10000 craigkaiser
```

# Craigs Notes:

## Perl6
    Perl 6 is a member of the Perl family of programming languages

### REPL
<code>3.^name</code>
<code>3.^mro</code>
<code>3.^methods</code>

#### Hashes
<code>my %data = First => 1, Second => 2</code>
<code>put %name<First></code> # 1

<code>my $immutable := 1</code> # Cannot change because of `:=`

**Binding**
<code>my $second := $thing</code>


<code>do if $number %% 2 ?? {'even'} !! {'odd'};</code>
## React
    A JavaScript library for building user interfaces

### Containers
Should handle data fetching and methods.

### Components
Only concerned with rendering.

## Redux
    A JavaScript library for building user interfaces