import React, { Component } from 'react';
import Image from '../Image'

class Nice extends Component {

  render() {
    return (
      <div>
        <p>
          It would be fair to say that Nice was rather... NICE.
          As it seems to be in every place I visit, the Old Town was really interesting and beautiful.  People were packed
          into alleys that could fit only one car, with colorful buildings and delicious restaurants everywhere.  A large hill
          overlooks the old town, complete with castle and fantastic views over the entire city and port.  The hill also had
          a park on top, and numerous sites / viewpoints including a waterfall and old church ruins.  Aside from the Old Town
          and hill, there wasn't really too much excitement to be found in Nice.  I feel I stayed the perfect amount of time
          to get a nice feel for the city, but not get bored and have to find smaller things to do.
        </p>
        <Image imageName={'square'} bucket={'nice'} caption={'A square in the Old Town'}/>
        <Image imageName={'port'} bucket={'nice'} caption={'Overlooking the Port'}/>
        <p>
          Despite there being relatively few attractions in the city, I managed to meet a fantastic group of people and had a really
          great time roaming about with them.  A highlight was spending a couple of nights out on the Nice beach after dark,
          sitting around and enjoying some wine.  For those unaware the Nice beaches are rocky, which while not my favorite for
          relaxing or swimming, make it easy to sit on since you don't have to worry about sand getting everywhere.  In general I'm really
          enjoying staying at smaller hostels, prioritizing less people and a nice social atmosphere as opposed to nicer accommodations.
          The particular hostel in Nice was a group of 6 or 7 older apartments all combined to form the hostel, and was a couple minute walk
          from both the beach and the Old Town.
        </p>
        <p>
          I also embarked on a day trip with some people from my Hostel to Monaco via bus.  I had an image of Monaco being some kind of uber rich utopia, beautiful
          and pristine.  While the rich part seemed to be true, Monaco
          wasn't as pretty as I was expecting.  Many parts of the city were built up with mediocre looking buildings from the 80's.  Looking
          at some real estate postings indicated that even the smallest apartment in even the ugliest building in Monaco would be exorbitantly
          expensive, but less were nice looking on the outside than I thought there would be.  Monaco was also being prepared for the Grand Prix, so the
          roadways were freshly paved and painted like an F1 track, complete with stands being constructed and fences rising behind the
          race route.  The Monte Carlo district, where the famous Casinos are located, contained the highest concentration of luxury cars I've ever
          seen.  Ferarris, Rolls Royces, and Porsches drove around at the same frequency a Civic or Accord might elsewhere.  The Casino itself was
          a bit dead when I was there, although I also enjoyed the best
          (and only) fifteen Euro martini I've had, shaken not stirred a la James Bond.
        </p>
        <Image imageName={'monaco'} bucket={'nice'} caption={'The Road in Monaco setup for the Grand Prix'}/>
        <Image imageName={'cars'} bucket={'nice'} caption={'A couple Ferarris parked out side the Monte Carlo Casino'}/>
        <p>
          Food-wise, I had my first crepe of the trip in Monaco so I got to check that off the list of must haves, as well
          as some apparently famous Gelato that was excellent.  I also ate Indian food one night, an excellent return to spicy cuisine after
          a couple weeks eating French and Spanish food that while delicious, has virtually no kick.  Its something that I never really considered,
          but most European food has very little spice.  I've been dying for some good Thai food.
        </p>
        <p>
          Nice was an excellent stop, but it reinforces what is becoming increasingly clear throughout the trip - the locations are amazing and why
          I go, but I really remember and cherish the times shared with other people more than anything else.
        </p>
      </div>
    )
  }
}

export default Nice