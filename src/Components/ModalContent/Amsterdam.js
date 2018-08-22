import React, { Component } from 'react';
import Image from '../Image'

class Amsterdam extends Component {

  render() {
    return (
      <div>
        <p>
          Walking out into the cool Amsterdam air for the first time, witnessing the Chaos that unfolds outside Central Station,
          I immediately knew I was going to love Amsterdam.  The city had a certain 'Vibe' to it that I really enjoyed, not to mention
          each street and canal in the city seems more picturesque than the last.
        </p>
        <Image imageName={'amstel'} bucket={'amsterdam'} caption={'Amstel River Canal - one of the biggest in the city'}/>
        <Image imageName={'canal_2'} bucket={'amsterdam'} caption={'Canal feat. Tree'}/>
        <p>
          The first place I visited in Amsterdam surprised even me.  After disembarking the train and leaving the station, I looked up
          the address of my hostel and began walking.  A couple of turns later I glance up from my phone and notice a scantily clad woman
          standing in a window surrounded by red lights.  Huh, I ended up in the Red Light District!  I had figured it would be a small part
          of the city, kinda separated from everything else and with a dingy feel to it but that couldn't have been further from the case.
          The district is very close to the center of the city, looks much of the same (sans availability of vices), and really isn't
          too dirty or sketchy in comparison to other areas.  There is actually a Church, Prostitutes, and a Kindergarten all within about
          30 feet of one another.
        </p>
        <Image imageName={'red'} bucket={'amsterdam'} caption={'Narrow street in the Red Light District'}/>
        <p>
          I had read that most of the people in the city knew English, and that was definitely the case.  Although Dutch is by far the most
          heard language when roaming the streets, I never had any issues with communication between anybody I needed to talk to in English.
          My second day also made me realize that the Dutch are HUGE.  It seemed that everybody was taller than me, including the Women.  I
          looked it up and sure enough, the Netherlands is thought to be the tallest nation in the world, with Men averaging over 6 ft.
          The bikes in the city were also a surprise.  I had no idea that Amsterdam was known for biking, and the bikers were crazy.
          I <i>may</i> have stepped directly into a bikers path at one point and nearly gotten run over, prompting the biker to call me a
          something-in-dutch-but-surely-explicit IDIOT.  There were normal bikes, cargo bikes, family bikes, a bike for any occasion.
        </p>
        <Image imageName={'bike'} bucket={'amsterdam'} caption={'Bike for the whole family'}/>
        <p>
          One excellent part of the city is the Rijksmuseum, which is a Dutch-focused art/history museum.  A break from the American / English
          focus that I'm so used to hearing was very interesting.  I really enjoyed a "free" (aka 10 or
          15 euros depending on how much you tip) walking tour of the city, showing some notable landmarks but also smaller places I never
          would have known to visit.
        </p>
        <Image imageName={'rijk'} bucket={'amsterdam'} caption={'Rijksmuseum and the park beyond'}/>
        <p>
          The food situation in the city was actually kind of odd.  There seemed to be tons of Italian restaurants as well as more
          Argentinian and Mexican places than I would've thought (although these may be targeted towards tourists).  I ate at a couple
          really good Cafes and an excellent bakery.  My favorite meals included a Duck Confit for dinner one evening, a fresh Stroopwafel
          (which is like two thin wafers containing warm caramel) and topped with chocolate and marshmallows, and some mini-pancakes
          topped with Nutella and fresh strawberries.  Unfortunately, I forgot to take pictures of the Stroopwafel and pancakes but rest
          assured they were quite delicious.
        </p>
        <Image imageName={'mill'} bucket={'amsterdam'} caption={'Mill that contained a brewery underneath'}/>
        <p>
          I definitely plan to return to Amsterdam, as I still have much to see and do.  It is hard to describe just how beautiful and
          interesting almost every part of the city seems to be.
        </p>
        <Image imageName={'canal_3'} bucket={'amsterdam'} caption={'A side-on view of a canal complete with houseboat I enjoyed'}/>
      </div>
    )
  }
}

export default Amsterdam