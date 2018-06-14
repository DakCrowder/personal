import React, { Component } from 'react';
import Image from '../Image'

class Venice extends Component {

  render() {
    return (
      <div>
        <p>
          I had heard mixed opinions about Venice from people I've met travelling.  Some people found it a near mystical place,
          full of wonder and a sense of romanticism.  Others said it was far too touristy, with cruise ships towering over
          the buildings and thousands of day trippers forever ruining the experience.  I found the truth to be somewhere in the middle -
          but heavily skewed towards a fantastic place to visit.
        </p>
        <Image imageName={'canal_1'} bucket={'venice'} caption={'A canal'}/>
        <p>
          Venice is perhaps the most unique place I've visited or will visit.  Walking over the canals, seeing the boats and gondolas go by,
          smelling the sea, there is no other place that offers a similar experience.  Venice was absolutely charming, and surpassed all expectations
          I had going in.  Squares on the interior of islands commonly open up to a smattering of restaurants or hotels.  Navigating the city
          was rather difficult, as not all streets ended in a bridge and coming to a dead end at a canal was common if I wasn't looking at maps
          on my phone.  In particular, crossing the largest canal in the city was made difficult by there being only a few bridges across.
        </p>
        <Image imageName={'canal_grande'} bucket={'venice'} caption={'View over the Grand Canal (largest canal through the city)'}/>
        <p>
          However, that shouldn't discount the effects of tourism on the city.  Venice is a poster child for how the local culture and
          people can be negatively affected by tourism.  Only about 50k people live in Venice proper, while almost 20 million visit the city
          each year.  In high season, locals are often outnumbered by hordes of tourists.  The most visited destinations in the city are
          absolutely slammed with people, and similar to Cinque Terre the narrow alleyways and side streets simply weren't designed with
          this kind of capacity in mind.  The local government is beginning to look at taking some steps to limit the number of tourists,
          specifically day trippers and people from cruise ships who only spend a bit of time in the city and also spend less money
          than people staying for longer.  I think many people are far too pessimistic about tourism affecting cities, but I often see
          their point.  By visiting these places, are we actually destroying what makes them valuable or unique?  I think the experience might
          be degraded, but certainly not destroyed.  It is important to think about, and hopefully more responsible tourism practices
          can be enforced to ensure a happy medium between the locals and millions who wish to experience Venice.
        </p>
        <p>
          As an aside, I recognize the irony/hypocriticism of complaining about tourists while being a tourist.  Ultimately if it is a problem,
          I'm definitely part of the problem.
        </p>
        <Image imageName={'street'} bucket={'venice'} caption={'Street in a non-touristy part of Venice'}/>
        <p>
          I stayed on the island proper in Venice, and would recommend doing so.  Walking around the city at night is quite lovely, and not
          having to worry about what water taxi or bus to take to the mainland is worth the extra cost.  The main attraction in
          Venice is St. Mark's Cathedral and the accompanying square, which was cool but not exceptional.  The Cathedral interior was liberally
          adorned with gold, and contained a museum on the top floor that also provided views over the square.  Aside from that, most of the
          'attractions' were simply the city itself.  Each canal or old building contained so much personality just wandering about was
          my favorite activity.
        </p>
        <Image imageName={'plaza'} bucket={'venice'} caption={"Plaza and view of St. Mark's Cathedral"}/>
        <p>
          The food in venice was, if nothing else, expensive.  Very expensive.  I ate mostly the usual italian fare, lots of pasta and
          seafood.  I tried cavair for the first time, and it tastes exactly like you would expect it would.  There are plenty of less
          pretentious ways to get a salty fishy flavor in a dish.  One appetizer I particularly enjoyed was prosciutto with melon
          (if you haven't been paying attention to my posts I'm in love with prosciutto).
        </p>
        <Image imageName={'ham'} bucket={'venice'} caption={'Prosciutto and melon'}/>
        <p>
          I dream to return to Venice, but not any time soon.  The city has little left to offer me as an individual, but I would love
          to come back as part of a romantic getaway.  Hopefully the city wards off the tourists and the tides to welcome me back.
        </p>
      </div>
    )
  }
}

export default Venice