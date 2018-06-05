import React, { Component } from 'react';
import Image from '../Image'

class Florence extends Component {

  render() {
    return (
      <div>
        <p>
          Florence is an absolutely amazing city, and undoubtably one of my favorites.  Its absolutely beautiful as well
          as charming, with cobbled streets and numerous sites from the Italian renaissance.  Everything in the city
          was also walkable, definitely the preferred method of transport to see the character of each street.
        </p>
        <Image imageName={'bridge'} bucket={'florence'} caption={'Ponte Vecchio (Old Bridge)'}/>
        <p>
          The main tourist attractions I went to in Florence are the Duomo (Cathedral the city is known for) and Ufizzi museum.  The Duomo
          was spectacular - an enormous church decorated on the outside in a unique pattern and containing a famous fresco on the
          inside of the Dome.  There were 3-4 different areas around the Cathedral you could pay to enter, including a Tower that
          provided excellent views of the city as well as entrance to some ruins under the Church.
        </p>
        <Image imageName={'tower'} bucket={'florence'} caption={'View of the Duomo from atop the neighboring tower'}/>
        <p>
          Visiting the Ufizzi museum turned out to be an... interesting experience.  Because I hadn't booked far enough in advance, the
          line to get in would have taken 1-2 hours.  I was asked by some enterprising individuals while in line to join a tour that
          started in a couple minutes to skip the line for 15 Euros more than the price of admission - less than their usual rate
          since the tour had slots open they were trying to fill at the last minute.  It ended up being the worst tour I've taken in Europe,
          but hey at least I didn't waste 2 hours.  The Ufizzi itself has tons of cool art and whatever, but perhaps the coolest part
          is the museum is in an old Medici palace.  The Medicis were an extremely wealthy and influential family that ruled Florence and
          the surrounding areas for hundreds of years.
        </p>
        <p>
          My Hostel in Florence ended up being a wonderful experience and I met some excellent people there.  3 Different nights I ended up
          on a hill above the city hanging out / drinking with people from the hostel, one of my fondest memories of Florence.
        </p>
        <Image imageName={'city'} bucket={'florence'} caption={'Florence at night (unfortunately all my night photos are a bit blurry)'}/>
        <p>
          The highlight of my trip in Florence was a Wine / Food tour in Tuscany.  The Tour was absolutely spectacular, visiting 3 different
          wineries in the region, having a fantastic meal at one, and visiting a small Tuscan town.  Tuscany was one of those places where
          looking back at the pictures, they really don't to it justice.  Its absolutely beautiful, with vineyards, cyprus trees, and small
          villages dotting the hills.  I learned some interesting things about wine and olive oil production, tasting some excellent varieties
          of both.
        </p>
        <Image imageName={'brew'} bucket={'florence'} caption={'Fermentation equipment in a cellar'}/>
        <p>
          I also had the good fortune to eat some of the best food I've had on my trip in Florence.  There was a food market only a few blocks
          from where I'm staying which was quite enjoyable, I ended up eating there twice.  The woman who ran the Hostel I'm staying at had
          some excellent food recommendations, but one of the best was a family style meal she organized for us at a local restaurant.  5 people
          from the hostel shared a bunch of different appetizers including various bruschetta, cheeses, and prosciutto.  We also split 4 pasta
          dishes, which was nice as I was able to try dishes I otherwise never would have ordered.  One thing that gets quite annoying about
          eating alone isn't the loneliness or feeling weird that other people might be worried about, but the fact it is harder for me
          to get appetizers and split dishes to try more foods.
        </p>
        <p>
          I did mention that the tour of Tuscany I went on was also a food tour, not just wine.  The lunch I had was one of the best meals
          on the trip.  Everything was great and similar to the family style dinner appetizers and pastas were shared, but there was a clear
          standout dish.  A mezzelune (basically big ravioli) filled with ricotta and mushrooms in a white cheese sauce and finished with
          black truffles was one of the best dishes I've ever had.  I had thought truffles were overrated after trying them once, but this
          time they undoubtably delivered.  I've also never been a huge fan of mushrooms, but this dish and Italy as a whole have now
          converted me.
        </p>
        <Image imageName={'tuscany'} bucket={'florence'} caption={'Tuscan Hills'}/>
        <p>
          Even at the time of writing this (weeks after being there), Florence is still one of my favorite destinations.  Everything about it -
          the history, architecture, people, surrounding areas - it all fell into place while I was there.  Florence is a destination I cannot
          wait to return to.
        </p>
      </div>
    )
  }
}

export default Florence