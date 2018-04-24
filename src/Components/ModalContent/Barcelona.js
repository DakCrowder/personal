import React, { Component } from 'react';
import Image from '../Image'

class Barcelona extends Component {

  render() {
    return (
      <div>
        <p>
          Barcelona was an incredibly vibrant city, that I perhaps experience in too vibrant a manner.  Even though I just left,
          I cannot wait to return and feel there is still so much to do and see there.
        </p>
          <Image imageName={'beach'} bucket={'barcelona'} caption={'A crowded day at the beach'}/>
        <p>
          Despite being in Barcelona for 5 days, I really didn't do too much sightseeing or really power through the touristy landmarks.
          I still saw the La Sagrada Familia (church in the header), various districts of the city, some famous buildings, went to the beach...
          but spend much of my time just kinda hanging around the beach or my hostel.  My hostel was great, and I met a bunch of great people
          from numerous different countries and all over the US.  The Barcelona nightlife definitely didn't do any favors towards my sightseeing.
          The hostel had events each night beginning at a bar near midnight, then going to a club at 1:30.  Staying up until
          3 or 4 AM is taxing to say the least, and sleeping in until near noon meant my day started pretty late.  Even if you were on a more
          normal schedule, people still don't eat dinner until quite late compared to US standards (like 9).  The beach in Barcelona was nice
          enough, but it is more of a destination with a beach than a beach destination.  Its not the most beautiful, its constantly crowded, but
          its another part of what makes Barcelona Barcelona.
        </p>
        <Image imageName={'club'} bucket={'barcelona'} caption={'Club right by the beach'}/>
        <p>
          My two favorite places in the city were the Gothic Quarter, an older part of the city made up of winding alleyways, and La
          Boqueria, a food market.  The Gothic quarter is maze-like in its arrangement, with a number of small streets crisscrossing
          and seemingly randomly opening up into small squares often packed with restaurants.  As you might imagine from the name, the
          quarter also contains some cool gothic architecture as well as some parts from an older Roman city.  La Boqueria was located just off
          of the main touristy boulevard in Barcelona, and was slammed with people when I was there a couple days around noon.  Despite it being so
          busy, the market was simply fun to be in.  The bustle of tourists wandering about, the unique food stalls selling all kinds of ham, the
          seafood restaurants preparing food, was a real blend of sensations that are all around you at once.
        </p>
        <Image imageName={'gothic'} bucket={'barcelona'} caption={'Alley in the Gothic Quarter'}/>
        <Image imageName={'market'} bucket={'barcelona'} caption={'La Boqueria food market'}/>
        <p>
          Despite receiving a tremendous list of restaurants to try in the city, I didn't really do much on the food front in Barcelona.
          I had some rather excellent fried shrimp, fried calamari, and some mussels split between myself and some people from my Hostel.  We
          also got some paella, but I must say I think I just dislike the dish.  It just seems to be more bland than it should, the seafood
          in the dish always seems to be overcooked, and its missing a kick.  I much prefer a nice curry if I'm eating some-seafood-stuff-with-rice.
          But maybe I've just had bad paella.  I bought some nice ham and cheese one morning at La Boqueria that was delicious, and had a
          good freshly baked chicken sandwich my last day.  The most interesting part about the chicken sandwich was the restaurant it was from,
          called Bo de B.  I got some serious Soup Nazi vibes as there was a long line, they only let in a few customers at a time, and were
          pretty curt in taking orders and making sure you weren't trying to sneak inside before your turn.
        </p>
        <Image imageName={'food'} bucket={'barcelona'} caption={'Fried shrimp, fried calamari, mussels'}/>
        <p>
          Being in Spain for the first time on this trip also led to the unique experience of feeling awful I didn't know the language.  In
          Amsterdam or France I never really learned any dutch or french, so didn't really recognize anything or have too much hesitation in
          asking to speak English.  Barcelona was a different story.  I took spanish for 3 years in college, and it can be considered absolutely
          useless at this point.  I recognized just enough of the language to know that I no longer knew any, and that didn't feel great.  I
          definitely want to look into taking some foreign language classes when back home, as I feel the experience in a country would
          be quite different than being an english only speaker.
        </p>
        <Image imageName={'bunkers'} bucket={'barcelona'} caption={'View of the city from atop old anti-aircraft bunkers'}/>
        <p>
          Very few people probably care but I've also begun hosting images for the site in "the cloud" so it should be more performant.
          Basically you should be using less bandwith to view pages, although I haven't migrated older posts yet.  Also
          made the mobile experience actually usable, although there are still some styling issues.  I'm currently thinking of switching up a
          large part of the journey after Italy, so I guess we'll see what happens.
        </p>
      </div>
    )
  }
}

export default Barcelona