import React, { Component } from 'react';
import Image from '../Image'

class Marseille extends Component {

  render() {
    return (
      <div>
        <p>
          Marseille is known for being violent and sketchy, a city riddled with problems and poverty.  I'd love to tell you
          that beneath its rough exterior there lies a gem of a city, beautiful and warm, filled with interesting things to do.
          Unfortunately this is not the case.
        </p>
        <p>
          That being said, I don't wish to mislead you into thinking Marseille is a crap city and I was dodging bullets left and right.
          Marseille wasn't bad.  I didn't get robbed, I never felt like I was in danger, but it didn't really have much charm and
          wasn't a beautiful city in comparison to others on the French / Spanish coast.  While taking the bus into and out of the
          city it was apparent that the outskirts of the city were quite sketchy and you definitely wouldn't want to be wandering around
          them alone after dark.  I stayed in a pretty nice part of the city called Vieux Port (Old Port) which was pleasant to walk
          around, and had plenty of restaurants.  I didn't really eat anything of note in Marseille, other than finally caving and getting
          american fast food for the first time since being in Europe.  The Steak and Shake right on the port simply smelled much too good.
          Much to my amusement the guy taking my order looked absolutely flabbergasted when I asked to speak English, much more so
          than anybody else in even the most French of restaurants.
        </p>
        <Image imageName={'port'} bucket={'marseille'} caption={'View of the Vieux Port and Church in the background'}/>
        <Image imageName={'church'} bucket={'marseille'} caption={'Close up of the church'}/>
        <p>
          Although the city itself wasn't the most impressive, there is a good hiking spot close by
          and was the main reason why I went to Marseille.  The Calanques National Park was
          everything I could've hoped for and more.  I had done very little research into the exact nature of the park
          let alone what trails to take, so it turned out to be a bit of an adventure.  Apparently the French maintain
          a laissez-faire attitude towards providing directions in the park, so I was using a combination of a clearly out of date photo
          of the trails as well as google maps (which doesn't have the trials documented).  My planned ~3 hours of hiking turned into more of
          a 5 hour trek after I got mildly lost and ended up on some pretty difficult trails, but in the end everything was fine.
        </p>
        <p>
          The path of my hike took me to two different villages, each located in an inlet.  The first was a pretty easy hike,
          from the starting point inland to the coast.  The second leg of the hike took me over a mountain to the second village,
          and it was much more advanced that I anticipated.  At certain points I was more rock climbing than walking, but it provided
          some rather stunning views and was the best part of the hike.  I didn't realize just how high up I was until looking at the photos
          afterwards and noticing how small a boat looked in the Sea.  After arriving in the second village, I took a brief
          swim for the first time in the Mediterranean before departing on the third leg back to the park entrance.
        </p>
        <Image imageName={'village'} bucket={'marseille'} caption={'Looking over the first village I came to'}/>
        <Image imageName={'cove'} bucket={'marseille'} caption={'The cove where the second village was located'}/>
        <Image imageName={'water'} bucket={'marseille'} caption={'A nice swimming spot'}/>
      </div>
    )
  }
}

export default Marseille