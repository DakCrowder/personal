import React, { Component } from 'react';
import Image from '../Image'

class Departure extends Component {

  render() {
    return (
      <div>
        <p>
          Brussels was a city of high highs and low lows.  Charming buildings, wonderful people, unique experiences juxtaposed
          with poverty and homelessness.
        </p>
        <p>
          The main city center, known as the Grand Place, and its surrounding areas were extremely pleasant and beautiful.  A bit
          over the top touristy in bits, but that's what you get when you visit major tourist attractions.  However much of the city
          to the North and South where I ventured were much seedier than I expected, with rampant homelessness and a few... questionable
          actors on the Subway and streets who didn't appear to be in the best state of mind.
          There are always going to be 'good' and 'bad' areas in cities, but in Brussels it felt like this
          was taken to an extreme.  I don't mean to be overly negative as I still had a great time, but this aspect was very unexpected.
        </p>
        <Image imageName={'place_2'} bucket={'brussels'} caption={'Museum of the City of Brussels, located opposite the Town Hall visible in the header'}/>
        <p>
          The hostel where I stayed was quite amazing, and I'd be fortunate to find more places like it elsewhere.  The building was a
          fairly large old house with a large courtyard out back, and the Owner set out a breakfast each morning which made for a nice
          start to each day as well as easy socializing with the other tenants.  One night I went out for dinner with 2 others from the Hostel,
          and going out at night made me see the city in a completely different light.  Less crowded and with the major monuments lit up
          beautifully, I really preferred the city after dark.  When meeting people while travelling, its quite bizarre as you talk to them for
          30 minutes and it almost feels like you've known them for years.
        </p>
        <p>
          Known for its Chocolate, Beer, and Waffles, Brussels didn't disappoint in any of these areas, although my trip was quite focused on the
          Beer aspect compared to the others.  I ventured through a particularly sketchy neighborhood to the Cantillion brewery, a family run
          operation that is over 100 years old.  The brewery brews only Lambic beers, which are quite unique compared to 'normal' beer.  The yeast
          in the beer is actually taken from the air, and its how beer was brewed before access to modern equipment and facilities that allow for
          more modern brewing techniques to dominate the market.  There was a self guided tour of the brewery complete with tasting at the end.
          Gueuze (a kind of blend of beers, kinda the standard) and Kriek (a lambic brewed with sour cherries) were two of the beers I drank that
          were excellent.  The Kriek specifically was delicious.  In general the Lambic style seems more of a cross between a standard beer and
          wine, with a high gravity, little carbonation, and a dry / sour taste.
        </p>
        <Image imageName={'brew'} bucket={'brussels'} caption={'Some brewing equipment from the brewery'}/>
        <Image imageName={'kegs'} bucket={'brussels'} caption={'Where the beer is stored in wooden barrels'}/>
        <p>
          A 4 hour beer tour winding through 6 bars in the central area was also a really fun experience, where I tried a variety of Belgian beers
          and styles.  Chocolates I ate were also delicious, although the chocolate truffle claiming to have won some award for being the
          worlds best was definitely not the worlds best.  Speaking of truffles, I also tried truffles for the first time in a pasta dish.
          They were just ok, but I'll definitely have to give them another shot.  As of now my layman gastronomical brain considers them overrated.
          The best meal I've had on the trip is without a doubt the Belgian waffle I got with cooked cherries, whipped cream, and a cappuccino.
          Although the 'local' move is apparently to eat the waffle without any toppings, I feel justified in saying this is a case when
          the locals are dead wrong.
        </p>
        <Image imageName={'waffle'} bucket={'brussels'} caption={'GOAT waffle'}/>
      </div>
    )
  }
}

export default Departure