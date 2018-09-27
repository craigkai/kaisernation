use CK;
use Test;

my $ck = ck.new;
lives-ok { $ck.add-tip('The lamb kebabs are good!') },
    'Can add a tip';
lives-ok { $ck.add-tip('Not so keen on the fish burrito!') },
    'Can add another tip';
given $ck.latest-tips.head(2).list -> @tips {
    is @tips[0].tip, 'Not so keen on the fish burrito!',
        'Correct first tip retrieved on initial tap of latest-tips';
    is @tips[1].tip, 'The lamb kebabs are good!',
        'Correct second tip retrieved on initial tap of latest-tips';
}

react {
    whenever $ck.latest-tips.skip(2).head(1) {
        is .tip, 'Try the vanilla stout for sure',
            'Get new tips emitted live';
    }
    $ck.add-tip('Try the vanilla stout for sure');
}

done-testing;