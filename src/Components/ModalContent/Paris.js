import React, { Component } from 'react';

import arc from '../../assets/images/paris/arc.jpg'
import cafe from '../../assets/images/paris/cafe.jpg'
import dame from '../../assets/images/paris/dame.jpg'
import louvre from '../../assets/images/paris/louvre.jpg'
import mont from '../../assets/images/paris/mont.jpg'
import room from '../../assets/images/paris/room.jpg'
import tower from '../../assets/images/paris/tower_2.jpg'

class Paris extends Component {

  render() {
    return (
      <div>
        <p>
          Paris - a city people seem to love or hate.  I fall into neither of these camps, with my time in the city
          overwhelmingly positive but not world changing.  For those unaware, Paris is quite large.  Its metropolitan area
          is the largest in the EU, and in many ways it looks similar to London with a huge number of compact 6/7/8 story
          buildings in the central areas, and relatively few skyscrapers.  Paris also marks the first location where
          my inability to speak the local language proved to be a bit of a barrier.  Most people in the service industry still spoke
          English, but I wouldn't necessarily describe people in general as warm.
        </p>
        <img src={arc} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        <p style={{width: '100%', textAlign: 'center', fontStyle: 'italic', height: '30px', lineHeight: '30px', padding: '5px', margin: 0}}>
          Arc de Triomphe
        </p>
        <p>
          I experienced Paris at a different pace than the previous locations on my trip, mostly due to me staying in an airbnb rather than
          a hostel.  After a climb up 6 stories of stairs (for some reason I didn't realize just how far
          this is when booking) I was greeted by my 11 square meter (aka tiny) studio.  As small as it was, it was excellent to have some
          true privacy after my first 10 days of the Hostel life.  The flat was also in an excellent location, accesssible to much
          of the city if I wanted to walk and also situated near the major metro lines.
        </p>
        <img src={room} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        <p style={{width: '100%', textAlign: 'center', fontStyle: 'italic', height: '30px', lineHeight: '30px', padding: '5px', margin: 0}}>
          My accommodations
        </p>
        <p>
          The Louvre and the d'Orsay were the two museums I went to while in Paris, and they truly did impress.  The Louvre was absolutely
          humungous, I went on two separate occasions as to not get burnt out and take it all in.  The d'Orsay is specifically a French art
          museum that is known for its large collection of impressionist paintings, which is cool because now I know I really like
          impressionist and post-impressionist art.
        </p>
        <img src={louvre} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        <p style={{width: '100%', textAlign: 'center', fontStyle: 'italic', height: '30px', lineHeight: '30px', padding: '5px', margin: 0}}>
          The Louvre
        </p>
        <p>
          Often when visiting large monuments or famous buildings, I find them to be rather boring and not really worth much more than a
          cursory glance around and a photo.  The Arc De Triumph fell into this category, as well as various other sites I've been to so far.
          However, the Eiffel Tower was amazing to see in person and I don't feel I can adequately explain why.  It appears so much larger
          than I imagined, and is stunning up close.  Although you couldn't go directly under the tower without buying a ticket to ascend
          due to construction, I enjoyed a nice afternoon reading in the adjacent park.
        </p>
        <img src={tower} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        <p style={{width: '100%', textAlign: 'center', fontStyle: 'italic', height: '30px', lineHeight: '30px', padding: '5px', margin: 0}}>
          Eiffel Tower
        </p>
        <p>
          I have two gripes with Paris, one with the food and the other with what might be called tourist harassment.
          The food wasn't bad, and due to having the airbnb I did cook in more to take advantage and try and save a bit of money
          since the apartment was more expensive than a hostel.  However, it was somewhat disappointing in that I had heard the food
          would be fantastic, and it didn't live up to the hype.  I'm sure much of it was me not knowing where to eat, and
          in general because I'm around more tourist sites I inevitably eat some meals at some less local places.  The food in comparison with
          Lyon (where I write this from) makes things seem worse, where the 2 larger meals here I've had so far were far better and cheaper
          than anything I ate in Paris.  Going forward I suspect I will have to figure out more effective means of finding good restaurants.
        </p>
        <p>
          One cultural adjustment I've had to make here is that eating in general takes much longer.  I heard it would definitely be more lax the
          further south I went, but even in Paris during Lunch all the tables around me (some with people in suits clearly halfway through the
          working day) ate, got coffee, had dessert, really taking their time with it.  You also have to be direct in asking for the bill from
          the waiter/waitress.  They will seat you, take your order, bring you food, then pretty much leave you alone unless you signal for them.
        </p>
        <img src={cafe} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        <p style={{width: '100%', textAlign: 'center', fontStyle: 'italic', height: '30px', lineHeight: '30px', padding: '5px', margin: 0}}>
          Cafe where I enjoyed some excellent steak & wine and some bad fries
        </p>
        <p>
          The second gripe, and the one that put me off much more than the food, was the constant harassment at tourist sites by people trying
          to sell you stuff, scam you, or some combination of the two.  People would hound you trying to sell you little eiffel tower trinkets or
          wine or beer in the park, but this was oft dissolved with a firm look, a 'No', and a shake of the head.  Not every individual was
          so respectful.  My shoulder was firmly grabbed by a man running after me / trying to tell me to 'Tie a Knot' with a piece of string
          he was holding up (undoubtedly a scam), and
          a woman who had a clipboard looking for signatures (something I specifically read about that was a scam) was shoving / hitting me
          in the chest with the clipboard a couple times as I walked by, and acting pissed off when I wouldn't give her the time of day.  These
          kinds of physical actions, while insignificant in terms of force or any kind of damage, really put me in a fowl mood and I felt like
          its quite ridiculous the local gov't can't come up with some solution to prevent such blatant shitty behavior.
        </p>
        <img src={dame} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        <p style={{width: '100%', textAlign: 'center', fontStyle: 'italic', height: '30px', lineHeight: '30px', padding: '5px', margin: 0}}>
          Paris Notre-Dame
        </p>
        <p>
          One of my favorite parts of the city was Montmartre, a neighborhood in the northwest that rests on a hill and
          overlooks the city.  Montmartre is known to look like the romanticized and 'cute' Paris
          that people see in movies, and often think of when they imagine Paris.  Narrow winding ivy covered streets made the area picturesque,
          although hilariously the street down the hill from this idyllic scene is known for its burlesque shows.
        </p>
        <img src={mont} alt={''} style={{maxWidth: '100%', height: 'auto'}}/>
        <p style={{width: '100%', textAlign: 'center', fontStyle: 'italic', height: '30px', lineHeight: '30px', padding: '5px', margin: 0}}>
          View from Montmartre towards the Eiffel Tower
        </p>
      </div>
    )
  }
}

export default Paris