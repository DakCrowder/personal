import React, { Component } from 'react';
import Image from '../Image'

class London extends Component {

  render() {
    return (
      <div>
        <p>
          After my first day in London, filled with exciting activities such as taking an hour to get through customs
          and trudging bleary-eyed about the London museum after a night of no sleep, I was unsure if the city was even worth the visit.
          But through the next few days the city grew on me, and I couldn't have asked for a better start to my trip.
        </p>
        <Image imageName={'parliament'} bucket={'london'} caption={'The Parliament building'}/>
        <p>
          I was able to enjoy what might be described as an 'authentic' London experience with regards to the weather.
          The sky was constantly overcast and it rained nearly every day, the sun only peeking out during the afternoon for a few
          minutes at a time.  The public transport system was fantastic, definitely the best I've ever seen (albeit I have
          limited experience).  London seems to me a very accessible and livable city even in the more populated areas.
        </p>
        <p>
          My accommodations in a hostel reminded me a bit of college living, with shared rooms, bathrooms, and living spaces.  There was a
          Pub downstairs which was quite convenient at night, and each guest got a free dinner cooked by one of the staff each night if
          they wished.  It wasn't the greatest food, but free is free and it provided a decent time to gather and socialize with the other
          hostel goers.  People from France, Spain, Austrailia, and America were all staying at the hostel and it was great to meet
          such a variety of poeple.
        </p>
        <Image imageName={'hostel'} bucket={'london'} caption={'The view from atop my bed at the hostel'}/>
        <p>
          Among the typical tourist activities I ventured on, the Tower of London was the best.  The building itself was extremely interesting,
          not to mention the exhibits explaning the rather fascinating history of the Tower.  I also enjoyed walking about
          the affluent Kensington / Knightsbridge areas, where it seems every other car is a Mercedes G-Wagon and a Lamborghini storefront
          displaying the newest car doesn't appear out of place.
        </p>
        <Image imageName={'tower'} bucket={'london'} caption={'Tower of London from up close'}/>
        <p>
          The 'Pub Scene' was really fun to experience.  On Easter Sunday I went to a smaller local pub to watch an Arsenal game.
          Upon entering, it felt as if everybody turned and silently appraised me as an outsider.  I got a beer and sat down, and was soon
          joined at my small table by an older gentleman because the bar was full.  I then simply said "Hey" to him, which prompted
          a blank open mouth stare and then ignoring me and turning back to watch Gaelic football.  Cheers, mate.  Clearly my presence in
          the pub was an affront to his perfectly English Sunday sanctuary.  Despite this, the atmosphere in the pub was fun and I learned
          that apparently Gaelic football is quite popular.  At night the Pubs (at least the ones I went to in Camden Town) were lively,
          although the beer selections are quite bland in comparison to the expansive Craft beers on draught back in NC.  An interesting oddity
          was the outdoor urinal present outside one of the Pubs, a testament to the English embracing the drinking mentality.
        </p>
        <Image imageName={'pub'} bucket={'london'} caption={'Watching Arsenal at The Sheephaven Bay'}/>
        <Image imageName={'show'} bucket={'london'} caption={'A punk-ish rock show a hostel staff member took us to one night'}/>
        <p>
          The only real british cuisine I ate during the trip was Fish and Chips and it was the best dish I had, edging out
          an excellent Lebanese chicken dish eaten shortly after arrival.
          I ventured to both the Borough and Camden Markets which both contained a wealth
          of food options, including some tasty Indian from Borough and Spicy falafel from Camden.  Each market was bustling and exciting to walk
          through, although Camden was much larger.  The Borough Market actually wasn't in any of my travel plans, I just stumbled upon
          it while walking along towards the London Tower and it was one of my favorite places on the trip.
        </p>
        <Image imageName={'fish'} bucket={'london'} caption={'Fish and Chips'}/>
        <Image imageName={'market'} bucket={'london'} caption={'Indian food being prepared at Borough Market'}/>
        <p>
          On the whole, London was great for a visit - but also maybe just one.  The city has plenty to do, but it never quite wowed me
          in what it had to offer.  It felt like I was in a different place, but not a vastly different culture. It seems weird, but I
          feel I'd be more likely to try and live full time here than visit again.  I don't mean to demean the city and I had a great time,
          but I'm expecting more from some of my future destinations.  This has also been barely proofread and I'm quite tired, so hopefully its ok.
        </p>
      </div>
    )
  }
}

export default London