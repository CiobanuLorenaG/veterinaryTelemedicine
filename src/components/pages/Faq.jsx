import React from 'react'
import { useState } from 'react'
import NavBar from '../pages/NavBar'
import FooterNavBar from '../pages/FooterNavBar'
import '../stylePages/Faq.css'
import Slide from 'react-reveal/Slide'

function Faq() {
  const ReadMore = ({ children }) => {
    const text = children
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore)
    }
    return (
      <p className="text-faq">
        {isReadMore ? text.slice(0, 0) : text}
        <p onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? (
            <button className="more-btn-faq">read more</button>
          ) : (
            <button className="less-btn-faq">show less</button>
          )}
        </p>
      </p>
    )
  }

  return (
    <div className="container-faq">
      <NavBar />
      <div className="content-faq">
        <Slide left>
          <h3>
            Q: What are my options if I can't take my pet with me when I vacate
            my foreclosed house?
          </h3>
        </Slide>
        <br />
        <ReadMore>
          A: If you've already learned that you can't take your pet with you to
          your new home, you have several options. If you know your situation is
          temporary, you may be able to find someone who can provide a foster
          home for your pet(s) until you can reclaim them. If you must
          permanently give up your pets, you will obviously want to find
          permanent, loving homes for them. Try to find someone to foster or
          adopt your pet(s). Check with your family, neighbors, friends, and
          coworkers.
        </ReadMore>
        <br />
                <Slide left>
        <h3>
          Q: What can I do to improve my pet's chances of being adopted into a
          loving home?
        </h3>
        </Slide>
        <br />
        <ReadMore>
          A: First and foremost, a healthy, well-trained, spayed or neutered,
          and obedient pet already has a leg up on getting a great home. Provide
          your pet's complete health record to its new owners or the animal
          shelter, so they know your pet's history. If your pet has been
          microchipped, provide the microchip number and database information so
          that your pet's registration can be transferred to its new owner.
        </ReadMore>
        <br />
                <Slide left>
        <h3>
          Q: Where can I find resources to help me find a home for my pet?
        </h3>
        </Slide>
        <br />
        <ReadMore>
          A: There are many online resources available to help you find a new
          home for your pet, and we've posted a few of them below. We don't
          suggest one is any better than another, and we cannot guarantee the
          quality of the services provided, but we encourage you to thoroughly
          evaluate your options and seek help if you need to find a new home for
          your pet.
        </ReadMore>
        <br />
                <Slide left>
        <h3>Q: My home hasn't been foreclosed, but I want to help. Can I?</h3></Slide>
        <br />
        <ReadMore>
          A: If you're considering getting a pet, one of the best ways you can
          help is to adopt your new pet from a local rescue group or animal
          shelter and give it a loving, responsible and permanent home.
          Alternatively, you can help by fostering animals in need of temporary
          homes. If you already have a pet (or pets), or if owning a pet isn't
          right for you, consider donating money, time, and/or supplies to a
          local rescue group or animal shelter.
        </ReadMore>
        <br />
                <Slide left>
        <h3>Q: Is it important to vaccinate?</h3> <br /></Slide>
        <ReadMore>
          A: Yes! Pets should be vaccinated to protect them from many highly
          contagious and deadly diseases. Experts agree that widespread use of
          vaccines within the last century has prevented death and disease in
          millions of animals. Even though some formerly common diseases have
          now become uncommon, vaccination is still highly recommended because
          these serious disease agents continue to be present in the
          environment.
        </ReadMore>
        <br />
                <Slide left>
        <h3>Q: How often should pets be revaccinated?</h3> <br /></Slide>
        <ReadMore>
          A: Veterinarians have traditionally vaccinated annually; however, they
          are now learning that some vaccines induce immunity that lasts less
          than one year, whereas others may induce immunity that lasts well
          beyond one year. The AVMA recommends that veterinarians customize
          vaccination programs to the needs of their patients. More than one
          vaccination program may be effective.
        </ReadMore>
        <br />        <Slide left>
        <h3>Q: Are there risks associated with vaccination?</h3> <br /></Slide>
        <ReadMore>
          A: Vaccines have protected millions of animals from illness and death
          caused by infectious diseases. All medical procedures, however, carry
          with them some risk. Fortunately, in the case of vaccination, serious
          adverse responses are very infrequent. Veterinarians minimize risk by
          carefully selecting vaccines on the basis of a pet's individual needs
          and by choosing appropriate injection sites. In an effort to find ways
          to prevent even these limited numbers of adverse responses from
          occurring, the AVMA is working with government and industry to
          redefine how information regarding adverse responses is gathered,
          analyzed, and disseminated.
        </ReadMore>
        <br />
                <Slide left>
        <h3>Q: Do you need pet insurance?</h3> <br /></Slide>
        <ReadMore>
          Your veterinarian may be able to recommend a pet insurance company
          based on his or her experience. But it's ultimately your decision
          whether or not to buy, what coverage to choose, and from what company.
          There are consumer websites that compare features and costs of pet
          insurance, and/or offer reviews, and you might find these helpful.
        </ReadMore>
        <br />
      </div>
      <FooterNavBar />
    </div>
  )
}

export default Faq
