import React, { Component } from 'react';
import Image from '../Image'

class Cinque extends Component {

  render() {
    return (
      <div>
        <p>
          My first foray into Italy was certainly a memorable one.  The famed Cinque Terre - 5 villages on the NorthWest
          Italian coast and an UNESCO world heritage site was absolutely stunning, if you could find a place to view each village
          while not swarmed with tourists.
        </p>
        <Image imageName={'rio'} bucket={'cinque'} caption={'Riomaggiore, where I stayed'}/>
        <p>
          To set the stage, the five villages were all fishing villages but now tourism is the main trade.  The villages are set
          up into cliffs, extending hundreds of feet up into coves or up peninsulas from the sea.  Each is quite picturesque, with
          brightly multicolored buildings surrounding twisting alleyways and streets.  I was staying in the southernmost village of
          Riomaggiore, which turned out to be an excellent decision.  Staying in the village allowed for a different view after dark,
          when many of the Tourists had departed.
        </p>
        <Image imageName={'vineyard'} bucket={'cinque'} caption={'Terraced Vineyards surrounded some of the villages'}/>
        <p>
          As I've mentioned a couple times, the number of tourists was staggering.  Not necessarily the sheer amount, but more that far
          too many people were in these tiny villages clearly not designed for that kind of capacity.  To compound matters (and possibly
          why it was so bad), I was there over the Italian labor day which led to many more day trippers.  The Sunday before Labor Day was
          so crowded in the afternoon there was a line extending down almost the entirety of one of the towns just to get onto the train platform.
          The train connecting the villages was slammed with people, every seat and bit of standing room full.  I ended up waiting almost an hour
          and a half in one of the harbors reading just to wait for the Train line to die down.
        </p>
        <Image imageName={'crowd'} bucket={'cinque'} caption={'Afternoon Crowds'}/>
        <p>
          Fortunately, I didn't come to Cinque Terre just to say in the villages and mingle with other tourists.  There are a number of hiking trails
          between the villages, and I walked between 4 of them (the trails to the 5th where I was staying are all closed due to landslides).  The
          trails all provided spectacular views over the Mediterranean and of the towns.  Each trail was different in its own way as well, with
          some winding inland between vineyards and small communes, hanging over the sea, or passing through a forest.
        </p>
        <Image imageName={'cliffs'} bucket={'cinque'} caption={'A view SouthWest'}/>
        <Image imageName={'vernazza'} bucket={'cinque'} caption={'Towers over Vernazza'}/>
        <p>
          The region Cinque Terra is located in is known for its pesto, and it didn't disappoint.  On bread, on pasta, the pesto was all excellent.
          I also tried fried anchovies for the first time.  Eating the fish whole feels a bit weird, but they are quite delicious.  I was also
          introduced to Aperitifs - drinks that are meant to stimulate the appetite, sometimes served with food.  The Negroni is one such drink
          I tried, and in what is apparently common for Apertifs the drink is quite dry and bitter.  It was served with a food board containing
          some snacks, something I could definitely get used to.  I really wish more places in the US served these kinds of boards, or at least
          some form of snack with drinks.
        </p>
        <Image imageName={'food'} bucket={'cinque'} caption={'Food Board served with Aperitifs'}/>
        <p>
          Cinque Terre is undoubtedly one of the most unique places I've ever been.  Despite the tourism being a bit excessive, each village is
          so quaint and beautiful its worth the hassle.  I wouldn't want to stay more than a few days, and hiking the villages is basically
          a must, but I'm so glad I heard of this place from some travellers earlier in my journey.  Multiple people spoke to me of its beauty
          and uniqueness, and it lived up to those expectations.
        </p>
      </div>
    )
  }
}

export default Cinque