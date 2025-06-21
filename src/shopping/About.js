import React, { useEffect } from 'react'
import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, []);
  return (
    <div className='photos'>
      <div>
        <img data-aos='fade-right' alt="images" src="https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGlnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div data-aos='fade-left'>
        <p>The tiger was first scientifically described in 1758. It once ranged widely from the Eastern Anatolia Region in the west to the Amur River basin in the east, and in the south from the foothills of the Himalayas to Bali in the Sunda Islands. Since the early 20th century, tiger populations have lost at least 93% of their historic range and have been extirpated from Western and Central Asia, the islands of Java and Bali, and in large areas of Southeast and South Asia and China. What remains of the range where tigers still roam free is fragmented, stretching in spots from Siberian temperate forests to subtropical and tropical forests on the Indian subcontinent, Indochina and a single Indonesian island</p>
      </div>
      <div data-aos='zoom-in-up'>
        <p>The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides. A lion's pride consists of a few adult males, related females, and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, lions typically do not actively seek out and prey on humans.</p>
      </div>
      <div>
        <img data-aos='flip-left' alt="images" src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div>
        <img data-aos='fade-up-right' alt="images" src="https://images.unsplash.com/photo-1557692538-9564c4b2cd13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwYW50aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div data-aos='fade-up-left'>
        <p>
          A black panther is the melanistic colour variant of the leopard (Panthera pardus) and the jaguar (Panthera onca). Black panthers of both species have excess black pigments, but their typical rosettes are also present. They have been documented mostly in tropical forests, with black leopards in Kenya, India, Sri Lanka, Nepal, Thailand, Peninsular Malaysia and Java, and black jaguars of the Americas in Mexico, Panama, Costa Rica, Brazil and Paraguay. Melanism is caused by a recessive allele in the leopard, and by a dominant allele in the jaguar.
        </p>
      </div>
      <div data-aos='flip-up'>
        <p>
          The jaguar (Panthera onca) is a large cat species and the only living member of the genus Panthera native to the Americas. With a body length of up to 1.85 m (6 ft 1 in) and a weight of up to 158 kg (348 lb), it is the largest cat species in the Americas and the third largest in the world. Its distinctively marked coat features pale yellow to tan colored fur covered by spots that transition to rosettes on the sides, although a melanistic black coat appears in some individuals. The jaguar's powerful bite allows it to pierce the carapaces of turtles and tortoises, and to employ an unusual killing method: it bites directly through the skull of mammalian prey between the ears to deliver a fatal blow to the brain.
        </p>
      </div>
      <div>
        <img data-aos='flip-down' alt="images" src="https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFndWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div>
        <img data-aos='zoom-out' alt="images" src="https://images.unsplash.com/photo-1624958319297-d1aa3a41378e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXRhaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div data-aos='zoom-in'>
        <p>
          The cheetah (Acinonyx jubatus) is a large cat native to Africa and Southwest Asia (today restricted to central Iran). It is the fastest land animal, capable of running at 80 to 98 km/h (50 to 61 mph), as such has evolved specialized adaptations for speed, including a light build, long thin legs and a long tail. It typically reaches 67–94 cm (26–37 in) at the shoulder, and the head-and-body length is between 1.1 and 1.5 m (3 ft 7 in and 4 ft 11 in). Adults weigh between 21 and 72 kg (46 and 159 lb). Its head is small and rounded, with a short snout and black tear-like facial streaks. The coat is typically tawny to creamy white or pale buff and is mostly covered with evenly spaced, solid black spots. Four subspecies are recognised.
        </p>
      </div>
      <div data-aos='zoom-out-right'>
        <p>
          The leopard (Panthera pardus) is one of the five extant species in the genus Panthera, a member of the cat family, Felidae.[4] It occurs in a wide range in sub-Saharan Africa, in some parts of Western and Central Asia, Southern Russia, and on the Indian subcontinent to Southeast and East Asia. It is listed as Vulnerable on the IUCN Red List because leopard populations are threatened by habitat loss and fragmentation, and are declining in large parts of the global range. The leopard is considered locally extinct in Hong Kong, Singapore, South Korea, Jordan, Morocco, Togo, the United Arab Emirates, Uzbekistan, Lebanon, Mauritania, Kuwait, Syria, Libya, Tunisia and most likely in North Korea, Gambia, Laos, Lesotho, Tajikistan, Vietnam and Israel.[3] Contemporary records suggest that the leopard occurs in only 25% of its historical global range.[5][6]
        </p>
      </div>
      <div data-aos='zoom-out-left'>
        <img alt="images" src="https://images.unsplash.com/photo-1573663209453-93f1875e5a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxlb3BhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
      </div>
    </div>
  )
}

export default About
