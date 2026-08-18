// 116 Anatomy Cases — encoded from the uploaded source
// Encoding: A=0, B=1, C=2, D=3, E=4
// img is included where the source question explicitly references a figure.
window.TEST_QUESTIONS = {
  anatomychapter1: [
    {
      q: "A 55-year-old man with severe coughing is admitted to the hospital. Radiologic examination is consistent with tuberculosis of the right lung, with extension to the thoracic vertebral bodies of T6 and T7, producing a “gibbus deformity.” Which of the following conditions is most likely also to be confirmed by radiologic examination?",
      a: [
        "Hyperlordosis",
        "Hyperkyphosis",
        "Scoliosis",
        "Spina bifida",
        "Osteoarthritis",
      ],
      correct: 1,
      explanation:
        "Hyperkyphosis is characterized by a “hunchback” due to an abnormal increase in curvature of the thoracic region of the vertebral column. Hyperlordosis, or “swayback,” is an increase in lumbar curvature of the spine.\n\nLordosis can be physiologic, such as seen in a pregnant woman. Scoliosis is a lateral curvature of the spine with rotation of the vertebrae.\n\nSpina bifida is a neural tube defect characterized by failure of closure of the vertebral arch. Osteoarthritis is a degenerative disorder that affects the articular cartilage of joints and is not specifically related to the thoracic region of the spine.",
    },
    {
      q: "A 68-year-old man is admitted to the hospital due to severe back pain. Radiologic examination reveals severe osteoporosis of the vertebral column, with compression fractures to vertebrae L4 and L5. Which of the following parts of the vertebrae are most likely to be fractured in this patient?",
      a: [
        "Spinous process",
        "Vertebral bodies",
        "Transverse process",
        "Superior articular process",
        "Intervertebral disc",
      ],
      correct: 1,
      explanation:
        "A crush fracture is characterized by compression of the entire vertebral body. The wedge fracture is similar in that it affects the vertebral bodies, but it involves small fractures around the perimeter of the vertebral body.\n\nBoth of these fractures cause reductions in overall height. Fracture of the spinal, transverse, or superior articular processes can be due to an oblique, transverse, or comminuted fracture.\n\nIntervertebral discs are associated with disc herniation, not compression fractures.",
    },
    {
      q: "A 45-year-old man is admitted to the hospital because of severe pain in the back and lower limb. Radiologic examination reveals spinal canal stenosis syndrome. Which of the following conditions is most likely to be confirmed by a magnetic resonance imaging (MRI) examination?",
      a: [
        "Hypertrophy of supraspinous ligament",
        "Hypertrophy of interspinous ligament",
        "Hypertrophy of ligamentum flavum",
        "Hypertrophy of anterior longitudinal ligament",
        "Hypertrophy of nuchal ligament",
      ],
      correct: 2,
      explanation:
        "The ligamentum flavum connects the laminae of two adjacent vertebrae and forms the posterior wall of the vertebral canal. It is the only answer choice that is in direct contact with the vertebral foramen.\n\nTherefore, hypertrophy of only the ligamentum flavum would present as spinal canal stenosis. The supraspinous and interspinous ligaments connect spinous processes.\n\nThe anterior longitudinal ligament connects the anterior portion of the vertebral bodies and intervertebral discs. Finally, the nuchal ligament is a thickened extension of the supraspinous ligament above the level of C7.",
    },
    {
      q: "A 35-year-old man is admitted to the hospital after a severe car crash. Radiologic examination reveals an injury to the dorsal surface of the neck and a fracture of the medial border of the right scapula. During physical examination, the patient presents with the scapula retracted laterally on the affected side. Which of the following nerves has most likely been injured on that side?",
      a: [
        "Axillary",
        "Long thoracic",
        "Dorsal scapular",
        "Greater occipital",
        "Suprascapular",
      ],
      correct: 2,
      explanation:
        "The dorsal scapular nerve (from the ventral ramus of C5) is responsible for innervating rhomboids major and minor. The rhomboids are responsible for retraction of the scapula.\n\nTherefore, if this nerve is damaged, individuals present with a laterally displaced scapula. In this case, the levator scapulae remains functional due to additional innervation provided by C3 to C4 spinal nerves.\n\nThe axillary nerve innervates the deltoid and teres minor muscles. The deltoid muscle abducts the humerus, and the teres minor laterally rotates the humerus.\n\nThe long thoracic nerve innervates the serratus anterior, which functions to protract and upwardly rotate the scapula. The greater occipital nerve is mainly sensory but also contributes to the innervation of the semispinalis capitis.\n\nIn addition, the greater occipital nerve can be involved in occipital neuralgias. The suprascapular nerve innervates the supraspinatus and infraspinatus muscles.\n\nThe supraspinatus abducts the humerus, and the infraspinatus muscles laterally rotate the humerus. Injury to any of these other nerves would not present with a laterally retracted scapula.",
    },
    {
      q: "A 64-year-old man arrived at the clinic with a painful rash and skin eruptions that are localized entirely on one side of his body, closely following the dermatome level of the spinal nerve C7. The patient was diagnosed with the a herpes zoster virus infection known as “shingles.” In what structure has the virus most likely proliferated to cause the patient’s current condition?",
      a: [
        "The sympathetic chain",
        "The dorsal root ganglion of the C7 spinal nerve",
        "The lateral horn of the C7 spinal cord segment",
        "The posterior cutaneous branch of the dorsal primary ramus of C7",
        "The ventral horn of the C7 spinal cord segment",
      ],
      correct: 1,
      explanation:
        "Herpes zoster is a viral disease that remains latent in the dorsal root ganglia of the sensory nerves and when the virus becomes active presents as a painful skin lesion. It is associated only with sensory nerve fibers and has no motor involvement.\n\nThe only answer choice that is solely responsible for sensory innervation is the dorsal root ganglion.",
    },
    {
      q: "A 45-year-old woman states that she has experienced moderate pain for 2 years over her left lower back; pain that radiates to her left lower limb. She states that after lifting a case of soft drinks, the pain suddenly became intense. She was admitted to the emergency department. Radiologic examination revealed intervertebral disc herniation between vertebral levels L4 and L5. Which of the following nerves was most likely affected by the disc herniation?",
      a: ["L1", "L2", "L3", "L4", "L5"],
      correct: 4,
      explanation:
        "Disc herniation in the lumbar region between L4 and L5 affects the L5 spinal nerve roots. Even though the L4 spinal nerve root lies directly between the L4 and L5 vertebrae, it exits from the spinal canal superior to the intervertebral disc, whereas the L5 spinal nerve root lies directly posterior to the disc.",
    },
    {
      q: "A 3-year-old boy is brought by his mother to the emergency department with severe headache, high fever, malaise, and confusion. Radiologic and physical examinations reveal that the patient suffers from meningitis. A lumbar puncture is ordered to confirm the diagnosis. Which vertebral level is the most appropriate location for the lumbar puncture?",
      a: ["T12 to L1", "L1 to L2", "L2 to L3", "L4 to L5", "L5 to S1"],
      correct: 3,
      explanation:
        "A lumbar puncture is performed by taking a sample of CSF from the lumbar cistern (the subarachnoid space below the spinal cord) between vertebrae L4 and L5 or sometimes between L3 and L4. It is done in this region because the spinal cord typically ends at the level of L1 to L2 and the dural sac ends at the level of S2.\n\nTherefore, it is the safest place to do the procedure because it lies between these areas and the risk of injuring the spinal cord is minimized. (Remember in children the cord ends more caudally.)",
    },
    {
      q: "When a lumbar puncture is performed to sample cerebrospinal fluid, which of the following external landmarks is the most reliable to determine the position of the L4 vertebral spine? 5",
      a: [
        "The inferior angles of the scapulae",
        "The highest points of the iliac crests",
        "The lowest pair of ribs bilaterally",
        "The sacral hiatus",
        "The posterior inferior iliac spines",
      ],
      correct: 1,
      explanation:
        "The highest points of the iliac crests are used as a landmark for locating the position of L4 to L5 for a lumbar puncture; they are identified and traced medially toward the vertebral column (Tuffier’s line). The inferior angles of the scapulae lie at vertebral level T7; the lowest ribs lead one to T12; the sacral hiatus is located lower at the distal portion of the sacrum; the posterior inferior iliac spines lie below S2.",
    },
    {
      q: "A 39-year-old man presents with severe neck pain after a whiplash injury, sustained when his car was struck from behind. Radiologic studies reveal trauma to the ligament lying on the anterior surface of the cervical vertebral bodies. Which ligament is most likely disrupted?",
      a: [
        "Anterior longitudinal ligament",
        "Ligamentum flavum",
        "Nuchal ligament",
        "Posterior longitudinal ligament",
        "Transverse cervical ligament",
      ],
      correct: 0,
      explanation:
        "The anterior longitudinal ligament lies anterior to the vertebral bodies along the vertebral column. The ligamentum flavum connects the laminae of two adjacent vertebrae.\n\nThe nuchal ligament is a continuation of the supraspinous ligament above C7, which connects spinous processes. The posterior longitudinal ligament lies on the posterior margin of the vertebral bodies.\n\nThe transverse cervical (cardinal) ligament is associated with the pelvic region of the body and not the spinal column (GAS Figs. 2-31 and 2-34).",
    },
    {
      q: "A 65-year-old man complains of severe back pain and the inability to move his left lower limb. Radiologic studies demonstrate compression of nerve elements at the intervertebral foramen between vertebrae L5 and S1. Which structure is most likely responsible for this space-occupying lesion?",
      a: [
        "Anulus fibrosus",
        "Nucleus pulposus",
        "Posterior longitudinal ligament",
        "Anterior longitudinal ligament",
        "Ligamentum flavum",
      ],
      correct: 1,
      explanation:
        "Compression of nerves at the intervertebral foramen indicates a disc herniation. A disc herniation is characterized by protrusion of the nucleus pulposus through the anulus fibrosus posterolaterally into the spinal canal or intervertebral foramen.\n\nIn general, the ligaments may be affected by the herniation but are not responsible for the compression of the spinal nerve roots.",
    },
    {
      q: "A 27-year-old man is admitted to the emergency department after a car crash. Physical examination reveals weakness during medial rotation and adduction of the humerus. Which of the following nerves was most probably injured?",
      a: [
        "Thoracodorsal",
        "Axillary",
        "Dorsal scapular",
        "Spinal accessory",
        "Radial",
      ],
      correct: 0,
      explanation:
        "The thoracodorsal nerve innervates the latissimus dorsi, one of major muscles that adduct and medially rotate the humerus. The axillary nerve supplies the deltoid muscle, the dorsal scapular nerve supplies the rhomboids and levator scapulae muscles, and the spinal accessory nerve innervates the trapezius.\n\nNone of these nerves medially rotates or adducts the humerus. The radial nerve is responsible for the innervation on the posterior aspect of the arm and forearm.\n\nThe medial and lateral pectoral nerves and the lower subscapular nerve supply the other medial rotators of the humerus.",
    },
    {
      q: "A 39-year-old woman complains of an inability to reach the top of her head to brush her hair with her right hand. History reveals that she had undergone a mastectomy procedure of her right breast 2 months earlier. Physical examination demonstrates winging of her right scapula. Which nerves were most likely damaged during surgery?",
      a: [
        "Axillary",
        "Spinal accessory",
        "Long thoracic",
        "Dorsal scapular",
        "Thoracodorsal",
      ],
      correct: 2,
      explanation:
        "The long thoracic nerve innervates the serratus anterior, which is responsible for elevation and protraction of the scapula beyond the horizontal level while maintaining its position against the thoracic wall. Along with the thoracodorsal nerve, the long thoracic nerve runs superficially along the thoracic wall and is subject to injury during a mastectomy procedure.\n\nThe axillary nerve, the spinal accessory nerve, and the thoracodorsal nerve supply the deltoid muscle, trapezius muscle, and latissimus dorsi muscles, respectively. The dorsal scapular nerve is responsible for innervation of the rhomboids and levator scapulae.\n\nAside from the long thoracic and thoracodorsal nerves, the remaining nerves do not course along the lateral thoracic wall.",
    },
    {
      q: "A 19-year-old man is brought to the emergency department after dislocating his shoulder while playing football. Following treatment of the dislocation, he cannot initiate abduction of his arm. An MRI of the affected shoulder shows a torn muscle. Which muscle was most likely damaged by the injury?",
      a: [
        "Coracobrachialis",
        "Long head of the triceps brachii",
        "Pectoralis minor",
        "Supraspinatus",
        "Teres major",
      ],
      correct: 3,
      explanation:
        "The rotator cuff muscles are common sites of damage during shoulder injuries. These muscles include the supraspinatus, infraspinatus, teres minor, and subscapularis (SITS).\n\nInitiation of abduction of the humerus (the first 15 degrees) is performed by the supraspinatus, followed by the deltoid from 15 to 90 degrees. Above the horizontal, the scapula is rotated by the trapezius and serratus anterior muscles, causing the glenoid fossa to turn superiorly and allowing the humerus to move above 90 degrees.\n\nThe teres major Posterior longitudinal ligament Anterior longitudinal ligament Supraspinous ligament Interspinous ligament Supraspinous ligament Ligamentum flavum Ligamentum flavum and the pectoralis major are responsible for medial rotation and adduction of the humerus. These muscles are therefore not involved in abduction at the glenohumeral joint.",
    },
    {
      q: "A 1-year-old girl is brought to the clinic for a routine checkup. The child appears normal except for a dimpling of the skin in the midline of the lumbar region with a tuft of hair growing over the dimple. What is this relatively common condition that results from incomplete embryologic development?",
      a: [
        "Meningomyelocele",
        "Meningocele",
        "Spina bifida occulta",
        "Spina bifida cystica",
        "Rachischisis",
      ],
      correct: 2,
      explanation:
        "Spina bifida is a developmental condition resulting from incomplete fusion of the vertebral arches within the lumbar region. Spina bifida occulta commonly presents asymptomatically with midline, lumbar, cutaneous stigmata such as a tuft of hair and a small dimple.\n\nMore severe forms (spina bifida cystica) are categorized into three types: Spina bifida cystica with meningocele presents with protrusion of the meninges through the unfused vertebral arches; spina bifida with myelomeningocele is characterized by protrusion both of the meninges and central nervous system (CNS) tissues and is often associated with neurologic deficits; and rachischisis, also known as spina bifida cystica with myeloschisis, results from a failure of neural folds to fuse and is characterized by protrusion of the spinal cord or spinal nerves and meninges.",
    },
    {
      q: "A young resident complains of an itch on his back that appears to be caused by an insect bite. Which nerve fibers carry the sensation of a mosquito bite on the back, just lateral to the spinous process of the T4 vertebra?",
      a: [
        "Somatic afferent",
        "Somatic efferent",
        "Visceral afferent",
        "Visceral efferent",
        "Somatic efferent and visceral afferent",
      ],
      correct: 0,
      explanation:
        "Somatic afferents are responsible for conveying pain, pressure, touch, temperature, and proprioception to the CNS. Afferent fibers carry only sensory stimuli, whereas efferent fibers convey motor information.\n\nVisceral innervation is associated with the autonomic nervous system. Visceral afferents generally carry information regarding the physiologic changes of the internal viscera whereas visceral efferents deliver autonomic motor function to three types of tissue: smooth muscle, cardiac muscle, and glandular epithelium.",
    },
    {
      q: "A 15-year-old woman was suspected of having meningitis. To obtain a sample of cerebrospinal fluid by spinal tap in the lumbar region (lumbar puncture), the tip of the needle must be placed in which of the following locations?",
      a: [
        "In the epidural space",
        "Between anterior and posterior longitudinal ligaments",
        "Superficial to the ligamentum flavum",
        "Between arachnoid mater and dura mater",
        "In the subarachnoid space",
      ],
      correct: 4,
      explanation:
        "CSF is found within the subarachnoid space and is continuous with the ventricles of the brain (CSF flows from the ventricles to the subarachnoid space). The epidural space, positioned between the dura mater and periosteum, contains fat and the internal vertebral venous plexus (of Batson).\n\nThe subdural space, between the arachnoid mater and dura mater, exists only as a potential space and does not contain cerebrospinal fluid. The anterior and posterior longitudinal ligaments traverse the length of the vertebral bodies.",
    },
    {
      q: "A 19-year-old man is diagnosed with a herniated disc but he has no symptoms of spinal cord injury. In the event of intervertebral disc herniation in the cervical region, which of the following ligaments is in an anatomic position to protect the spinal cord from direct compression?",
      a: [
        "Supraspinous",
        "Posterior longitudinal",
        "Anterior longitudinal",
        "Ligamentum flavum",
        "Nuchal ligament",
      ],
      correct: 1,
      explanation:
        "The posterior longitudinal ligament is the only ligament spanning the posterior aspect of the vertebral bodies and intervertebral discs. With intervertebral disc herniation, the nucleus pulposus of the intervertebral disc protrudes posterolaterally.\n\nThe anterior longitudinal ligament traverses the anterior side of the vertebral bodies and thus would not protect the spinal cord from direct compression. The supraspinous and ligamentum flavum ligaments connect the spinous processes and the laminae of adjacent vertebrae, respectively.\n\nThe nuchal ligament is a continuation of the supraspinous ligaments near the C7 vertebrae and runs to the occipital protuberance.",
    },
    {
      q: "In spinal anesthesia, the needle is often inserted between the spinous processes of the L4 and L5 vertebrae to ensure that the spinal cord is not injured. This level is safe because in the adult the spinal cord usually terminates at the disc between which of the following vertebral levels?",
      a: ["T11 and T12", "T12 and L1", "L1 and L2", "L2 and L3", "L3 and L4"],
      correct: 2,
      explanation:
        "This is the location of the conus medullaris, a tapered conical projection of the spinal cord at its inferior termination. Although the conus medullaris rests at the level of L1 and L2 in adults, it is often situated at L3 in newborns.\n\nThe cauda equina and filum terminale extend beyond the conus medullaris.",
    },
    {
      q: "A 22-year-old woman is diagnosed with Raynaud’s disease. In such a case, the patient suffers chronic vasospasm in response to cold. This can lead to arterial constriction and painful ischemia, especially in the fingers or toes. Relief from the symptoms in the hands would require surgical division of which of the following neural elements?",
      a: [
        "Lower cervical and upper thoracic sympathetic fibers",
        "Lower cervical and upper thoracic ventral roots",
        "Lower cervical and upper thoracic dorsal roots",
        "Lower cervical and upper thoracic spinal nerves",
        "Bilateral spinal accessory nerves",
      ],
      correct: 0,
      explanation:
        "The sympathetic division of the autonomic nervous system is primarily responsible for vasoconstriction. Separation of ventral or dorsal roots would lead to undesired consequences, such as a loss of motor or sensory activity.\n\nSimilarly, surgical division of spinal nerves would also have unwanted consequences, but such are not related to the increased arterial constriction and the painful ischemia in the digits. Division of selected sympathetic chain ganglia, however, would decrease the sympathetic outflow to the upper limbs.",
    },
    {
      q: "A 69-year-old woman visits her physician due to severe neck pain. Radiologic studies reveal bony growths (osteophytes) in the intervertebral foramen between vertebrae C2 and C3. Which of the following muscles would be most likely affected by this condition?",
      a: [
        "Rhomboideus major",
        "Serratus anterior",
        "Supraspinatus",
        "Diaphragm",
        "Latissimus dorsi",
      ],
      correct: 3,
      explanation:
        "The diaphragm is innervated by the phrenic nerve, which arises from C3 to C5. The rhomboid, serratus anterior, supraspinatus, and latissimus dorsi are innervated by the ventral rami of the brachial plexus (C5 to T1).",
    },
    {
      q: "A 42-year-old woman is diagnosed with stenosis of the cervical vertebral canal. A laminectomy of two vertebrae is performed. Which of the following ligaments will most likely also be removed?",
      a: [
        "Anterior longitudinal",
        "Denticulate",
        "Ligamentum flavum",
        "Nuchal",
        "Cruciate",
      ],
      correct: 2,
      explanation:
        "The anterior longitudinal ligament runs along the anterior-most aspect of the vertebral column from C1 to the sacrum and would therefore be unaffected by a laminectomy. Denticulate ligaments extend laterally from the pia mater to the arachnoid mater along the length of the spinal cord.\n\nThe ligamentum flavum is one of the two ligaments found in the vertebral canal and is adherent to the anterior aspect of the vertebral arches and often greatly thickened in spinal pathology. It is thus simultaneously removed upon excision of the lamina.\n\nThe nuchal ligament is a thick longitudinal extension continuing from the supraspinous ligament at the level of C7 to the external occipital protuberance (inion). The cruciate ligament is an incorrect answer because it is located anterior to the spinal cord, and thus would not be involved in laminectomy.",
    },
    {
      q: "A 28-year-old pregnant woman is admitted to the obstetrics department for delivery. In the final stages of labor, a caudal anesthetic is administered via the sacral hiatus. Into which of the following spaces in the sacral canal is the anesthetic placed?",
      a: [
        "Vertebral canal",
        "Vertebral venous plexus",
        "Epidural space",
        "Subarachnoid space",
        "Subdural space",
      ],
      correct: 2,
      explanation:
        "The vertebral canal is the longitudinal canal that extends through the vertebrae, containing the meninges, spinal cord, and associated ligaments. The internal vertebral venous plexus is the mostly valveless network of veins extending longitudinally along the vertebral canal.\n\nNeither of these answer choices describes a specific space. The spinal epidural space is found superficially to the dura mater.\n\nIt is a fat-filled space extending from C1 to the sacrum. The subarachnoid space is a true space containing CSF.\n\nIt is found within the CNS and extends to the level of S2. The subdural space is a potential space between the dura and the arachnoid mater.\n\nNormally, these two layers are fused due to the pressure of CSF in the subarachnoid space.",
    },
    {
      q: "A 12-year-old child was brought to the emergency department by his parents because he has been suffering from a very high fever and severe stiffness in his back. The initial diagnosis is meningitis. The attending physician orders a lumbar puncture to confirm the diagnosis. Upon microscopic examination of the cerebrospinal fluid, hematopoietic cells are seen. Which of the following ligaments was most likely penetrated by the needle?",
      a: [
        "Supraspinous",
        "Denticulate",
        "Anterior longitudinal",
        "Posterior longitudinal",
        "Nuchal ligament",
      ],
      correct: 0,
      explanation:
        "Lumbar puncture is generally performed at the level of L4 or L5. The supraspinous ligament extends between spinous processes on the dorsal aspect of the vertebrae.\n\nThe needle will bypass this structure. The denticulate ligaments are not correct because they terminate with the conus medullaris at the level of L2 and are located laterally.\n\nThe anterior longitudinal ligament extends along the most anterior aspect of the vertebral bodies and can be reached only ventrally. The posterior longitudinal ligament is present at the correct vertebral level but will be punctured only if the procedure is performed incorrectly as in this case, where hematopoietic cells were aspirated from the vertebral body anterior to the ligament.\n\nThe nuchal ligament extends cranially from the supraspinous ligament in the lower cervical region to the skull.",
    },
    {
      q: "A 25-year-old male racing car driver is admitted to the emergency department after a severe car crash. Radiologic studies reveal damage to the tip of the transverse process of the third cervical vertebra, with a significantly large pulsating hematoma. What artery is the most likely to have been damaged?",
      a: [
        "Anterior spinal artery",
        "Vertebral artery",
        "Ascending cervical artery",
        "Deep cervical artery",
        "Posterior spinal arteries",
      ],
      correct: 1,
      explanation:
        "The anterior spinal artery is located anteriorly along the spinal cord and is not directly associated with the vertebrae. The vertebral arteries run through the transverse foramina of cervical vertebrae C6 through C1 and are therefore most closely associated with injury to the transverse processes.\n\nThe ascending cervical artery is usually a very small branch from the thyrocervical trunk of the subclavian artery, running on the anterior aspect of the vertebrae. The deep cervical artery arises from the costocervical trunk and is also a very small artery and courses along the posterior aspect of the cervical vertebrae.\n\nThe posterior spinal arteries are adherent to the posterior aspect of the spinal cord.",
    },
    {
      q: "A 79-year-old man, a retired military veteran, presents to the outpatient clinic with an abnormal curvature of the vertebral column. He complains that it 7 has become increasingly painful to walk around town. Upon physical examination, he has an abnormally increased convexity to his thoracic curvature resulting from osteoporosis. Which of the following is the most likely clinical condition of this patient’s spine?",
      a: [
        "Scoliosis",
        "Hyperkyphosis",
        "Spinal stenosis",
        "Lordosis",
        "Herniated disc",
      ],
      correct: 1,
      explanation:
        "Scoliosis is defined as a lateral deviation of the spinal column to either side. Hyperkyphosis is an increased primary curvature of the spinal column.\n\nThis curvature is associated with thoracic and sacral regions and is most likely this patient’s clinical condition. Spinal stenosis is a narrowing of the vertebral canal and is not directly associated with a displacement of the spinal column.\n\nHyperlordosis is the increased secondary curvature affecting the cervical and lumbar regions. A herniated disc is a rupture of the anulus fibrosus of the intervertebral disc, commonly causing a posterolateral displacement of the nucleus pulposus into the vertebral canal.",
    },
    {
      q: "A 42-year-old woman complains of pain and stiffness in her neck. She was injured sliding into second base headfirst during her company’s softball game. Radiographs reveal no fractures of her spine. However, upon physical examination, her right shoulder is drooping and she has difficulty in elevating that shoulder. If you ordered an MRI, it would most likely reveal soft tissue damage involving which of the following nerves?",
      a: [
        "Thoracodorsal nerve",
        "Spinal accessory nerve",
        "Dorsal scapular nerve",
        "Greater occipital nerve",
        "Axillary nerve",
      ],
      correct: 1,
      explanation:
        "The thoracodorsal nerve innervates the latissimus dorsi, which has no direct action on the shoulder girdle. The spinal accessory nerve is the eleventh cranial nerve (CN XI) and innervates both the trapezius and sternocleidomastoid muscles.\n\nThe loss of CN XI results in drooping of the shoulder due to paralysis of the trapezius. In addition to the clinical findings of the MRI, one can test the innervation of this nerve by asking the patient to shrug his or her shoulders against resistance (testing the trapezius), as well as turning his or her head against resistance (testing the sternocleidomastoid).\n\nThe dorsal scapular nerve usually innervates the levator scapulae muscle and the rhomboid muscles. The greater occipital nerve is primarily a sensory nerve innervating the posterolateral aspect of the scalp.\n\nThe axillary nerve is a branch of the brachial plexus and innervates the deltoid and teres minor muscles. It is not involved in shoulder elevation.",
    },
    {
      q: "A 53-year-old man was in a head-on vehicle collision that resulted in compression of his spinal cord by the dens (odontoid process) of the axis, with resulting quadriplegia. Which of the following ligaments was most probably torn?",
      a: [
        "Anterior longitudinal ligament",
        "Transverse ligament of the atlas",
        "Ligamentum flavum",
        "Supraspinous ligament",
        "Nuchal ligament",
      ],
      correct: 1,
      explanation:
        "The anterior longitudinal ligament runs on the anterior aspect of the vertebrae and is not affected. The transverse ligament of the atlas anchors the dens laterally to prevent posterior displacement of the dens.\n\nThis ligament has been torn in this injury. The ligamentum flavum is found on the posterior aspect of the vertebral canal and does not contact the anteriorly placed dens.\n\nThe supraspinous ligament is located along the spinous processes of the vertebrae. The nuchal ligament is a longitudinal extension of the supraspinous ligament above the level of C7.",
    },
    {
      q: "An 18-year-old woman passenger injured in a rollover car crash was rushed to the emergency department. After the patient is stabilized, she undergoes physical examination. She demonstrates considerable weakness in her ability to flex her neck, associated with injury to CN XI. Which of the following muscles is most probably affected by nerve trauma?",
      a: [
        "Iliocostalis thoracis",
        "Sternocleidomastoid",
        "Rhomboid major",
        "Rhomboid minor",
        "Teres major",
      ],
      correct: 1,
      explanation:
        "The iliocostalis thoracis muscle is found in the deep back and functions to maintain posture. It is not associated with neck flexion.\n\nThe sternocleidomastoid muscle is innervated by CN XI and functions in contralateral rotation (unilateral contraction) and flexion (bilateral contraction) of the neck. Rhomboid major and minor are both innervated by the dorsal scapular nerve and serve to adduct the scapulae.\n\nTeres major is innervated by the lower subscapular nerve and serves to medially rotate and adduct the humerus.",
    },
    {
      q: "A 23-year-old man was killed in a high-speed motor vehicle collision after racing his friend on a local highway. When the medical examiner arrives at the scene, it is determined that the most likely cause of death was a spinal cord injury. Upon confirmation by autopsy, the medical examiner officially reports that the patient’s cause of death was a fracture of the pedicles of the axis (C2). Breaking of which of the following ligaments would be most likely implicated in this fatal injury?",
      a: [
        "Ligamentum flavum",
        "Nuchal ligament",
        "Cruciform ligament",
        "Posterior longitudinal ligament",
        "Supraspinous ligament",
      ],
      correct: 2,
      explanation:
        "The pedicles are bony structures connecting the vertebral arches to the vertebral body. The ligamentum flavum runs on the posterior aspect of the vertebral canal and is more closely associated with the laminae than to the pedicles of the vertebrae.\n\nThe nuchal ligament is a longitudinal extension of the supraspinous ligament from C7 to the occiput, both running on the most posterior aspect of the vertebrae along the spinous processes. The cruciform (also called cruciate or transverse ligament of the atlas) ligament is a stabilizing ligament found at the skull base and C1/C2.\n\nIt attaches to the pedicles and helps stabilize the dens. The posterior longitudinal ligament extends the length of the anterior aspect of the vertebral canal and is anterior to the pedicles.",
    },
    {
      q: "A 65-year-old man is injured when a vehicle traveling at a high rate of speed hits his car from behind. Radiologic examination reveals that two of his articular processes are now locked together, a condition known as “jumped facets.” In which region of the spine is this injury most likely to occur?",
      a: ["Cervical", "Thoracic", "Lumbar", "Lumbosacral", "Sacral"],
      correct: 0,
      explanation:
        "Spondylolysis is the anterior displacement of one or more vertebrae. This is most commonly seen with the cervical vertebrae because of their small size and structure and the oblique angle of the articular facets.\n\nLumbar vertebrae are somewhat susceptible to this problem because of the pressures at lower levels of the spine and the sagittal angles of the articular facets. It is much less common in the thoracic vertebrae due to the stabilizing factor of the ribs.\n\nIt is not seen in the sacral vertebrae because they are fused together.",
    },
    {
      q: "Following a car crash, a 47-year-old woman complains of severe headache and back pain. Radiologic examination reveals bleeding of the internal vertebral venous plexus (of Batson), resulting in a large hematoma. In what space has the blood most likely accumulated?",
      a: [
        "Subarachnoid space",
        "Subdural space",
        "Central canal",
        "Epidural space",
        "Lumbar cistern",
      ],
      correct: 3,
      explanation:
        "The internal vertebral plexus (of Batson) surrounds the dura mater in the spinal epidural space; hence the bleeding would cause the hematoma in that space. The subarachnoid space, containing the CSF, is located between pia and arachnoid mater.\n\nA subarachnoid hemorrhage would most likely result from a ruptured intercerebral aneurysm. A subdural hematoma would result most likely from a venous bleed from a torn cerebral vein as it enters the superior sagittal venous sinus within the skull.\n\nThe central canal is located within the gray matter of the spinal cord. The lumbar cistern is an enlargement of the subarachnoid space between the conus medullaris of the spinal cord and the caudal end of the subarachnoid space.",
    },
    {
      q: "A 32-year-old man, an elite athlete, was lifting heavy weights during an intense training session. The athlete felt severe pain radiating to the posterior aspect of his right thigh and leg. The patient was taken to the hospital where MRI revealed a ruptured L4/L5 intervertebral disc. Which nerve is most probably affected?",
      a: ["L3", "L4", "L2", "L5", "S1"],
      correct: 3,
      explanation:
        "In the lumbar region spinal nerves exit the vertebral column below their named vertebrae. In an L4, L5 intervertebral disc herniation, the L5 spinal nerve would be affected as it descends between L4, L5 vertebrae to exit below the L5 level.\n\nL2, L3, and L4 spinal nerves have already exited above the level of herniation; therefore, they would not be affected by this herniation. An “L6” spinal nerve normally does not exist.\n\n(The National Board of Medical Examiners does not allow “made up” structures, but in cases of lumbarization of S1, some people recognize an L6 nerve.)",
    },
    {
      q: "A 24-year-old patient suffered a lower back strain after a severe fall while skiing. MRI studies reveal injury to the muscles responsible for extending and laterally bending the trunk. What arteries provide blood supply for these muscles?",
      a: [
        "Subscapular",
        "Thoracodorsal",
        "Anterior intercostal",
        "Suprascapular",
        "Posterior intercostal",
      ],
      correct: 4,
      explanation:
        "Posterior intercostal arteries supply the deep back muscles, which are responsible for extending and laterally bending the trunk. The subscapular artery supplies the subscapularis muscle, the thoracodorsal artery supplies the latissimus dorsi, the anterior intercostal supplies the upper nine intercostal spaces, and the suprascapular artery supplies the supraspinatus and infraspinatus muscles.\n\nThese muscles are not responsible for extension and lateral flexion of the trunk.",
    },
    {
      q: "A 22-year-old male soccer player is forced to leave the game following a head-to-head collision with another player. He is admitted to the hospital, and radiologic examination reveals slight dislocation of the atlantoaxial joint. As a result, he experiences decreased range of motion at that joint. What movement of the head would most likely be severely affected?",
      a: ["Rotation", "Flexion", "Abduction", "Extension", "Adduction"],
      correct: 0,
      explanation:
        "The atlantoaxial joint is a synovial joint responsible for rotation of the head, not flexion, abduction, extension, or adduction. The atlantooccipital joint is primarily involved in flexion and extension of the head on the neck.",
    },
    {
      q: "A 42-year-old man is struck in the back, rupturing the internal vertebral venous plexus (of Batson). Radiologic studies reveal a hematoma causing compression of the spinal cord. When aspirating the excess blood, the physician performing the procedure should stop the needle just before puncturing which of the following structures?",
      a: [
        "Spinal cord",
        "Pia mater",
        "Arachnoid mater",
        "Dura mater",
        "Ligamentum flavum",
      ],
      correct: 3,
      explanation:
        "The internal vertebral plexus (of Batson) lies external to the dura mater in the epidural space. To aspirate excess blood, the physician must pass the needle through the ligamentum flavum to reach the epidural space wherein the blood would accumulate.\n\nThe spinal cord, pia mater, and arachnoid mater are located deep to the epidural space.",
    },
    {
      q: "A 35-year-old man pedestrian is crossing a busy intersection and is hit by a truck. He is admitted to the emergency department, and a CT scan reveals a dislocation of the fourth thoracic vertebra. Which of the following costal structures is most likely also involved in the injury?",
      a: [
        "Head of the fourth rib",
        "Neck of the fourth rib",
        "Head of the third rib",
        "Tubercle of the third rib",
        "Head of the fifth rib",
      ],
      correct: 4,
      explanation:
        "The T4 thoracic vertebra articulates with the head of the fifth rib. The head of the rib has two facets.\n\nThe rib articulates with the superior facet on the body of its own vertebra (the fourth rib articulates with the superior facet T4 vertebra) and with the inferior facet on the body of the vertebra above (the fourth rib articulates with the inferior facet of T3 vertebra). Taking the T4 vertebra into consideration, the superior facet of this vertebra articulates with the head of the fourth rib and the inferior facet articulates with the head of the fifth rib.\n\nThe head of the fourth rib has two points of articulation (a joint with the vertebral body and a costotransverse joint) on T4, so when it is injured it moves as a unit, whereas the fifth rib has only one articulation with T4.",
    },
    {
      q: "A 20-year-old male hiker suffers a deep puncture wound during a fall. Physical examination reveals a lesion between the trapezius and latissimus dorsi muscles on the right lateral side of his back. Upon admission to the hospital, physical examination reveals weak adduction and medial rotation of his arm. Which of the following muscles is most probably injured?",
      a: [
        "Teres minor",
        "Triceps brachii",
        "Supraspinatus",
        "Infraspinatus",
        "Teres major",
      ],
      correct: 4,
      explanation:
        "The teres major is responsible for adduction and medial rotation of the humerus, the teres minor is responsible for lateral rotation of the humerus, the triceps brachii is responsible for extension of the forearm, the supraspinatus is responsible for the first 0 to 15 degrees of abduction, and the infraspinatus is a lateral rotator.",
    },
    {
      q: "A 22-year-old man is thrown through a plate glass wall in a fight. Radiologic examination reveals that the lateral border of his right scapula is shattered. He is admitted to the emergency department, and physical examination reveals difficulty laterally rotating his arm. Which of the following muscles is most probably injured?",
      a: [
        "Teres major",
        "Infraspinatus",
        "Latissimus dorsi",
        "Trapezius",
        "Supraspinatus",
      ],
      correct: 1,
      explanation:
        "The infraspinatus is responsible for lateral rotation of the humerus (along with the teres minor, not a choice here). The teres major is responsible for adduction and medial rotation of the humerus.\n\nThe latissimus dorsi is responsible for adduction, extension, and medial rotation of the humerus. The trapezius is an elevator of the scapula and rotates the scapula during abduction of the humerus above the horizontal plane.\n\nThe supraspinatus is responsible for the first 0 to 15 degrees of abduction.",
    },
    {
      q: "A 24-year-old woman presents with severe headache, photophobia, and stiffness of her back. Physical examination reveals positive signs for meningitis. The attending physician decides to perform a lumbar puncture to determine if a pathogen is in the cerebrospinal fluid (CSF). What is the last structure the needle will penetrate before reaching the lumbar cistern?",
      a: [
        "Arachnoid mater",
        "Dura mater",
        "Pia mater",
        "Ligamentum flavum",
        "Posterior longitudinal ligament",
      ],
      correct: 0,
      explanation:
        "When a lumbar puncture is performed, the needle must penetrate the ligamentum flavum, the dura mater, and finally the arachnoid mater to reach the subarachnoid space where the CSF is located. The lumbar cistern is a continuation of the subarachnoid space below the conus medullaris.\n\nThe pia mater is adherent to the spinal cord, and the posterior longitudinal ligament is attached to the posterior aspect of the vertebral bodies.",
    },
    {
      q: "A 19-year-old presents at the emergency department with high fever, severe headache, nausea, and stiff neck that have persisted for 3 days. The attending physician suspects meningitis and obtains a sample of CSF using a lumbar puncture. From which of the following spaces was the CSF collected?",
      a: [
        "Epidural space",
        "Subdural space",
        "Subarachnoid space",
        "Pretracheal space",
        "Central canal of the spinal cord",
      ],
      correct: 2,
      explanation:
        "The subarachnoid space, containing the CSF, is located between the pia and the arachnoid mater. Neither the epidural space, the subdural space, nor the pretracheal space contains CSF.\n\nAlthough the central canal, contained within the substance of the spinal cord, does contain CSF, extraction of CSF from this space would result in spinal cord injury. CSF circulates within the subarachnoid space and can be aspirated only from that location.\n\nThe subdural space is only a potential space between the dura and arachnoid mater. The epidural space contains the epidural fat and Batson’s venous plexus and is the site to inject an anesthetic for epidural anesthesia.\n\nCSF is not located in the pretracheal space.",
    },
    {
      q: "A 38-year-old man is admitted to the emergency department after a car collision. During physical 9 examination several lacerations to the back are discovered. Pain from lacerations or irritations of the skin of the back is conveyed to the central nervous system by which of the following?",
      a: [
        "Dorsal primary rami",
        "Communicating rami",
        "Ventral primary rami",
        "Ventral roots",
        "Intercostal nerves",
      ],
      correct: 0,
      explanation:
        "General somatic afferent fibers are conveyed from the skin of the back via the dorsal primary rami. Communicating rami contain general visceral efferent (sympathetic) fibers and general visceral afferent fibers of the autonomic nervous system.\n\nVentral primary rami convey mixed spinal nerves to/from all other parts of the body excluding the back, and parts of the head innervated by cranial nerves. The ventral roots contain only efferent (motor) fibers.\n\nIntercostal nerves are the ventral rami of T1 to T11. The ventral ramus of T12 is the subcostal nerve.",
    },
    {
      q: "A 66-year-old woman had been diagnosed with a tumor on her spine. She has started to retain urine and is experiencing rectal incontinence. Both of these symptoms are signs of conus medullaris syndrome. At which of the following vertebral levels is the tumor probably located?",
      a: ["L3/L4", "L3", "L4", "T12 to L2", "T11"],
      correct: 3,
      explanation:
        "The conus medullaris is usually located at the L1 to L2 vertebral level; therefore, any choice that contains that region is the correct answer. L3 to L4 is a common location to perform lumbar puncture, but it is caudal to the apex of the conus medullaris.\n\nL3 and L4 are caudal to the conus medullaris. T11 is superior to the conus medullaris.",
    },
    {
      q: "Examination of a 3-day-old male infant reveals protrusion of his spinal cord and meninges from a defect in the lower back. Which of the following describes this congenital anomaly?",
      a: [
        "Avulsion of meninges",
        "Meningitis",
        "Spina bifida occulta",
        "Spina bifida with myelomeningocele",
        "Spina bifida with meningocele",
      ],
      correct: 3,
      explanation:
        "Because the meninges and spinal cord are included in the protrusion, the patient’s condition is a classic presentation of spina bifida with myelomeningocele. If the protrusion contains only meninges but no CNS tissue, it is known as spina bifida with meningocele.\n\nMeningitis is an inflammation of the meninges caused by bacteria, viral, or numerous other irritants (e.g., blood). It does not cause deformation of the vertebrae or result in protrusion of spinal cord contents.\n\nSpina bifida occulta is a normally asymptomatic condition in which the vertebral laminae fail to fuse completely during embryologic development. A tuft of hair is commonly seen growing over the affected region (usually lumbar in position).",
    },
    {
      q: "A 32-year-old mother complains of serious pain in the coccygeal area some days after giving birth. To determine whether the coccyx is involved, a local anesthetic is first injected in the region of the coccyx and then dynamic MRI studies are performed. Physical examination reveals pain with palpation to the region of the coccyx. The local anesthetic is used to interrupt which of the following nerve pathways?",
      a: [
        "Visceral afferents",
        "Somatic efferent",
        "Somatic afferent",
        "Sympathetic preganglionic",
        "Parasympathetic preganglionic",
      ],
      correct: 2,
      explanation:
        "Somatic afferent fibers convey localized pain, typically from the body wall and limbs. Visceral afferents convey autonomic nervous system sensory information.\n\nPain from these fibers will present as dull and diffuse. Somatic efferent fibers convey motor information to skeletal muscle.\n\nSympathetic preganglionic fibers are visceral efferent fibers and do not contain sensory information. Parasympathetic preganglionic fibers are also visceral efferents and do not contain sensory information.",
    },
    {
      q: "During a routine physical examination, a 65-yearold man is tested for ease and flexibility of the movements of his lumbar region. Which of the following movements is most characteristic of the intervertebral joints in the lumbar region?",
      a: [
        "Circumduction",
        "Lateral flexion",
        "Abduction",
        "Adduction",
        "Inversion",
      ],
      correct: 1,
      explanation:
        "Lateral flexion is the best answer because other movements of the lumbar portion of the vertebral column are very limited due to the orientation of the articular facets.",
    },
    {
      q: "A 72-year-old man with cancer of the prostate gland presents with loss of consciousness and seizures. A CT scan is performed and a brain tumor is diagnosed. The tumor spread to the brain from the pelvis via the internal vertebral venous plexus (of Batson). What feature of the plexus allows this to happen?",
      a: [
        "The internal venous plexus contains the longest veins in the body.",
        "The internal venous plexus has valves that ensure one-way movement of blood.",
        "The internal venous plexus is located in the subarachnoid space.",
        "The internal venous plexus is, in general, valveless.",
        "The internal venous plexus is located in the subdural space.",
      ],
      correct: 3,
      explanation:
        "Batson’s venous plexus, in general, is a valveless network of veins located in the epidural space of the vertebral canal. The lack of valves can provide a route for the metastasis of cancer (e.g., from prostate or breast to brain) because the flow of blood is bidirectional due to local pressures.\n\nThe length of Batson’s plexus is irrelevant to the question. B is incorrect because Batson’s plexus, in general, does not have valves or one-way movement of blood.\n\nBatson’s plexus is located within the epidural space, not the subarachnoid or subdural spaces.",
    },
    {
      q: "A 26-year-old man painting his house slipped and fell from the ladder, landing on the pavement below. After initial examination in the emergency department, the patient is sent to the radiology department. Radiographs reveal that the portion of his left scapula that forms the tip, or point, of the shoulder has been fractured. Which part of the bone was fractured?",
      a: [
        "Coracoid process",
        "Superior angle of the scapula",
        "Glenoid",
        "Spine of the scapula",
        "Acromion",
      ],
      correct: 4,
      explanation:
        "The acromion (the highest point of the shoulder) is the part of the scapula that forms the “point” of the shoulder. The coracoid process is located more medially.\n\nThe superior angle of the scapula is located near the midline of the back. The glenoid of the scapula articulates with the head of the humerus to form the glenohumeral joint.\n\nThe spine of the scapula is located posteriorly and separates supraspinous and infraspinous fossae.",
    },
    {
      q: "A 43-year-old male construction worker survived a fall from a two-story building but lost all sensation in his lower limbs and was admitted to the hospital for examination and treatment. Radiologic studies revealed that he crushed his spinal cord at vertebral level C6. Which of the following muscles will most likely be paralyzed?",
      a: [
        "Sternocleidomastoid",
        "Trapezius",
        "Diaphragm",
        "Latissimus dorsi",
        "Deltoid",
      ],
      correct: 3,
      explanation:
        "All of the spinal nerves from C6 and below will be affected. The trapezius and sternocleidomastoid muscles will be intact because they are innervated by the spinal accessory nerve.\n\nThe deltoid will be affected because its nerve motor supply is from the axillary nerve derived from C5 and C6. The diaphragm will work properly as its motor nerve supply is derived from the phrenic nerve (C3 to C5).",
    },
    {
      q: "A maternal serum sample with high alphafetoprotein alerted the obstetrician to a possible neural 10 tube defect. Ultrasound diagnosis revealed a myelomeningocele protruding from the back of the child. Which of the following is the most likely diagnosis of this congenital anomaly?",
      a: [
        "Cranium bifida",
        "Spina bifida occulta",
        "Spina bifida cystica",
        "Hemothorax",
        "Caudal regression syndrome",
      ],
      correct: 2,
      explanation:
        "Spina bifida cystica refers to spina bifida with a meningocele or myelomeningocele and is the correct answer. Cranium bifida could present with meningocele in the skull, but it would not be located in the lower back.\n\nSpina bifida occulta is a defect in the formation of the vertebral arches and does not usually present with meningocele. Hemothorax refers to blood accumulation in the pleural space surrounding the lungs.\n\nCaudal regression syndrome presents with loss or deformation of the distal part of the spine and/or spinal cord and is not related to a meningocele or myelomeningocele, in general.",
    },
    {
      q: "A 7-year-old girl who is somewhat obese is brought to the emergency department because of a soft lump above the buttocks. Upon physical examination you note the lump is located just superior to the iliac crest unilaterally on the left side. The protrusion is deep to the skin and pliable to the touch. Which of the following is the most probable diagnosis?",
      a: [
        "Tumor of the external abdominal oblique muscle",
        "Herniation at the lumbar triangle (of Petit)",
        "Indirect inguinal hernia",
        "Direct inguinal hernia",
        "Femoral hernia",
      ],
      correct: 1,
      explanation:
        "The lumbar triangle (of Petit) is bordered medially by the latissimus dorsi, laterally by the external abdominal oblique, and inferiorly by the iliac crest. The floor of Petit’s triangle is formed by the internal abdominal oblique, and this is a possible site of herniation.\n\nAn indirect inguinal hernia is located in the inguinal canal of the anterior abdominal wall. A direct inguinal hernia is located in Hesselbach’s triangle of the anterior abdominal wall.\n\nA femoral hernia occurs below the inguinal ligament. Answer A is not the best answer because this lump is described as soft and pliable, which would not likely indicate a tumor, as tumors tend to be hard masses.",
    },
    {
      q: "A 54-year-old woman is admitted to the emergency department due to increasing back pain over the preceding year. MRI reveals that her intervertebral discs have been compressed. It is common for the discs to decrease in size in people older than 40, and this can result in spinal stenosis and disc herniation. At which locations are the spinal nerves most likely to be compressed?",
      a: [
        "Between the denticulate ligaments",
        "As they pass through the vertebral foramen",
        "Between the superior and inferior articular facets",
        "Between inferior and superior vertebral notches",
        "Between the superior and inferior intercostovertebral joints",
      ],
      correct: 3,
      explanation:
        "This question tests anatomic knowledge relating to typical vertebra and the spinal cord. Intervertebral disc herniations occur when the nucleus pulposus of the intervertebral disc protrudes through the anulus fibrosus into the intervertebral foramen or vertebral canal.\n\nThe most common protrusion is posterolaterally, where the anulus fibrosus is not reinforced by the posterior longitudinal ligament. The inferior and superior vertebral notches frame the intervertebral foramen, so this is the most likely location of compression.\n\nThe denticulate ligaments are lateral extensions of pia mater that anchor to the dura mater, and help maintain the spinal cord in position within the subarachnoid space. The vertebral foramen is the canal through which the spinal cord passes; while this may also be a place of compression, it is not the most likely site of herniation.\n\nArticular facets are the locations where vertebral bodies articulate with each other. Intercostovertebral joints are locations where vertebral bodies articulate with ribs.",
    },
    {
      q: "A 37-year-old pregnant woman is given a caudal epidural block to alleviate pain during vaginal delivery. Caudal epidural blocks involve injection of local anesthetic into the sacral canal. Which of the following landmarks is most commonly used for the caudal epidural block?",
      a: [
        "Anterior sacral foramina",
        "Posterior sacral foramina",
        "Cornua of the sacral hiatus",
        "Intervertebral foramina",
        "Median sacral crest",
      ],
      correct: 2,
      explanation:
        "Caudal anesthesia is used to block the spinal nerves that carry sensation from the perineum. This procedure is commonly used by anesthesiologists to relieve pain during labor and childbirth.\n\nAdministration of local anesthetic to the epidural space is via the sacral hiatus, which opens between the sacral cornua. The anterior sacral foramina are located on the pelvic surface of the sacrum and are not palpable from a dorsal approach.\n\nThe posterior sacral foramina and intervertebral foramina are the openings through which sacral nerves exit and are not palpable landmarks. The median sacral crest is cranial to the injection site.",
    },
    {
      q: "A 34-year-old pregnant woman in the maternity ward was experiencing considerable pain during labor. Her obstetrician decided to perform a caudal epidural block. What are the most important bony landmarks used for the administration of such anesthesia?",
      a: [
        "Ischial tuberosities",
        "Ischial spines",
        "Posterior superior iliac spines",
        "Sacral cornua",
        "Coccyx",
      ],
      correct: 3,
      explanation:
        "The sacral cornua lie on either side of the sacral hiatus, from which one can gain access to the sacral canal. This is the best landmark for administration of anesthesia.\n\nThe ischial tuberosities are more commonly used as landmarks for a pudendal nerve block. The ischial spines are only palpated intravaginally.\n\nThe posterior superior iliac spines, though palpable, are not proximal enough for an epidural block within the sacral canal. The coccyx is not part of the sacral canal.",
    },
    {
      q: "A 22-year-old man is brought into the emergency department following a brawl in a tavern. He has severe pain radiating across his back and down his left upper limb. He supports his left upper limb with his right hand, holding it close to his body. Any attempt to move the left upper limb greatly increases the pain. A radiograph is ordered and reveals an unusual sagittal fracture through the spine of the left scapula. The fracture extends superiorly toward the suprascapular notch. Which nerve is most likely affected?",
      a: [
        "Suprascapular nerve",
        "Thoracodorsal nerve",
        "Axillary nerve",
        "Subscapular nerve",
        "Suprascapular nerve and thoracodorsal nerve",
      ],
      correct: 0,
      explanation:
        "The suprascapular nerve passes through the suprascapular notch, deep to the superior transverse scapular ligament. This nerve is most likely affected in a fracture of the scapula as described in the question.\n\nThe thoracodorsal nerve runs behind the axillary artery and lies superficial to the subscapularis muscle and would therefore be protected. The axillary nerve passes posteriorly through the quadrangular space, which is distal to the suprascapular notch.\n\nThe subscapular nerve originates from the posterior cord of the brachial plexus, which is distal to the site of fracture.",
    },
    {
      q: "A 5-year-old boy is admitted to the hospital because of pain in the upper back. Radiologic examination reveals abnormal fusion of the C5 and C6 vertebrae and a high-riding scapula. Which of the following is the most likely diagnosis?",
      a: [
        "Lordosis",
        "Kyphosis",
        "Scoliosis",
        "Spina bifida",
        "Klippel-Feil syndrome",
      ],
      correct: 4,
      explanation:
        "Klippel-Feil syndrome is a congenital defect in which there is a reduction, or extensive fusion of one or more cervical vertebrae. It often manifests as a short, stiff neck with limited motion.\n\nHyperlordosis is an abnormal increase in lumbar curvature. Hyperkyphosis (“hunchback”) is an abnormal increase in thoracic curvature.\n\nScoliosis is a lateral curvature of the spine. Spina bifida can present with deformities in the lumbar region.",
    },
    {
      q: "A 53-year-old man is admitted to the emergency department due to severe back pain. MRI examination reveals anterior dislocation of the body of the L5 vertebra upon the sacrum. Which of the following is the most likely diagnosis?",
      a: [
        "Spondylolysis",
        "Spondylolisthesis",
        "Herniation of intervertebral disc",
        "Lordosis",
        "Scoliosis",
      ],
      correct: 1,
      explanation:
        "Spondylolisthesis is an anterior vertebral displacement created by an irregularity in the anterior margin of the vertebral column such that L5 and the overlying L4 (and sometimes L3) protrude forward rather than being restrained by S1. Spondylolysis is a condition in which the region between the superior and inferior articular facets (on the posterior arch of the L5 vertebra) is damaged or missing, which is not the case in this example.\n\nHerniation is a protrusion of the nucleus pulposus through the anulus fibrosus, and this is not associated with vertebral dislocation. Hyperlordosis and scoliosis are excessive curvatures that do not involve dislocations.",
    },
    {
      q: "A male newborn infant is brought to the clinic by his mother and diagnosed with a congenital malformation. MRI studies reveal that the cerebellum and medulla oblongata are protruding inferiorly through the foramen magnum into the vertebral canal. What is this clinical condition called?",
      a: [
        "Meningocele",
        "Klippel-Feil syndrome",
        "Chiari II malformation",
        "Hydrocephalus",
        "Tethered cord syndrome",
      ],
      correct: 2,
      explanation:
        "Chiari II malformation results from herniation of the medulla and cerebellum into the foramen magnum. Meningocele is a small defect in the cranium in which only the meninges herniate.\n\nKlippel-Feil syndrome results from an abnormal number of cervical vertebral bodies. Hydrocephalus results from an overproduction of cerebrospinal fluid, obstruction of its flow, or interference with CSF absorption.\n\nTethered cord syndrome is a congenital anomaly often caused by a defective closure of the neural tube. This syndrome is characterized by a low conus medullaris and a thickened filum terminale.",
    },
    {
      q: "A 62-year-old woman is admitted to the hospital because of her severe back pain. Radiologic examination reveals that the L4 vertebral body has slipped anteriorly, with fracture of the zygapophysial joint (Fig. 1-2). What is the proper name of this condition?",
      photo: "../../anatomy/assets/photo/fig1-2.png",
      a: [
        "Spondylolysis and spondylolisthesis",
        "Spondylolisthesis",
        "Crush vertebral fracture",
        "Intervertebral disc herniation",
        "Klippel-Feil syndrome",
      ],
      correct: 0,
      img: "Fig. 1-2",
      explanation:
        "Spondylolisthesis is an anterior displacement created by an irregularity in the anterior margin of the vertebral column such that L5 and the overlying L4 (and sometimes L3) protrude forward. Spondylolysis is a condition in which the region between the superior and inferior articular facets (on the posterior arch of the L5 vertebra) is damaged or missing, which is not the case in this example.\n\nCompression vertebral fracture is a collapse of vertebral bodies as a result of trauma. Intervertebral disc herniations occur when the nucleus pulposus protrudes through the anulus fibrosus into the intervertebral foramen or vertebral canal.\n\nThe most common protrusion is posterolaterally, where the anulus fibrosus is not reinforced by the posterior longitudinal ligament. Klippel-Feil syndrome results from an abnormal number of cervical vertebral bodies.",
    },
    {
      q: "A 40-year-old woman survived a car crash in which her neck was hyperextended when her vehicle was struck from behind. At the emergency department, a plain radiograph of her cervical spine revealed a fracture of the odontoid process (dens). Which of the following was also most likely injured?",
      photo: "../../anatomy/assets/photo/fig1-2.png",
      a: [
        "Anterior arch of the atlas",
        "Posterior tubercle of the atlas",
        "Atlanto-occipital joint",
        "Inferior articular process of the axis",
        "Anterior tubercle of the atlas",
      ],
      correct: 0,
      explanation:
        "The odontoid process, or the dens, projects superiorly from the body of the axis and articulates with the anterior arch of the atlas. The posterior and anterior tubercles of the atlas are bony eminences on the outer surface.\n\nThe inferior articular facet is where the axis articulates with the C3 vertebra (GAS Fig. 2-21).",
    },
    {
      q: "A 34-year-old woman is admitted to the emergency department after a car crash. Radiologic examination reveals a whiplash injury in addition to hyperextension of her cervical spine. Which of the following ligaments will most likely be injured?",
      a: [
        "Ligamentum flavum",
        "Anterior longitudinal ligament",
        "Posterior longitudinal ligament",
        "Anulus fibrosus",
        "Interspinous ligament",
      ],
      correct: 1,
      explanation:
        "The anterior longitudinal ligament is a strong fibrous band that covers and connects the anterolateral aspect of the vertebrae and intervertebral discs; it maintains stability and prevents hyperextension. It can be torn by cervical hyperextension.\n\nThe ligamentum flavum helps maintain upright posture by connecting the laminae of two adjacent vertebrae. The posterior longitudinal ligament runs within the vertebral canal supporting the posterior aspect of the vertebrae and prevents hyperflexion.\n\nThe anulus fibrosus is the outer fibrous part of an intervertebral disc. The interspinous ligament connects adjacent spinous processes.",
    },
    {
      q: "A 23-year-old college student is admitted to the emergency department after jumping from a 50-foot high waterfall. The MRI of his back reveals a lateral shift of the spinal cord to the left. Which of the following structures has most likely been torn to cause the deviation?",
      a: [
        "Posterior longitudinal ligament",
        "Tentorium cerebelli",
        "Denticulate ligaments",
        "Ligamentum flavum",
        "Nuchal ligament",
      ],
      correct: 2,
      explanation:
        "The denticulate ligaments are lateral extensions of pia mater that attach to the dura mater between the dorsal and ventral roots of the spinal nerves. These ligaments function to keep the spinal cord in the midline position.\n\nThe posterior longitudinal ligament supports the posterior aspect of the vertebrae within the vertebral canal. The tentorium cerebelli is a layer of dura mater that supports the occipital lobes of the cerebral hemispheres and covers the cerebellum.\n\nThe ligamentum flavum helps maintain upright posture by connecting the laminae of two adjacent vertebrae. The nuchal ligament is a thickening of the supraspinous ligaments extending from the C7 vertebra to the external occipital protuberance.",
    },
    {
      q: "A 6-year-old boy is admitted to the hospital with coughing and dyspnea. During taking of the history, he complains that it feels like there is glass in his lungs. Auscultation reveals abnormal lung sounds. The abnormal lung sounds are heard most clearly during inhalation with the scapulae protracted. Which of the following form the borders of a triangular space where one should place the stethoscope in order to best hear the lung sounds?",
      a: [
        "Latissimus dorsi, trapezius, medial border of scapula",
        "Deltoid, levator scapulae, trapezius",
        "Latissimus dorsi, external abdominal oblique, iliac crest",
        "Quadratus lumborum, internal abdominal oblique, inferior border of the twelfth rib",
        "Rectus abdominis, inguinal ligament, inferior epigastric vessels",
      ],
      correct: 0,
      explanation:
        "The region bounded by the upper border of the latissimus dorsi, the lateral border of the trapezius, and the medial border of the scapula is known as the triangle of auscultation. Lung sounds can be heard most clearly from this location because minimal tissue intervenes between the skin of the back and the lungs.\n\nThe deltoid, levator scapulae, and trapezius do not form the borders of the so-called “triangle of auscultation.” The latissimus dorsi, external abdominal oblique, and iliac crest form the border of Petit’s inferior lumbar triangle. The quadratus lumborum, internal abdominal oblique, and inferior border of the twelfth rib form the border of the Grynfeltt’s superior lumbar triangle.\n\nThe rectus abdominis, inguinal ligament, and inferior epigastric vessels form the border of the inguinal triangle (of Hesselbach).",
    },
    {
      q: "A 45-year-old woman is admitted to the outpatient clinic for shoulder pain. During physical examination Fig. 1-2 she presents with weakened shoulder movements. Radiologic examination reveals signs of quadrangular space syndrome, causing weakened shoulder movements. Which of the following nerves is most likely affected?",
      photo: "../../anatomy/assets/photo/fig1-2.png",

      a: ["Suprascapular", "Subscapular", "Axillary", "Radial", "Ulnar"],
      correct: 2,
      img: "Fig. 1-2",
      explanation:
        "The weakness in shoulder movement results from denervation of the teres minor and deltoid by the axillary nerve, which passes through the quadrangular space. Quadrangular space syndrome occurs when there is hypertrophy of the muscles that border the quadrangular space or fibrosis of portions of the muscles that are in contact with the nerve.",
    },
    {
      q: "A 29-year-old female elite athlete was lifting heavy weights during an intense training session. The athlete felt severe pain radiate suddenly to the posterior aspect of her right thigh and leg. The patient was taken to the hospital where an MRI was performed (Fig. 1-3). Which nerve was most probably affected?",
      photo: "../../anatomy/assets/photo/fig1-3.png",
      a: ["L3", "L4", "L2", "L5", "S1"],
      correct: 3,
      img: "Fig. 1-3",
      explanation:
        "In this MRI a posterolateral herniation between L4/L5 exists. In the lumbar region, spinal nerves exit the vertebral column below their named vertebrae.\n\nIn an L4/L5 intervertebral disc herniation, the L5 spinal nerve would be affected as it descends between L4/L5 vertebrae to exit below the L5 level.",
    },
    {
      q: "A 58-year-old man in the intensive care ward exhibited little voluntary control of urinary or fecal activity following repair of an abdominal aortic aneurysm. In addition, physical examination revealed widespread paralysis of his lower limbs. These functions were essentially normal prior to admission to the hospital. The most likely cause of this patient’s problems is which of the following?",
      a: [
        "Injury to the left vertebral artery",
        "Injury of the great radicular artery (of Adamkiewicz)",
        "Ligation of the posterior spinal artery",
        "Transection of the conal segment of the spinal cord",
        "Division of the thoracic sympathetic chain",
      ],
      correct: 1,
      explanation:
        "The (great radicular) artery of Adamkiewicz is important for blood supply to anterior and posterior spinal arteries. The location of this artery should be noted during surgery because damage to it can result in dire consequences, including paraplegia (loss of all sensation and voluntary movement inferior and at the level of the injury).\n\nInjury to the left vertebral artery would not be likely due its superior location to the surgical site. Ligation of the posterior spinal artery would not occur because of its protected location inside the vertebral canal.\n\nTransection of the conus medullaris of the spinal cord would not occur as this structure is located at L1, L2 levels and is, again, protected inside the vertebral canal. Division of the thoracic sympathetic chain would not be likely as the symptoms described include limb paralysis, which would not be a consequence of sympathetic disruption (GAS Fig.\n\n2-49A).",
    },
    {
      q: "A 23-year-old woman is admitted to the hospital due to back pain. Radiologic examination reveals that she suffers from a clinical condition affecting her vertebral column. Her history reveals that she suffered from polio and has a muscular dystrophy. Which of the following conditions of the vertebral column will most likely be present in this patient?",
      a: [
        "Hyperlordosis",
        "Hyperkyphosis",
        "Scoliosis",
        "Spina bifida",
        "Osteoarthritis",
      ],
      correct: 2,
      explanation:
        "Scoliosis can be a secondary condition in such disorders as muscular dystrophy and polio in which abnormal muscle does not keep the normal alignment of the vertebral column and results in a lateral curvature. Hyperlordosis is increased secondary curvature of the lumbar region.\n\nIt can be caused by stress on the lower back and is quite common during late pregnancy. Hyperkyphosis is increased primary curvature of the thoracic regions and produces a hunchback deformity.\n\nIt can be secondary to tuberculosis, producing a “gibbus deformity,” which results in angulated kyphosis at the lesion site. Spina Superior articular facet of CII Dens Inferior articular facet on lateral mass of CI bifida is a congenital defect and would not present as a result of muscular dystrophy or polio.\n\nOsteoarthritis most commonly presents with age from normal “wear and tear.” It is highly unlikely in a 23-year-old woman.",
    },
    {
      q: "A 26-year-old competitive football player has been complaining of pain, weakness, numbness, and tingling for the past 2 months in his upper limb. Imaging studies reveal a cervical disc herniation compressing the nerve roots and a portion of the spinal cord. An anterior cervical discectomy and fusion (ACDF) surgery is performed. The intervertebral disc is examined upon removal and the anulus fibrosus and nucleus pulposus are severely damaged posterolaterally. What type of cartilage most likely gives the tensile strength of the intervertebral disc?",
      a: ["Hyaline", "Elastic", "Fibrous", "Epiphysial", "Elastic and fibrous"],
      correct: 2,
      explanation:
        "The intervertebral disc consists of an outer anulus fibrosus and inner nucleus pulposus. The tensile strength comes from the anulus fibrosus, which limits rotation between vertebrae.\n\nHyaline cartilage is found in the joint capsule and epiphysial plate. Elastic cartilage is found in, for example, the epiglottis.",
    },
    {
      q: "A 26-year-old competitive football player has been complaining of pain, weakness, numbness, and tingling for the past 2 months in his upper limb. Imaging studies reveal a cervical disc herniation compressing the nerve roots and a portion of the spinal cord. An ACDF surgery is performed. The intervertebral disc is examined upon removal and the nucleus and anulus and nucleus pulposus are severely damaged posterolaterally. What is the embryologic origin of the anulus fibrosus and nucleus pulposus, respectively?",
      a: [
        "Notochord and neural crest cells",
        "Neural crest cells and ectoderm",
        "Sclerotome and myotome",
        "Mesenchymal cells from sclerotome and neural crest cells",
        "Mesenchymal cells from sclerotome and notochord",
      ],
      correct: 0,
      explanation:
        "Notochord remnant forms the gelatinous nucleus pulposus and the surrounding mesenchyme which is derived from the adjacent sclerotome forms the concentric fibrous anulus fibrosus. There is no direct neural crest or ectoderm involvement.",
    },
    {
      q: "A 55-year-old woman has suffered from a middle ear infection for the past month. She recently developed right-sided miosis, partial ptosis, anhydrosis, and redness of the conjunctiva. Biopsy examination of which of the following structures would show the cell bodies of neurons affected by this disease?",
      a: [
        "Anterior gray horn of the spinal cord",
        "Lateral gray horn of the spinal cord",
        "Posterior gray horn of the spinal cord",
        "Spinal ganglia",
        "Lateral column of spinal cord white matter",
      ],
      correct: 1,
      explanation:
        "Horner’s syndrome is characterized by, among other things, constricted pupils, sunken eyes, partially drooping eyelid (ptosis), and dryness of the skin on the face. It is caused by problems in sympathetic autonomic pathways such as damage to the lateral horn.\n\nHorner’s syndrome is a result of disruption to the sympathetic nerves whose cell bodies are located in the lateral gray horn of the spinal cord. The anterior gray horn has cell bodies for somatic efferent fibers whereas the posterior gray serves as a location for the axons of sensory fibers whose cell bodies are located in the spinal ganglion.\n\nThere are no cell bodies located in the white matter of the spinal cord.",
    },
    {
      q: "A 62-year-old man is admitted to the emergency department after a severe car crash resulting in a whiplash injury. MRI examination reveals several hairline vertebral fractures in the cervical region impinging the dorsal primary rami of the same levels. Two months after the injury the patient recovered well, however, there is still some weakness in the function of a muscle. Which of the following muscles is most likely affected?",
      a: [
        "Rhomboid major",
        "Levator scapulae",
        "Rhomboid minor",
        "Semispinalis capitis",
        "Latissimus dorsi",
      ],
      correct: 3,
      explanation:
        "Semispinalis capitis is the only muscle among the choices that is supplied by the dorsal rami. All of the other muscles are supplied by the ventral rami.\n\nThe rhomboid major and minor are innervated by the ventral primary rami of the dorsal scapular nerve. The levator scapulae is innervated by branches of C4 and C5, as well as from branches of dorsal scapular nerve.\n\nThe latissimus dorsi is innervated by thoracodorsal nerve.",
    },
    {
      q: "A 22-year-old man has suffered from headaches and some muscle weakness to his upper muscles of the back for the last 6 months. An MRI shows a large tumor compressing the suboccipital and greater occipital nerves. Which of the following muscles will most likely still be functioning normally?",
      a: [
        "Rectus capitis posterior major and minor",
        "Semispinalis capitis",
        "Splenius capitis",
        "Obliquus capitis superior",
        "Obliquus capitis inferior and lateral",
      ],
      correct: 2,
      explanation:
        "The splenius capitis is supplied by the dorsal rami. The obliquus capitis muscles are innervated by branches of the suboccipital nerve which also supplies the rectus capitus posterior major and minor.\n\nThe greater occipital nerve supplies the semispinalis capitis. Posterior spinal artery Deep cervical artery Costocervical trunk Thyrocervical trunk Subclavian artery Posterior intercostal artery Segmental spinal artery Artery of Adamkiewicz (branch from segmental spinal artery) Ascending cervical artery Vertebral artery Segmental medullary arteries Anterior spinal artery Segmental medullary arteries (branch from segmental spinal artery) Lateral sacral artery Segmental spinal artery",
    },
    {
      q: "A 36-year-old man was found guilty of first-degree murder and sentenced to death by judicial hanging. The radiological image below shows the vertebra that is fractured as a result of the hanging. The mechanism of injury resulting in death is forcible hyperextension resulting in a fracture of which of the following structures?",
      a: [
        "Odontoid process",
        "Transverse process",
        "Lateral mass",
        "Pedicle (pars articularis)",
        "Spinous process",
      ],
      correct: 3,
      explanation:
        "Following judicial hanging the pedicles of C2 are fractured and the cruciform ligament is torn which results in the upper spinomedullary junction being crushed by the odontoid process, killing the victim. The odontoid process is typically not fractured in such cases.\n\nThe C1 vertebra is not necessarily involved so there may be no lateral mass involvement. Similarly, there is no transverse or spinous process involvement.",
    },
    {
      q: "A 72-year-old woman presented to her primary care physician after sustaining a fall in her bathroom. Her vital signs were normal and routine blood work was obtained for analysis. As part of her work up, a radiograph of her vertebral column was performed and revealed a wedge fracture at the fourth thoracic vertebra and thin cortical bone showing signs of osteoporotic changes. What will be the most likely type of abnormal spinal curvature in such a patient?",
      a: ["Hyperkyphosis", "Scoliosis", "Hyperlordosis", "Normal", "Primary"],
      correct: 0,
      explanation:
        "The thoracic vertebrae contribute to the primary curvature and wedge fracture here from osteoporosis, infection or trauma leads to kyphosis. Hyperlordosis occurs when the above changes occur in the lumbar region.\n\nScoliosis is an abnormal lateral curvature of the vertebrae, which also involves rotation of the vertebrae on one another.",
    },
    {
      q: "A 65-year-old woman who has been otherwise well presents to her physician with complaints of a group of painful blisters over her back in the distribution of the T9 dermatome. She noticed that a few days prior to the eruption of the blisters she experienced an intense burning sensation over her skin. She was diagnosed with herpes zoster (shingles). Where are the neural cell bodies located that are responsible for the pain sensation?",
      a: [
        "Dorsal horn",
        "Lateral horn",
        "Dorsal root ganglia",
        "Sympathetic chain ganglia",
        "White rami communicans",
      ],
      correct: 2,
      explanation:
        "Somatic afferent fibers convey localized pain, typically from the body wall and limbs and the cell bodies are found in the dorsal root ganglia. The dorsal horn is found at all spinal cord levels and is comprised of sensory nuclei that receive and process incoming somatosensory information.\n\nThe lateral horn comprises autonomic neurons innervating visceral and pelvic organs. The sympathetic chain ganglia deliver the sympathetic information to the body.\n\nWhite rami communicans carry preganglionic sympathetic fibers and are called white because the fibers it contains are myelinated.",
    },
    {
      q: "A 53-year-old man was in a head-on collision resulting in the dens crushing the spinal cord. Which ligament was most likely torn for the dens to crush the spinal cord?",
      a: [
        "Anterior and posterior longitudinal ligaments",
        "Transverse ligament of the atlas",
        "Interspinous ligament",
        "Supraspinous ligament",
        "Nuchal ligament",
      ],
      correct: 1,
      explanation:
        "The transverse ligament of the atlas anchors the dens laterally to prevent posterior displacement of the dens, which has been torn in this injury. The anterior longitudinal ligament runs on the anterior aspect of the vertebrae and is not affected.\n\nThe ligamentum flavum is found on the posterior aspect of the vertebral canal and does not contact the anteriorly placed dens. The supraspinous ligament is located along the spinous processes of the vertebrae.\n\nThe nuchal ligament is a longitudinal extension of the supraspinous and interspinous ligaments above the level of C7.",
    },
    {
      q: "A 16-year-old girl is sent for a presports physical examination prior to the beginning of her school year. She has no medical complaints or any clinical past history. On physical examination, the physician notices one shoulder is higher than the other. The student is then asked to bend forward at the waist to touch her toes. This maneuver results in a posterior bulging of 14 the ribs on the right side. Which one of the following is most likely diagnosis?",
      a: [
        "Kyphosis",
        "Spondylosis",
        "Lordosis",
        "Spondylolisthesis",
        "Scoliosis",
      ],
      correct: 4,
      explanation:
        "Scoliosis is defined as a lateral deviation of the spinal column to either side and is often associated with a “rib-hump” as seen on examination when bending forward to touch the toes. Hyperkyphosis is an increased primary curvature of the spinal column.\n\nThis curvature is associated with thoracic and sacral regions and is most likely this patient’s clinical condition. Hyperlordosis is the increased secondary curvature affecting the cervical and lumbar regions.",
    },
    {
      q: "A 60-year-old man has been feeling sharp pains over his left lower chest and back for several days. A rash of red erupted vesicles is seen at the left border of the sternum just at the level of the xiphoid process. Antiviral treatment is given for herpes zoster. Which of the following locations will contain the neural cell bodies responsible for the painful sensation?",
      a: [
        "Ventral horn of T6 spinal cord segment",
        "Lateral horn of T6 spinal cord segment",
        "Dorsal root ganglion of T4 spinal nerve",
        "Dorsal root ganglion of T6 spinal nerve",
        "Dorsal root ganglion of T10 spinal nerve",
      ],
      correct: 3,
      explanation:
        "Cells from a specific somite develop into the dermis of the skin in a precise location, somatic sensory fibers originally associated with that somite enter the posterior region of the spinal nerve. The somatic sensory (afferent) fibers convey localized pain, typically from the body wall and limbs and the cell bodies are found in the dorsal root ganglia.\n\nThe lateral horn comprises autonomic neurons innervating visceral and pelvic organs. The lateral horn comprises autonomic neurons innervating visceral and pelvic organs.\n\nThe anterior horn contains motor neurons that supply muscles of the body wall and the limbs.",
    },
    {
      q: "A 70-year-old man with prostate cancer is experiencing sharp shooting pains radiating from his neck into the upper limb. An MRI of his spine demonstrates a small metastatic mass in the cervical region extending into the left intervertebral foramen between C6 and C7. The intervertebral discs appear normal. Which neural structure is most likely being compressed by the metastatic mass to account for the pain?",
      a: [
        "C8 spinal nerve",
        "Dorsal horn of C6 spinal cord segment",
        "C6 spinal nerve",
        "Dorsal horn of C7 spinal nerve",
        "C7 spinal nerve",
      ],
      correct: 4,
      explanation:
        "In the cervical region, spinal nerves exit the vertebral column above their named vertebrae. From the thoracic region and below the spinal nerves exit the vertebral column below their named vertebrae.",
    },
    {
      q: "A 3-day-old girl develops a fever. She is irritable and not feeding. As part of the workup for fever of unknown origin, a lumbar puncture is performed. This puncture must be done below the spinal cord which usually ends at which vertebral level in a patient of this age?",
      a: ["L1", "S1", "L3", "S3", "L5"],
      correct: 2,
      explanation:
        "Lumbar puncture is generally performed at the level of L4, L5. The spinal cord ends at the level of L1/L2 in adults and at the level of L2/L3 in newborns.",
    },
    {
      q: "During a surgical procedure to debride an abscess involving the erector spinae muscle at vertebral level T8, the nerve branch supplying the skin and this muscle is unavoidably severed. What are the anatomical locations of the cell bodies of the nerve fibers normally found in this branch?",
      a: [
        "Ventral horn and dorsal horn",
        "Ventral horn, dorsal horn, and lateral horn",
        "Ventral horn, dorsal root ganglion, and lateral horn",
        "Ventral horn, dorsal root ganglion, and sympathetic paravertebral ganglion",
        "Ventral horn, dorsal horn, and dorsal root ganglion",
      ],
      correct: 3,
      explanation:
        "The erector spinae muscle is supplied by the dorsal rami, which carry motor, sensory, and autonomic fibers. The cell bodies of the motor part are found in the anterior horn, while the cell bodies of the sensory fibers are found in the dorsal root ganglia.\n\nThe cell bodies of the sympathetic fibers are found in the paravertebral ganglia.",
    },
    {
      q: "While waiting in his car at a stop sign, a 28-yearold man was rear-ended by a van, resulting in neck hyperextension. He was admitted to the emergency department and a whiplash injury was diagnosed. The next day his neck was stiff and painful. Which structure was most likely damaged to cause the pain?",
      a: [
        "Anterior longitudinal ligament",
        "Posterior longitudinal ligament",
        "Ligamentum flavum",
        "Intervertebral disc",
        "Supraspinous ligament",
      ],
      correct: 0,
      explanation:
        "The anterior longitudinal ligament is a strong fibrous band that covers and connects the anterolateral aspect of the vertebrae and intervertebral discs; it maintains stability and prevents hyperextension. It can be torn by cervical hyperextension.\n\nThe ligamentum flavum helps maintain upright posture by connecting the laminae of two adjacent vertebrae. The posterior longitudinal ligament runs within the vertebral canal supporting the posterior aspect of the vertebrae and prevents hyperflexion.\n\nThe anulus fibrosus is the outer fibrous part of an intervertebral disc. The interspinous ligament connects adjacent spinous processes.",
    },
    {
      q: "A 38-year-old man who is a professional golfer complains of chronic lower back pain with radiating pain to the heel. The pain is so debilitating that he now has trouble ambulating. MRI of the lower back reveals severe narrowing of an intervertebral foramen (IVF), which has caused compression of the exiting nerve root. Surgery is required to correct the problem. During surgery the neurosurgeon carefully accesses the IVF using a lateral approach and shaves bone off the superior margin (roof) of the IVF to decompress the exiting nerve root. Which of the following vertebral bony features is the neurosurgeon most likely shaving off?",
      a: [
        "Superior articular process",
        "Lamina",
        "Inferior articular process",
        "Pedicle",
        "Spinous process",
      ],
      correct: 3,
      explanation:
        "The boundaries of an intervertebral foramen (clockwise) include the following: the superior margin (roof) is formed by the inferior vertebral notch of the vertebra above, the anterior margin by the intervertebral disc between the vertebral bodies of the adjacent vertebrae, the inferior margin (floor) by the superior vertebral notch of the vertebra below, and the posterior margin by the zygapophysial (facet) joint of the adjacent vertebrae. Each pedicle contains superior and inferior vertebral notches.",
    },
    {
      q: "The following statement was found in the radiology report of a magnetic resonance imaging scan of the cervical spine: “An acute posterolateral herniation of the most superiorly located intervertebral disc is located within the corresponding intervertebral foramen and compressing the exiting nerve.” Which of the following nerves was the radiologist most likely referring to in the report?",
      a: ["C1", "C2", "C3", "C4", "C5"],
      correct: 2,
      explanation:
        "The most superiorly positioned intervertebral disc is between the C2 to C3 vertebrae. In the cervical region the spinal nerves exit superior to their corresponding vertebrae and take a somewhat horizontal path.\n\nThe C3 nerve therefore exits through the C2 to C3 intervertebral foramen and would be affected by a posterolateral disc herniation at this level. The C1 nerve exists between the C1 vertebra and the occipital bone of the cranium and would not be affected.\n\nThe C2 nerve passes superior to the second vertebra and would not be affected by a herniated disc between C2 and C3. C4 and C5 both exit superior to their corresponding vertebrae which is below the level of the herniated disc and will therefore not be affected.",
    },
    {
      q: "A 14-year-old girl accidentally flipped her bicycle off a curb, fell, and landed on her face. Although she was wearing a helmet, she landed in such a way that her neck was forced into hyperextension. Which of the following ligaments of the cervical spine was stretched to the greatest degree during her injury?",
      a: [
        "Posterior longitudinal ligament",
        "Ligamentum nuchae",
        "Ligamenta flava",
        "Supraspinous ligament",
        "Anterior longitudinal ligament",
      ],
      correct: 4,
      explanation:
        "Ligaments serve to restrict movement. The anterior longitudinal ligament courses downward on the anterior surface of the vertebral bodies attaching to the intervertebral discs along its way.\n\nIt is stretches from the base of the skull inferiorly to the anterior surface of the sacrum. The anterior longitudinal ligament is the most anteriorly positioned ligament of the vertebral column and limits its extension.\n\nThe posterior longitudinal ligament travels on the posterior surface of the vertebral bodies attaching to the intervertebral discs along the way. This ligament serves to prevent excessive flexion of the vertebral column and extends from C2 to the sacrum.\n\nThe supraspinous ligament attaches the tips of the spinous processes to each other from C7 to the sacrum. Superiorly the ligament broadens becoming more distinct and triangular and is termed the ligamentum nuchae.\n\nLigamentum nuchae limits excessive flexion of the cervical spine and serves as an attachment for muscles. Ligamentum flava attach the internal surfaces of adjacent lamina to each other and prevent them from pulling apart during flexion.",
    },
    {
      q: "An orthopedic surgeon was teaching two residents during a workshop. For the purpose of learning, one resident acted as the patient and the other as the clinician. The surgeon asked the resident-clinician to use a marker and draw a horizontal line connecting the highest points of the iliac crests on the skin of the resident-patient. The surgeon then asked the residentclinician to palpate the midline area on the skin where the subarachnoid space terminates inferiorly. Which of the following most likely represents the area on the skin where the resident-physician palpated?",
      a: [
        "Three spinous processes superior to the horizontal line",
        "Two spinous processes inferior to the horizontal line",
        "Three spinous processes inferior to the horizontal line",
        "Two spinous processes superior to the horizontal line",
        "The spinous process bisected by the horizontal line",
      ],
      correct: 2,
      explanation:
        "A horizontal line that connects the highest points of the iliac crests typically bisects the spinous process of the L4 vertebra or L4-L5 interspace (Tuffier’s line). The lumbar cistern, which represents the subarachnoid space, terminates at the level corresponding to the S2 spinous process.\n\nThree spinous processes inferiorly from the drawn line between the iliac crests would correspond to S2 spinous processes. Two and three spinous processes above the drawn line would be at the vertebral level L2 and L1, respectively, which would correspond to the approximate location where the spinal cord ends and therefore the pia mater.",
    },
    {
      q: "An MRI scan of the thoracic spine of a 68-year-old man with acute midback pain revealed a large tumor arising from the anterior median fissure of the spinal cord at the level of the T3 vertebra. The artery compressed by the tumor is most likely formed superiorly by direct branches from which of the following arteries?",
      a: [
        "Ascending cervical",
        "Segmental medullary",
        "Vertebral",
        "Segmental spinal",
        "Posterior spinal",
      ],
      correct: 2,
      explanation:
        "The anterior spinal artery lies in the anterior median fissure and would likely be compressed by the tumor. This artery is formed superiorly by the union of two branches that directly arise from the vertebral arteries.\n\nAscending cervical artery is not found within the vertebral canal and does not contribute to the blood supply of the spinal cord. The segmental spinal arteries follow the spinal nerves and provide the segmental medullary vessels which run along the dorsal and ventral roots to supply the lateral aspect of the spinal cord.\n\nThere are two posterior spinal arteries, each are located in the posterolateral sulcus on the posterior aspect and have only small branches to the direct area.",
    },
    {
      q: "Radiographs of a 12-year-old girl with midback pain reveal a hemivertebra of the lower thoracic spine. Which additional finding would most likely be demonstrated on the radiographs?",
      a: [
        "Osteoporosis",
        "Scoliosis",
        "Hyperlordosis",
        "Spondylolisthesis",
        "Sacralization",
      ],
      correct: 1,
      explanation:
        "Hemivertebra is a condition where part of one or more vertebrae does not develop. This causes an abnormal lateral bending of the spinal column known as scoliosis, which may also include rotational deformities.\n\nOsteoporosis is a condition where bones become gradually less dense and may cause fractures even in minor traumas. Hyperlordosis is characterized by an increase in the anterior curvature of the lumbar or cervical spines.\n\nIt is a result of an increase in thickness anterior, or a decrease in thickness posterior, on the vertebral bodies. Spondylolisthesis is an anterior displacement of a portion of the vertebra consequent to a fracture of the pars interarticularis (spondylolysis).\n\nSacralization is when the fifth lumbar vertebra fuses to the sacrum.",
    },
    {
      q: "In a report of a radiograph of the cervical spine the radiologist wrote the following: “Severe narrowing of the C7-T1 intervertebral foramen (IVF) on the left.” Which nerve was most likely compressed as a result of this finding?",
      a: ["C6", "C7", "C8", "T1"],
      correct: 2,
      explanation:
        "There are seven (7) cervical vertebrae and eight (8) cervical spinal nerves. Nerves C1 to C7 exit superior to their corresponding vertebrae, whereas nerve C8 exits inferiorly to the C7 vertebra.\n\nThe nerves of the thoracic and subsequent regions all exit inferior to their corresponding vertebrae.",
    },
    {
      q: "A mother brought her 15-month-old previously healthy child to the pediatrician and nervously told the physician that her child now had “a curvature in her low back.” The mother stated that this curvature was not present previously and that she noticed it when the child started standing and walking. The physician examined the child and then reassured the mother that the spinal curvature was normal. Which curvature did the mother most likely observe?",
      a: [
        "Thoracic kyphosis",
        "Cervical lordosis",
        "Lumbar lordosis",
        "Cervical kyphosis",
        "Thoracic lordosis",
      ],
      correct: 2,
      explanation:
        "When a child is born only one curvature is present in the vertebral column, the primary curvature, which is concave anteriorly and termed kyphosis. During postnatal development two additional curvatures form, secondary curvatures, which are convex anteriorly and termed lordosis.\n\nThe first forms in response to the child lifting its head and is in the cervical spine, the second forms once the child is sitting and completes once the child starts to walk. Thoracic kyphosis is the normal curvature with which we are born and cervical lordosis is associated with the neck and develops much earlier on.\n\nCervical kyphosis and thoracic lordosis would both be considered abnormal curvatures in a child of this age.",
    },
    {
      q: "During a gross anatomy laboratory session, a professor demonstrates a large back muscle that inserts onto the floor of the intertubercular sulcus of the humerus. Which of the following structures is most likely the vertebral origin of the muscle that the professor is demonstrating?",
      a: [
        "Spinous processes of T7 to L5",
        "Spinous processes of C7 to T12",
        "Transverse processes of C1 to C4",
        "Spinous processes of T2 to T5",
        "Spinous processes of C7 and T1",
      ],
      correct: 0,
      explanation:
        "The muscle that was demonstrated by the professor was the latissimus dorsi, which attaches to the spinous processes of vertebrae T7 to L5 and the floor of the intertubercular sulcus. None of the other options describes attachments sites for muscles attaching to the upper limb.",
    },
    {
      q: "A drug that preferentially destroys sclerotomes during embryogenesis would most likely result in 16 underdevelopment of which of the following structures?",
      a: [
        "Nucleus pulposus of intervertebral disc",
        "Vertebral bodies",
        "Dorsal root ganglion",
        "Spinal cord",
        "Anulus fibrosus of intervertebral disc",
      ],
      correct: 1,
      explanation:
        "Sclerotomes are the derivatives of somites that develop into bone and if eliminated will result in underdevelopment of the vertebrae. The nucleus pulposus is a remnant of the notochord.\n\nThe dorsal root ganglion is formed by neural crest cells that migrate during development. The neural tube is the precursor for the spinal cord and the anulus fibrosus develops from the sclerotome component of the somite.",
    },
    {
      q: "Which of the following muscles is most likely located immediately deep to the semispinalis muscles, pass from a lateral point of origin in a superomedial direction to attach to spinous processes, and cross between 2 and 4 vertebrae?",
      a: ["Multifidus", "Rotatores", "Longissimus", "Iliocostalis", "Spinalis"],
      correct: 0,
      explanation:
        "Multifidus is a deep muscle, which attaches from the transverse processes to the spinous processes usually crossing four to six segments. Longissimus, iliocostalis, and spinalis are not deep to semispinalis but are superficial.\n\nThe rotators typically attach between the spinous processes or lamina of vertebrae and the transverse processes of the vertebra one or two segments below.",
    },
    {
      q: "A 32-year-old construction worker falls from a scaffold and is brought to the emergency department with severe lower back pain. Radiographs of the lumbar spine reveal bilateral pars interarticularis fractures of the L5 vertebra. Which of the following radiographic views would most likely reveal these fractures?",
      a: [
        "Anteroposterior",
        "Lateral",
        "Posteroanterior",
        "Oblique",
        "Anteroposterior open mouth",
      ],
      correct: 3,
      explanation:
        "The oblique radiographic view is ideal to show the pars interarticularis. In this projection a “Scottie dog” can be seen; the neck of the dog is the pars interarticularis, where the fracture may be seen.\n\nIn the lateral view, the pedicles are superimposed on the pars interarticularis and so it cannot be easily seen. In the anteroposterior and posteroanterior views, the vertebral bodies make it difficult to see the pars interarticularis.\n\nThe anteroposterior open mouth is a radiographic view of the upper cervical region.",
    },
    {
      q: "A radiology report of a cervical spine MRI scan contains the following statement: “A small 1-cm tumor is located within a muscle on the lateral border of the right suboccipital triangle.” The muscle to which the radiologist is most likely referring inserts on which of the following bony features?",
      a: [
        "Transverse process of atlas",
        "Lateral portion of occipital bone below inferior nuchal line",
        "Occipital bone between superior and inferior nuchal lines",
        "Medial portion of occipital bone below inferior nuchal line",
        "Posterior tubercle of atlas",
      ],
      correct: 0,
      explanation:
        "The muscle that forms the lateral border of the suboccipital triangle is the obliquus capitis superior. This muscle originates from the transverse process of the atlas and inserts untoon the occipital bone between superior and inferior nuchal lines.\n\nThe muscle that inserts at the transverse process of the atlas is the obliquus capitis inferior which forms the inferior border of the suboccipital triangle. The rectus capitis posterior major inserts on the lateral portion of occipital bone below the inferior nuchal line and the rectus capitis posterior minor inserts on the medial portion of occipital bone below the inferior nuchal line.\n\nThese muscles form the medial border of the triangle. The rectus capitis posterior minor originates from the posterior tubercle of the atlas.",
    },
    {
      q: "Radiographs of the lumbar spine of a 68-year-old woman with lower back pain were taken and in the radiology report the following was written: “The anteroposterior view demonstrates marked bilateral enlargement of the transverse processes of a single vertebra. The length and width of both transverse processes of this single vertebra are enlarged and the inferior aspects of these bony features appear to be articulating with the bone immediately below it, so much so that the single vertebra appears to have morphologic characteristics similar to the bone immediately below it.” The single vertebra referred to by the radiologist in the report is most likely which of the following?",
      a: [
        "L1 vertebra",
        "L4 vertebra",
        "S2 vertebra",
        "S1 vertebra",
        "L5 vertebra",
      ],
      correct: 4,
      explanation:
        "Sacralization is a process where the L5 vertebra completely or incompletely fuses with the sacrum. This vertebra adapts the characteristics of the sacrum with an increase in the length and width of both transverse processes.",
    },
    {
      q: "A 45-year-old man was injured in a motor vehicle crash and brought to the emergency department. Radiographs of the upper cervical spine revealed a type III dens fracture demonstrated by a horizontal radiolucent line on the superior half of the posterior aspect of the C2 vertebral body. Which of the following ligaments most likely has direct attachment to the bony area where the fracture was located?",
      a: [
        "Apical ligament of dens",
        "Superior longitudinal band of cruciform ligament",
        "Transverse ligament of atlas",
        "Inferior longitudinal band of cruciform ligament",
        "Ligamenta flava",
      ],
      correct: 3,
      explanation:
        "The inferior longitudinal band of the cruciform ligament runs inferiorly from the transverse ligament of the atlas and attaches to the posterosuperior aspect of the vertebral body of the axis (C2). The transverse ligament of the atlas spans the distance between the medial aspects of the lateral masses, holding the dens in place.\n\nThe superior longitudinal band of the cruciform ligament runs from the transverse cervical ligament superiorly to attach to the occiput. The apical ligament runs from the tip of the dens to the anterior margin of the foramen magnum.\n\nThe ligamentum flavum is located in the vertebral canal and connects the laminae of adjacent vertebrae.",
    },
    {
      q: "A 35-year-old man underwent a laminectomy of the T8 to T9 vertebrae. During the surgery, the neurosurgeon observed that the posterior roots were compressed at that level due to a space-occupying lesion. Which of the following arteries was most likely directly compressed by the lesion?",
      a: [
        "Radicular",
        "Segmental spinal",
        "Segmental medullary",
        "Anterior spinal",
        "Posterior spinal",
      ],
      correct: 0,
      explanation:
        "The radicular arteries are branches of the segmental spinal arteries. They occur at every vertebral level and follow and provide blood supply to the anterior and posterior roots.\n\nA space occupying lesion that compresses the posterior roots will also compress the arteries that supply them. The segmental spinal arteries are feeder arteries that reinforce the blood supply to the spinal cord and arise from the vertebral and deep cervical arteries in the neck, the posterior intercostals in the thorax, and the lumbar arteries in the abdomen.\n\nThe anterior and posterior spinal arteries arise from the vertebral artery and supply the spinal cord directly. The segmental medullary arteries are also branches of the segmental spinal arteries that anastomose directly with the anterior and posterior spinal arteries.",
    },
    {
      q: "An 8-year-old girl was brought to a pediatrician for a routine physical examination. The figure associated with this question is a photograph of the child (Fig. 1-4). Which of the following best describes the embryologic basis for this child’s condition?",
      photo: "../../anatomy/assets/photo/fig1-4.png",
      a: [
        "Underdevelopment of the secondary ossification center in the vertebral arch",
        "Underdevelopment of the primary ossification center in the spinous process",
        "Underdevelopment of the primary ossification center in the vertebral body",
        "Underdevelopment of the secondary ossification center in the vertebral body",
        "Underdevelopment of the primary ossification center in the vertebral arch",
      ],
      correct: 4,
      img: "Fig. 1-4",
      explanation:
        "The patient in the figure above has spina bifida occulta. This is a developmental condition resulting from incomplete ossification and failure of fusion of the vertebral arches.\n\nThree primary ossification centers should be present in the fetus by the eighth week: one in the centrum (to form the vertebral body) and one in each half of the vertebral arch. Five secondary ossification centers develop in the vertebrae after puberty: one at the tip of the spinous processes, the tips of the transverse processes, and on the inferior and superior rims of the vertebral body.",
    },
    {
      q: "The following statement is written in the radiology report of an MRI scan of the cervical spine: “A large osteophyte is emanating from the posterolateral area of the vertebral body of the vertebra immediately above the C3 nerve root and is severely compressing the C3 nerve root.” The osteophyte is most likely emanating from which of the following vertebrae?",
      a: ["C2", "C3", "C4", "C5", "C1"],
      correct: 0,
      explanation:
        "In the cervical region, the spinal nerve exits in the intervertebral foramen above the correspondingly named vertebrae. Therefore, the C3 spinal nerve exits above the C3 vertebrae and lies directly below the C2 vertebrae.",
    },
    {
      q: "A 38-year-old woman has been in labor for 14 hours and has agreed to have an epidural anesthetic injection for pain control. Which of the following structures is most likely to be the last penetrated by the needle before it reaches the epidural space?",
      a: [
        "Supraspinous ligament",
        "Interspinous ligament",
        "Anterior longitudinal ligament",
        "Posterior longitudinal ligament",
        "Ligamenta flava",
      ],
      correct: 4,
      explanation:
        "The ligamentum flavum lies within the vertebral canal on the anterior aspect of the vertebral arches connecting the lamina of adjacent vertebrae. Puncturing this ligament allows the needle to enter into the epidural/extradural space for the injection of the anesthetic.\n\nAlthough the posterior longitudinal ligament lies within the spinal canal, it will not be punctured during the procedure. The supraspinous ligament connects and passes along the tips of the vertebral spinous processes.\n\nThe interspinous ligament lies between adjacent spinous processes. The anterior longitudinal ligament connects the anterior aspect of the vertebral body.\n\nThese ligaments do not lie within the vertebral canal.",
    },
    {
      q: "A 48-year-old man underwent suboccipital surgery whereby the surgeon made a midline incision through the ligamentum nuchae that began 1-cm inferior to the external occipital protuberance and ended at the level of the C2 vertebra. The surgeon then placed self-retaining retractors into the incision to forcibly separate the tissue so that an adequate surgical field existed for the duration of the surgery which lasted for 3 hours. During recovery, the patient complained of severe occipital pain and was diagnosed with postsurgical occipital neuralgia. Which of the following nerves was most likely directly stretched by the retractors during the surgery and resulted in this patient’s post-surgical pain?",
      a: [
        "Third occipital",
        "Suboccipital",
        "Greater occipital",
        "Lesser occipital",
        "Spinal accessory",
      ],
      correct: 0,
      explanation:
        "The third occipital nerve is the medial branch of the dorsal ramus of C3. It pierces the trapezius muscle medially in the neck below the external occipital protuberance and supplies the skin of the nuchal region.\n\nThe greater occipital and lesser occipital nerves lie lateral to the midline and are less likely to be affected in this patient. The suboccipital nerve lies within and supplies the muscles of the suboccipital triangle.\n\nThe spinal accessory nerve supplies the trapezius and sternocleidomastoid muscles and has no cutaneous supply in the neck (GAS Fig. 2-46).\n\nSpinous process of C2 Posterior ramus of C1 Obliquus capitis superior Rectus capitis posterior minor Obliquus capitis inferior Rectus capitis posterior major Splenius capitis Splenius capitis Longissimus capitis Semispinalis cervicis Semispinalis capitis Semispinalis capitis Vertebral artery",
    },
    {
      q: "A 7-year-old boy is undergoing a surgery to remove a tumor from his spinal cord. During surgery of the spinal cord, which of the following structures is used as a landmark to identify anterior rootlets from posterior rootlets?",
      a: [
        "Denticulate ligament",
        "Filum terminale",
        "Conus medullaris",
        "Posterior longitudinal ligament",
        "Ligamenta flava",
      ],
      correct: 0,
      explanation:
        "The denticulate ligament is a sheet of pia mater running longitudinally on either side of the spinal cord, connecting it to the dura mater. Medially, the denticulate ligament lies between the origin of the anterior and posterior rootlets serving as a landmark to differentiate between them.\n\nThe conus medullaris is the terminal end of the spinal cord and the filum terminale is an extension of the pia mater that connects the conus medullaris to the dural sac. The posterior longitudinal ligament lies posterior to the vertebral bodies, while the ligamentum flavum connects the lamina of adjacent vertebrae.",
    },
    {
      q: "A 45-year-old male driver involved in a motor vehicle crash was taken to the emergency department and MRI revealed a complete tear of the right alar ligament. None of the other ligaments of the upper cervical spine were torn. Upon physical examination, which of the following cervical spine movements will be most likely increased as a result of the tear?",
      a: ["Flexion", "Extension", "Lateral flexion", "Rotation", "Abduction"],
      correct: 3,
      explanation:
        "The alar ligament connects the dens to the medial surface of the occipital condyles. It limits excessive rotation of the atlanto-axial joints.\n\nFlexion and extension of the upper cervical spine occur at the atlanto-occipital joints and the zygapophysial joints. Lateral flexion (abduction) as a combination movement at the uncovertebral joints (of Luschka).\n\nThese are not limited by the alar ligament (GAS Fig. 2-20B).",
    },
    {
      q: "A 25-year-old male bodybuilder complains of difficulty moving his right shoulder for the past 2 weeks. Upon physical examination, the muscles of the left upper back and shoulder were notably larger than the right side. There was a notable decrease of muscle power on his right sided upper back and shoulder muscles when he was asked to pull the shoulder blades toward the middle of his back against resistance. Nerve conduction examination confirmed neurapraxia of the nerves supplying the rhomboid major and minor muscles. In which of the following functions will the bodybuilder most likely also demonstrate weakness?",
      a: [
        "Abduction of the right arm above the horizontal level and protraction of the scapula",
        "Medial rotation and adduction of the right arm",
        "Extensions, adduction, and medial rotation of the right arm",
        "Elevation of the scapula and inferior rotation of the right shoulder",
        "Abduction of the right arm from 0 to 15 degrees",
      ],
      correct: 3,
      explanation:
        "The rhomboid major and minor are supplied by the dorsal scapular nerve which also supplies the levator scapulae. The function of levator scapulae is elevation and inferior rotation of the scapulae.\n\nAbduction of the arm above 90 degrees and protraction of the scapula are possible due to the action of serratus anterior, which is supplied by the long thoracic nerve. Medial rotation and adduction of the arm is performed mainly by the pectoralis major and latissimus dorsi, which also extends the arm.\n\nThese are supplied by the medial and lateral pectoral nerves and thoracodorsal, respectively. Abduction of the arm through 0 to Transverse process Dens Dens Foramen transversarium Superior view Superior view B Superior view Posterior view Posterosuperior view Anterior tubercle Posterior tubercle Anterior arch Lateral mass Posterior arch Facet for dens Facet for occipital condyle Impressions for alar ligaments Alar ligaments Tectorial membrane (upper part of posterior longitudinal ligament) Posterior longitudinal ligament Facets for attachment of alar ligaments Atlas (CI vertebra) Atlas (CI vertebra) and Axis (CII vertebra) Atlas (CI vertebra) and Axis (CII vertebra) and base of skull Axis (CII vertebra) Transverse ligament of atlas Transverse ligament of atlas Apical ligament of dens Inferior longitudinal band of cruciform ligament 15 degrees is produced by supraspinatus, which is supplied by the suprascapular nerve.",
    },
    {
      q: "A 38-year-old woman with a history of carcinoma of the left breast and who had had a lumpectomy 2 years previously, presents to her surgeon with complaints of a hard mass in the left breast. On ultrasound examination, a 3 cm × 4 cm hard mass is discovered in the upper outer quadrant extending in the axillary tail (of Spence). A radical mastectomy is performed successfully and the tumor is removed. Three weeks postoperatively the patient complains of difficulty raising her left arm above her head. Which of the following is most likely expected to be found during physical examination?",
      a: [
        "Protraction of the both scapulae",
        "Protrusion of the medial border of the left scapula when hands are pushed against the wall",
        "Weak abduction of the left upper limb in the 15 to 90 degree range",
        "Weak retraction of the scapula",
        "Weak adduction of the humerus",
      ],
      correct: 1,
      explanation:
        "During surgery the long thoracic nerve was damaged which supplies the serratus anterior muscle. During abduction of the arm, serratus anterior elevates and laterally rotates the scapulae to allow for full abduction, such as when the ability to lift the hand above the head.\n\nThe serratus anterior is responsible for protracting the scapula and therefore holding it against the thoracic wall. If the nerve supply to this muscle is damaged this will not be achieved when the patient pushes her hands against the wall, resulting in what is called a “winged scapula”.",
    },
    {
      q: "A 2-month-old infant is admitted to the emergency department with symptoms of meningitis. A lumbar puncture is performed in order to examine the CSF to confirm the diagnosis. The needle is inserted into the lumbar cistern (dural sac). At which vertebral level will the conus medullaris typically be found in this patient?",
      a: ["L3", "L4", "L5", "S1", "S2"],
      correct: 0,
      explanation:
        "During development the spinal cord fills the vertebral canal entirely. Due to differential growth of the vertebral column and the spinal cord, the cord ends at L3 in an infant.\n\nIt gradually changes its position to the level of L1/L2, which is the adult level. S2 is the level at which the dural sac normally terminates.",
    },
    {
      q: "Examination of a 3-day-old male infant reveals a large cystic of approximately 15 cm × 10 cm in the sacrococcygeal region. The mass was removed and histopathological studies identified tissue from all three embryological germ layers. Which of the following embryonic tissues is most likely responsible for this condition?",
      a: [
        "Remnants of the primitive streak",
        "Chorionic villi",
        "Neural folds",
        "Intraembryonic coelom",
        "Neural crest",
      ],
      correct: 0,
      explanation:
        "The primitive streak aids in the development of the mesoderm resulting in the trilaminar disc which contains all three germ layers. Chorionic villi do not contribute to the formation of the embryo itself but the membranes of the embryo and therefore does not contain cells that would give rise to the germ layers.\n\nNeural folds are formed from ectoderm and gives rise to neural crest cells. The intraembryonic coelom forms the embryonic cavities and is therefore a space.",
    },
    {
      q: "A 53-year-old man is admitted to the emergency department with severe back pain. MRI examination reveals fracture of the pars interarticularis and normal alignment of the body of the L5 vertebra upon the sacrum. What is the most likely diagnosis?",
      a: [
        "Spondylolysis",
        "Spondylolisthesis",
        "Herniation of intervertebral disc",
        "Lordosis",
        "Scoliosis",
      ],
      correct: 0,
      explanation:
        "A fracture of the pars interarticularis is termed spondylolysis. Spondylolisthesis is when the anterior portion of the vertebra is displaced after fracture of the pars interarticularis.\n\nA herniated disc is when the nucleus pulposus protrudes through the anulus fibrosus. Lordosis is the normal curvature of the cervical and lumbar spine.\n\nScoliosis is an abnormal lateral curvature of the spine which usually also has a degree of rotation of the vertebrae.",
    },
    {
      q: "A 22-year-old pregnant woman underwent epidural anesthesia in anticipation of labor. After delivery she developed back pain and right lower extremity weakness. Imaging revealed a hematoma in the epidural space resulting in compression of the nerve that exits at the level of L2 to L3. Which of the following vessels is most likely responsible for the hematoma?",
      a: [
        "Internal vertebral plexus",
        "Great radicular artery (of Adamkiewicz)",
        "Anterior spinal artery",
        "Posterior spinal artery",
        "External vertebral plexus",
      ],
      correct: 0,
      explanation:
        "An epidural anesthetic procedure is performed in the epidural space which contains fat and the internal vertebral (Batson’s) plexus. A hematoma in this region would cause compression on the spinal nerves and possibly the cord resulting in severe pain and deficits.\n\nThe great anterior medullary artery of Adamkiewicz is the largest of the spinal segmental arteries and is usually located at around T10, much higher than L2 to L3. The anterior and posterior spinal arteries are located in the anterior median and posterolateral fissures of the spinal cord, respectively, and are not located in the epidural space.\n\nThe external vertebral plexus is located external to the vertebral canal and a hematoma of this plexus will not produce the symptoms of this patient.",
    },
    {
      q: "Idling at a stoplight in his vintage car without headrests, a 71-year-old-man’s car is struck from behind by a truck. The man is brought to the emergency department suffering from a severe hyperextension neck injury due to the crash. The T2-weighted MRI 19 shows a rupture of the anterior anulus fibrosus of the C4 to C5 intervertebral disc and a prevertebral hematoma which compromised his airway and required intubation. Which of the following ligaments is most likely disrupted in this injury?",
      a: [
        "Anterior longitudinal ligament",
        "Posterior longitudinal ligament",
        "Ligamentum flavum",
        "Interspinous ligament",
        "Intertransverse ligament",
      ],
      correct: 0,
      explanation:
        "Ligaments serve to restrict movement. The anterior longitudinal ligament courses downward on the anterior surface of the vertebral bodies attaching to the intervertebral discs along its way.\n\nIt is stretches from the base of the skull inferiorly to the anterior surface of the sacrum. The anterior longitudinal ligament is the most anteriorly positioned ligament of the vertebral column and limits its extension.\n\nThe posterior longitudinal ligament travels on the posterior surface of the vertebral bodies attaching to the intervertebral discs along the way. This ligament serves to prevent excessive flexion of the vertebral column and extends from C2 to the sacrum.\n\nThe interspinous ligaments attach adjacent spinous processes to each other from C2 to the sacrum, it restricts the degree of separation of the spinous processes during flexion. Ligamentum flava attaches the internal surfaces of adjacent laminae to each other and prevents them from pulling apart during flexion.\n\nIntertransverse ligaments connect adjacent transverse processes and prevent excessive rotation.",
    },
    {
      q: "An anesthesiologist administers epidural anesthetic immediately lateral to the spinous processes of vertebrae L3 and L4 of a pregnant woman in labor. During this procedure, what would be the last ligament perforated by the needle in order to access the epidural space?",
      a: [
        "Ligamentum flavum",
        "Anterior longitudinal ligament",
        "Posterior longitudinal ligament",
        "Interspinous ligament",
        "Intertransverse ligament",
      ],
      correct: 0,
      explanation:
        "The order of structures pierced during an epidural procedure is skin, subcutaneous tissue, muscle, supraspinous ligament, interspinous ligament, and ligamentum flavum (there is often a midline gap in the ligamentum flavum). The anterior longitudinal ligament is anterior to the vertebral body and cannot be reached by this approach.\n\nThe posterior longitudinal ligament is posterior to the vertebral body and can also not be reached by this procedure. The intertransverse ligaments are too lateral and may not be perforated by this technique.",
    },
    {
      q: "A 38-year-old man presents to the emergency department with complaints of lower back pain during the past 5 days. Examination revealed tenderness of the spine over the L5 vertebra with an obvious “step-off” defect at that level. There was some weakness of the limbs. An MRI examination revealed an anterior displacement of the L5 vertebral body and narrowing of the vertebral canal. This pathology will most likely be associated with which of the following?",
      a: [
        "Compression of the spinal cord and bilateral lower limb weakness",
        "Compression of the spinal cord and unilateral lower limb weakness",
        "Compression of the spinal nerve roots and L5 with unilateral lower limb weakness",
        "Compression of the cauda equina and bilateral lower limb weakness",
        "Compression of the cauda equina and low back pain only",
      ],
      correct: 3,
      explanation:
        "The spinal cord ends at the level between the L1/L2 vertebra but the spinal nerves continue as the caudal equina below this level. As a result, narrowing of the canal at the level of L5 will impact on all of the nerves resulting in bilateral lower limb weakness.",
    },
    {
      q: "A 62-year-old man visits his physician for his annual medical check-up. During physical examination it is noted that the patient has noticeable pulsations on palpation of the lower abdomen. Ultrasound examination reveals a large abdominal aortic aneurysm. The patient is operated on and during the repair his aorta is temporarily clamped. Which of the following arterial anastomoses will most likely prevent ischemia of the spinal cord if the blood pressure drops dangerously low?",
      a: [
        "Segmental arteries from the vertebral, intercostals, superficial epigastric, lumbar, and medial sacral arteries",
        "Segmental arteries from the vertebral, intercostal, lumbar, spinal anterior, and posterior and lateral sacral arteries",
        "Anterior and posterior spinal arteries",
        "Radicular arteries of the vertebral, lumbar, intercostal, lateral sacral arteries, and artery of Adamkiewicz",
        "Segmental arteries from vertebral and intercostals",
      ],
      correct: 1,
      explanation:
        "The anterior and posterior spinal arteries do not provide sufficient blood supply to the spinal cord below cervical levels and will receive additional supply segmentally along its course from multiple sources. The largest of these vessels are usually termed the artery of Adamkiewicz and arises at the lower thoracic or upper lumbar region.",
    },
    {
      q: "A 22-year-old woman is diagnosed with the presence of a chondroma at her index finger. Which of the following structures are sharing the same embryologic with the tumor?",
      a: [
        "Denticulate ligament",
        "Dentate ligament",
        "Nucleus pulposus",
        "Apical ligament of the atlas",
        "Alar ligament",
      ],
      correct: 3,
      explanation:
        "A chondroma is typically a benign tumor of cartilaginous origin, which is encapsulated. It has the same origin as the apical ligament of the atlas which is considered as a rudimentary intervertebral fibrocartilage derived from the notochord.",
    },
    {
      q: "A 40-year-old woman survived a car crash in which her neck was hyperextended when her vehicle was struck from behind. At the emergency department a plain radiograph of her cervical spine is shown below (Fig. 1-5). Which of the following was also most likely injured?",
      photo: "../../anatomy/assets/photo/fig1-5.png",
      a: [
        "Anterior arch of the atlas",
        "Posterior tubercle of the atlas",
        "Atlanto-occipital joint",
        "Inferior articular process of the axis",
        "Anterior tubercle of the atlas",
      ],
      correct: 0,
      img: "Fig. 1-5",
      explanation:
        "The odontoid process, or the dens, projects superiorly from the body of the axis and articulates with the anterior arch of the atlas. The posterior and anterior tubercles of the atlas are bony eminences on the outer surface.\n\nThe inferior articular facet is where the axis joins to the C3 vertebra. A, Lateral radiograph shows that this patient has only mild prevertebral swelling, which is centered at the odontoid (see arrowheads in Fig.\n\n1-5, p. 20).\n\nThe odontoid is displaced posteriorly relative to the C2 body (arrow) and is angled posteriorly. These findings indicate a fracture.\n\nB, The fracture is extremely subtle on the openmouth odontoid radiograph (arrows). C, Sagittal CT reconstruction shows the fracture.",
    },
    {
      q: "A 32-year-old man was lifting heavy weights during an intense training session. He felt severe pain radiating to the posterior aspect of his right thigh and leg. He was taken to hospital where an MRI scan (see Fig. 1-3) revealed a ruptured intervertebral disc. Which of the following nerves was most likely affected?",
      photo: "../../anatomy/assets/photo/fig1-3.png",
      a: ["L2", "L3", "L4", "L5", "S1 A C B"],
      correct: 3,
      img: "Fig. 1-3",
      explanation:
        "The herniated disc is between vertebrae L4 and L5. In the lumbar region spinal nerves exit below their corresponding vertebrae in which case the L4 nerve would pass superior to the herniation.\n\nAs the L5 nerve crosses the intervertebral disc to exit below the fifth lumbar vertebra it will be compressed by the herniation. Compression of nerves L2, L3, and S1 would produce symptoms different to those seen in this patient.",
    },
  ],
  anatomychapter2: [
    {
      q: "A 40-year-old woman survived a car crash in which her neck was hyperextended when her vehicle was struck from behind. At the emergency department, a plain radiograph of her cervical spine revealed a fracture of the odontoid process (dens). Which of the following was also most likely injured?",
      photo: "../../anatomy/assets/photo/fig1-5.png",
      a: [
        "Anterior arch of the atlas",
        "Posterior tubercle of the atlas",
        "Atlanto-occipital joint",
        "Inferior articular process of the axis",
        "Anterior tubercle of the atlas",
      ],
      correct: 0,
      explanation:
        "The odontoid process, or the dens, projects superiorly from the body of the axis and articulates with the anterior arch of the atlas. The posterior and anterior tubercles of the atlas are bony eminences on the outer surface.\n\nThe inferior articular facet is where the axis articulates with the C3 vertebra (GAS Fig. 2-21).",
    },
    {
      q: "A 62-year-old woman is admitted to the hospital because of her severe back pain. Radiologic examination reveals that the L4 vertebral body has slipped anteriorly, with fracture of the zygapophysial joint (Fig. 1-2). What is the proper name of this condition?",
      photo: "../../anatomy/assets/photo/fig1-2.png",
      a: [
        "Spondylolysis and spondylolisthesis",
        "Spondylolisthesis",
        "Crush vertebral fracture",
        "Intervertebral disc herniation",
        "Klippel-Feil syndrome",
      ],
      correct: 0,
      img: "Fig. 1-2",
      explanation:
        "Spondylolisthesis is an anterior displacement created by an irregularity in the anterior margin of the vertebral column such that L5 and the overlying L4 (and sometimes L3) protrude forward. Spondylolysis is a condition in which the region between the superior and inferior articular facets (on the posterior arch of the L5 vertebra) is damaged or missing, which is not the case in this example.\n\nCompression vertebral fracture is a collapse of vertebral bodies as a result of trauma. Intervertebral disc herniations occur when the nucleus pulposus protrudes through the anulus fibrosus into the intervertebral foramen or vertebral canal.\n\nThe most common protrusion is posterolaterally, where the anulus fibrosus is not reinforced by the posterior longitudinal ligament. Klippel-Feil syndrome results from an abnormal number of cervical vertebral bodies.",
    },
    {
      q: "A 45-year-old woman is admitted to the outpatient clinic for shoulder pain. During physical examination Fig. 1-2 she presents with weakened shoulder movements. Radiologic examination reveals signs of quadrangular space syndrome, causing weakened shoulder movements. Which of the following nerves is most likely affected?",
      photo: "../../anatomy/assets/photo/fig1-2.png",

      a: ["Suprascapular", "Subscapular", "Axillary", "Radial", "Ulnar"],
      correct: 2,
      img: "Fig. 1-2",
      explanation:
        "The weakness in shoulder movement results from denervation of the teres minor and deltoid by the axillary nerve, which passes through the quadrangular space. Quadrangular space syndrome occurs when there is hypertrophy of the muscles that border the quadrangular space or fibrosis of portions of the muscles that are in contact with the nerve.",
    },
    {
      q: "A 29-year-old female elite athlete was lifting heavy weights during an intense training session. The athlete felt severe pain radiate suddenly to the posterior aspect of her right thigh and leg. The patient was taken to the hospital where an MRI was performed (Fig. 1-3). Which nerve was most probably affected?",
      photo: "../../anatomy/assets/photo/fig1-3.png",
      a: ["L3", "L4", "L2", "L5", "S1"],
      correct: 3,
      img: "Fig. 1-3",
      explanation:
        "In this MRI a posterolateral herniation between L4/L5 exists. In the lumbar region, spinal nerves exit the vertebral column below their named vertebrae.\n\nIn an L4/L5 intervertebral disc herniation, the L5 spinal nerve would be affected as it descends between L4/L5 vertebrae to exit below the L5 level.",
    },
    {
      q: "An 8-year-old girl was brought to a pediatrician for a routine physical examination. The figure associated with this question is a photograph of the child (Fig. 1-4). Which of the following best describes the embryologic basis for this child’s condition?",
      photo: "../../anatomy/assets/photo/fig1-4.png",
      a: [
        "Underdevelopment of the secondary ossification center in the vertebral arch",
        "Underdevelopment of the primary ossification center in the spinous process",
        "Underdevelopment of the primary ossification center in the vertebral body",
        "Underdevelopment of the secondary ossification center in the vertebral body",
        "Underdevelopment of the primary ossification center in the vertebral arch",
      ],
      correct: 4,
      img: "Fig. 1-4",
      explanation:
        "The patient in the figure above has spina bifida occulta. This is a developmental condition resulting from incomplete ossification and failure of fusion of the vertebral arches.\n\nThree primary ossification centers should be present in the fetus by the eighth week: one in the centrum (to form the vertebral body) and one in each half of the vertebral arch. Five secondary ossification centers develop in the vertebrae after puberty: one at the tip of the spinous processes, the tips of the transverse processes, and on the inferior and superior rims of the vertebral body.",
    },
    {
      q: "A 32-year-old man was lifting heavy weights during an intense training session. He felt severe pain radiating to the posterior aspect of his right thigh and leg. He was taken to hospital where an MRI scan (see Fig. 1-3) revealed a ruptured intervertebral disc. Which of the following nerves was most likely affected?",
      photo: "../../anatomy/assets/photo/fig1-3.png",
      a: ["L2", "L3", "L4", "L5", "S1 A C B"],
      correct: 3,
      img: "Fig. 1-3",
      explanation:
        "The herniated disc is between vertebrae L4 and L5. In the lumbar region spinal nerves exit below their corresponding vertebrae in which case the L4 nerve would pass superior to the herniation.\n\nAs the L5 nerve crosses the intervertebral disc to exit below the fifth lumbar vertebra it will be compressed by the herniation. Compression of nerves L2, L3, and S1 would produce symptoms different to those seen in this patient.",
    },
  ],
  anatomychapter3: [
    // 186 Thorax Anatomy Cases — encoded from Gray’s Anatomy Review
    // Encoding: A=0, B=1, C=2, D=3, E=4
    // img is included where the source question explicitly references a figure.

    {
      q: "A 2-day-old newborn is diagnosed with transposi\ntion of the great arteries. Which structure is primarily\nresponsible for the division of the truncus arteriosus\ninto the great arteries?",
      a: [
        "Septum secundum",
        "Septum primum",
        "Bulbar septum",
        "Aorticopulmonary septum",
        "Endocardial cushions",
      ],
      correct: 3,
      explanation:
        "The aorticopulmonary septum functions to\ndivide the truncus arteriosus and bulbus cordis into\nthe aorta and pulmonary trunk. The septum secundum forms an incomplete separation between the two\natria. The septum primum divides the atrium into\nright and left halves. The bulbar septum is derived\nfrom the bulbus cordis and will give rise to the interventricular septum inferior to the aorticopulmonary\nseptum, eventually fusing with it. The endocardial\ncushions play a role in the division of the AV canal\ninto right and left halves, by causing the AV cushions\nto approach each other.",
    },
    {
      q: "A 32-year-old woman in her third trimester of\npregnancy is undergoing a routine ultrasound examina\ntion. The examination of the fetus reveals enlarged and\nechogenic lungs, an inverted diaphragm, and fetal\nascites. Which condition is best characterized by these\nsigns?",
      a: [
        "Laryngeal atresia",
        "Tracheal atresia",
        "Polyhydramnios",
        "Lung hypoplasia",
        "Oligohydramnios",
      ],
      correct: 0,
      explanation:
        "Laryngeal atresia (congenital high airway\nobstruction syndrome) is a rare obstruction of the\nupper fetal airway. Distal to the site of the atresia, the\nairways dilate, lungs enlarge and become echogenic,\nthe diaphragm flattens or inverts, and fetal ascites\nand/or hydrops develop. Tracheal atresia is a rare\nobstruction of the trachea, commonly found with a\ntracheoesophageal fistula, probably resulting from\nthe unequal division of foregut into esophagus and\ntrachea. Polyhydramnios is an excess of amniotic\nfluid, often associated with esophageal atresia or tracheoesophageal fistula. Lung hypoplasia is reduced\nlung volume, often seen in infants with a congenital\ndiaphragmatic hernia. Oligohydramnios, or a decrease\nin amniotic fluid, is associated with stunted lung\ndevelopment and pulmonary hypoplasia.",
    },
    {
      q: "A 2-year-old child is seen in the pediatric cardiol\nogy unit for a congenital heart condition. Which of the\nfollowing conditions occurs most often?",
      a: [
        "Membranous ventricular septal defect (VSD)",
        "Tetralogy of Fallot",
        "Muscular VSD",
        "Ostium secundum defect",
        "Ostium primum defect",
      ],
      correct: 0,
      explanation:
        "VSDs account for 25% of congenital heart\ndefects. The most common of these are defects in the\nmembranous portion of the interventricular septum\n(membranous VSDs).",
    },
    {
      q: "A 2-day-old infant is diagnosed with transposition\nof the great arteries. If this condition were to be left\nuntreated for more than 4 months, it would be fatal.\nWhich of the following structures must remain patent\nso that the infant can survive until surgical correction\nof the malformation?",
      a: [
        "Ductus arteriosus",
        "Umbilical arteries",
        "Umbilical vein",
        "Coarctation of the aorta",
        "Pulmonary artery stenosis",
      ],
      correct: 0,
      explanation:
        "In a case of transposition of the great arteries,\noxygenated blood travels from the left ventricle into\nthe pulmonary trunk, where it will eventually reach\nthe lungs. In contrast, the aorta would be carrying\ndeoxygenated blood into the systemic circulation. A\nPDA acts as a shunt between the aorta and pulmonary\ntrunk, allowing oxygenated and deoxygenated blood\nto mix and therefore allowing some oxygenated blood\nto reach the tissues. None of the other answer choices\nwould be correct for this problem; with these structures remaining patent, the body would still not\nreceive sufficient oxygenated blood for survival to be\npossible.",
    },
    {
      q: "A 2-day-old newborn female is diagnosed with\npulmonary artery stenosis, overriding of the aorta,\nVSD, and hypertrophy of the right ventricle. Which\ncondition is best characterized by these signs?",
      a: [
        "Tetralogy of Fallot",
        "Atrial septal defect",
        "Transposition of the great vessels",
        "Pulmonary atresia",
        "VSD",
      ],
      correct: 0,
      explanation:
        "Tetralogy of Fallot is characterized by four\ncardiac defects: pulmonary stenosis, VSD, overriding\naorta, and these in turn lead to right ventricular\nhypertrophy. An ASD is characterized by the communication between the two atria. In a case of transposition of the great vessels, the aorta arises from the\nright ventricle and the pulmonary trunk arises from\nthe left ventricle.",
    },
    {
      q: "A 2-day-old newborn female is diagnosed with\npulmonary artery stenosis, overriding of the aorta, VSD,\nand hypertrophy of the right ventricle. Which of the fol\nlowing embryologic mechanisms is most likely respon\nsible for the development of this cluster of anomalies?",
      a: [
        "Superior malalignment of the subpulmonary\n\ninfundibulum",
        "Defect in the aorticopulmonary septum",
        "Endocardial cushion defect",
        "Total anomalous pulmonary venous\n\nconnections",
        "Atrioventricular canal malformation",
      ],
      correct: 0,
      explanation:
        "Superior malalignment of the subpulmonary\ninfundibulum causes stenosis of the pulmonary trunk.\nThis leads to the four symptoms mentioned and is\nknown as tetralogy of Fallot. A defect in formation\nof the aorticopulmonary septum is characteristic of\ntransposition of the great arteries. An endocardial\ncushion defect is associated with membranous VSDs.",
    },
    {
      q: "A 5-year-old boy is admitted to the hospital with\nsevere dyspnea. During physical examination, a loud\nsystolic murmur and a wide, fixed, split S2 sound is\nnoted. What is the most likely diagnosis?",
      a: [
        "VSD",
        "Atrial septal defect",
        "Tetralogy of Fallot",
        "Transposition of the great arteries",
        "Aortic stenosis",
      ],
      correct: 1,
      explanation:
        "The murmur at S2 localizes the defect at an\natrioventricular valve. An ASD causes a diastolic\nmurmur in the tricuspid valve, whereas a VSD would\ncause a pansystolic murmur. Transposition of the\ngreat arteries and aortic stenosis will cause a murmur\n\nat S1, and tetralogy of Fallot does not cause a murmur\nat S1 or S2.",
    },
    {
      q: "A 3-month-old infant is diagnosed with Down\nsyndrome (trisomy 21). A routine cardiovascular exami\nnation reveals that the infant suffers from arrhythmias.\nWhat other cardiac conditions are most likely to occur\nwith Down syndrome?",
      a: [
        "Tetralogy of Fallot",
        "Transposition of the great arteries",
        "Atrial septal and VSDs",
        "Truncus arteriosus",
        "Coarctation of the aorta",
      ],
      correct: 2,
      explanation:
        "Down syndrome (more properly called “trisomy\n21”) is associated with cardiovascular abnormalities\nsuch as arrhythmias and atrial and VSDs. It is also\ncharacterized by mental retardation, brachycephaly,\nflat nasal bridge, upward slant of the palpebral fissure,\nprotruding tongue, simian crease, and clinodactyly of\nthe fifth digit.",
    },
    {
      q: "A 3-month-old infant is diagnosed with a deletion\nat the 22q11 chromosome. A routine cardiovascular\nexamination reveals severe congenital cardiac malfor\nmation. Which of the following malformations will\nmost likely be associated with 22q11 syndrome?",
      a: [
        "Tetralogy of Fallot and truncus arteriosus",
        "Transposition of the great arteries",
        "Atrial septal and VSDs",
        "Coarctation of the aorta",
        "Aortic atresia",
      ],
      correct: 0,
      explanation:
        "Tetralogy of Fallot and truncus arteriosus are\nassociated with DiGeorge syndrome (22q11). Transposition of the great arteries is associated with maternal\ndiabetes. ASDs and VSDs are present in individuals\nwith Down syndrome. Coarctation of the aorta is\nrelated to Turner syndrome. Marfan syndrome is\npresent in individuals with aortic atresia.",
    },
    {
      q: "A 28-year-old woman in her third trimester of\npregnancy with a complaint of dizziness for several\ndays is admitted to the hospital. Physical examination\nreveals that she has diabetes mellitus. Which of the\nfollowing cardiac malformations is most likely to affect\nthe fetus when the mother has this disease?",
      a: [
        "Tetralogy of Fallot",
        "Transposition of the great arteries",
        "Atrial septal and VSDs",
        "Truncus arteriosus",
        "Coarctation of the aorta",
      ],
      correct: 1,
      explanation:
        "Transposition of the great arteries is associated with maternal diabetes. Tetralogy of Fallot and\ntruncus arteriosus are associated with DiGeorge syndrome (22q11). ASDs and VSDs are present in individuals with Down syndrome. Coarctation of the aorta\nis related to Turner syndrome. Marfan syndrome is\npresent in individuals with aortic atresia.",
    },
    {
      q: "During cardiac catheterization of a 6-year-old\nchild, the radiologist notes that the contrast medium\nreleased into the arch of the aorta is visible immediately\nin the left pulmonary artery. What is the most likely\nexplanation for this finding?",
      a: [
        "Atrial septal defect",
        "Mitral stenosis",
        "Patent ductus arteriosus",
        "Patent ductus venosus",
        "VSD",
      ],
      correct: 2,
      explanation:
        "The ductus arteriosus is an embryologic\nstructure that acts as a communication between the\npulmonary trunk and the aorta. If it remains patent,\nthe injected contrast medium would flow from the\naorta through this communication and into the pulmonary artery. An ASD is a communication between\nthe atria. Mitral stenosis is a narrowing of the AV\nvalve between the left atrium and left ventricle. The\nductus venosus transports blood from the left umbilical vein to the inferior vena cava, bypassing the liver.\nA VSD is a communication between the ventricles.",
    },
    {
      q: "A 3-year-old male patient presents with a clini\ncally significant atrial septal defect (ASD). The ASD\nusually results from incomplete closure of which of the\nfollowing structures?",
      a: [
        "Foramen ovale",
        "Ligamentum arteriosum",
        "Ductus arteriosus",
        "Sinus venarum",
        "Coronary sinus",
      ],
      correct: 0,
      explanation:
        "An ASD is a communication between the right\nand left atria. In the formation of the partition between\nthe two atria, the opening in the foramen secundum,\nalso known as the foramen ovale, typically closes at\nbirth. If it remains patent, an ASD will result. The rest\nof the structures are not associated with ASDs.",
    },
    {
      q: "A premature infant has progressive difficulty in\nbreathing and is diagnosed with respiratory distress\nsyndrome. Which cells are deficient in synthesizing\nsurfactant in this syndrome?",
      a: [
        "Alveolar capillary endothelial",
        "Bronchial mucous",
        "Bronchial respiratory epithelium",
        "Type I alveolar",
        "Type II alveolar",
      ],
      correct: 4,
      explanation:
        "Type II alveolar cells are the only cells that\nproduce surfactant.",
    },
    {
      q: "A newborn baby is diagnosed with eventration of\nthe diaphragm. In this condition, half of the diaphragm\nascends into the thorax during inspiration, while the\nother half contracts normally. What is the cause of this\ncondition?",
      a: [
        "Absence of a pleuropericardial fold",
        "Absence of musculature in one half of the\n\ndiaphragm",
        "Failure of migration of diaphragm",
        "Failure of the septum transversum to develop",
        "Absence of a pleuroperitoneal fold",
      ],
      correct: 1,
      explanation:
        "An absence of musculature in one half of the\ndiaphragm causes it to protrude into the thoracic cavity forming a pouch into which the abdominal viscera\nprotrude. Pleuropericardial folds are responsible for\nseparating the pericardial cavity from the pleural cavity. Typically, the diaphragm migrates to its position\nwith the fibrous pericardium. The septum transversum is the primordial central tendon of the diaphragm\nthat separates the heart from the liver. The pleuroperitoneal folds form the pleuroperitoneal membranes\nthat separate the pleural cavity from the peritoneal\ncavity. Absence of any of these would not have anything to do with eventration of the diaphragm.",
    },
    {
      q: "A 35-year-old man is admitted to the emergency\ndepartment because of a severe nosebleed (epistaxis)\nand a headache that had become worse during the\nweekend. On physical examination, his upper body\nappears much better developed than his lower body, a\nloud midsystolic murmur is present on his anterior\nchest wall and back, his lower extremities are cold, and\nfemoral pulses are absent. Which of the following\nembryologic structure(s) has been most likely affected\nto produce such symptoms?",
      a: [
        "Bulbus cordis",
        "Ductus arteriosus",
        "Third, fourth, and sixth pharyngeal arches",
        "Right and left horns of sinus venosus",
        "Right cardinal vein",
      ],
      correct: 2,
      explanation:
        "The anomalies present in this individual are\nall caused by a coarctation of the aorta. The portion of\nthe aortic arch that is constricted arises from the third,\nfourth, and sixth pharyngeal arches. The bulbus cordis\nbecomes part of the ventricular system. The ductus\narteriosus becomes the ligamentum arteriosum.",
    },
    {
      q: "After a 2-day-old newborn male swallows milk he\nbecomes cyanotic. After 3 days, he develops aspiration\npneumonia. A tracheoesophageal fistula is suspected.\nFailure of development has occurred most specifically\nin which of the following structures?",
      a: [
        "Esophagus",
        "Trachea",
        "Tongue",
        "Tracheoesophageal septum",
        "Pharynx",
      ],
      correct: 3,
      explanation:
        "The tracheoesophageal septum is a primordial structure that separates the trachea from the\nesophagus. If this structure fails to develop, a tracheoesophageal fistula will result, in which event the two\nstructures will not separate completely. When the\ninfant attempts to swallow milk, it spills into the\nesophageal pouch and is regurgitated. The child\nbecomes cyanotic because an insufficient amount of\noxygen is reaching the lungs as a result of the malformed trachea.",
    },
    {
      q: "After a 2-day-old newborn male swallows milk he\nbecomes cyanotic. After 3 days he develops pneumo\nnia. A tracheoesophageal fistula is suspected. Which of\nthe following conditions is most likely to be associated\nwith a tracheoesophageal fistula?",
      a: [
        "Oligohydramnios",
        "Rubella",
        "Polyhydramnios",
        "Thalidomide exposure",
        "Toxoplasmosis",
      ],
      correct: 2,
      explanation:
        "Polyhydramnios is an excess of amniotic\nfluid, often associated with esophageal atresia or a\ntracheoesophageal fistula. This abnormality affects\nfetal ability to swallow the normal amount of amniotic\nfluid; therefore, excess fluid remains in the amniotic\nsac. None of the other factors listed has an association\nwith this type of fistula.",
    },
    {
      q: "A 2-day-old newborn male develops mild cyano\nsis. An ultrasound examination reveals a patent ductus\narteriosus (PDA). Which of the following infections will\nmost likely lead to this congenital anomaly?",
      a: [
        "Toxoplasmosis",
        "Rubella",
        "Cytomegalovirus",
        "Varicella virus",
        "Treponema pallidum",
      ],
      correct: 1,
      explanation:
        "Congenital heart defects are common problems that can be caused by teratogens, such as the\nrubella virus, or single-gene factors, or chromosomal abnormalities.",
    },
    {
      q: "A 5-year-old boy has frequent episodes of fatiga\nbility and dyspnea. An ultrasound examination reveals\n\nan ASD, located at the opening of the superior vena\ncava. Which of the following types of ASDs are char\nacteristic for this description?",
      a: [
        "Ostium secundum",
        "Ostium primum",
        "Atrioventricular canal",
        "Common atrium",
        "Sinus venosus",
      ],
      correct: 4,
      explanation:
        "Sinus venosus ASDs occur close to the entry\nof the superior vena cava in the superior portion of\nthe interatrial septum. Ostium secundum ASDs are\nlocated near the fossa ovale and encompass both\n\nseptum primum and septum secundum defects. An\nostium primum defect is a less common form of ASD\nand is associated with endocardial cushion defects\nbecause the septum primum fails to fuse with the\nendocardial cushions, resulting in a patent foramen\nprimum. An AV canal defect is not a clinically significant type of ASD. A common atrium is an uncommon\ntype of ASD in which the interatrial septum is absent\n(Figs. 2-10 and 2-11).\nSeptum primum\nPrimordial AV\nseptum\nForamen primum\nDeveloping septum secundum\nForamen primum closed\nForamen secundum\nForamen secundum\nRed arrows–well-oxygenated blood Blue arrows–poorly oxygenated blood\nSeptum primum\nRA - right atrium\nRV - right ventricle\nLA - left atrium\nLV - left ventricle\nForamen primum\nForamen primum\nFused endocardial\ncushions\nPerforations represent the developing\nforamen secundum in septum primum\nDorsal endocardial cushions\nA1\nB1\nC1\nD1\nRA\nRV\nRA LA\nLA\nRA\nRV LV\nB\nC\nD\nA\nFig. 2-10 Continued",
    },
    {
      q: "A 3-day-old newborn was born with ectopia\ncordis. Despite the efforts of doctors at the pediatric\nintensive care unit, the infant died from cardiac failure\nand hypoxemia. Which of the following embryologic\nevents is most likely responsible for the development\nof such conditions?",
      a: [
        "Faulty development of the sternum and\n\npericardium, secondary to incomplete fusion\nof the lateral folds",
        "Interruption of third pharyngeal arch\n\ndevelopment",
        "Interruption of fourth pharyngeal arch\n\ndevelopment",
        "Interruption of fifth pharyngeal arch\n\ndevelopment",
        "Faulty development of sinus venosus",
      ],
      correct: 0,
      explanation:
        "Ectopia cordis is a condition in which the\nheart is located abnormally, outside the thoracic\ncavity, commonly resulting from a failure of fusion of\nthe lateral folds in forming the thoracic wall. This is\nincompatible with life because of the occurrence of\ninfection, cardiac failure, and/or hypoxemia. Faulty\ndevelopment of the sinus venosus is related to ASDs\nthat result from deficient absorption of the sinus\nvenosus into the right atrium and/or unusual development of the septum secundum.",
    },
    {
      q: "A 2-day-old newborn male is admitted to the\npediatric intensive care unit with cyanosis and tachy\npnea. Cardiac ultrasound (echocardiography) and mag\nnetic resonance imaging (MRI) examinations reveal\ntotally anomalous pulmonary connections. Which of\nthe following embryologic events is responsible for this\nmalformation?",
      a: [
        "Abnormal septation of the sinus venosus",
        "Abnormal development of the septum\n\nsecundum",
        "Abnormal development of the left sinus horn",
        "Abnormal development of the coronary sinus",
        "Abnormal development of common cardinal\n\nvein",
      ],
      correct: 0,
      explanation:
        "The right horn of the sinus venosus has\ntwo divisions: One develops into the sinus venarum,\nthe smooth interior aspect of the right atrial wall;\nthe other half develops into the pulmonary veins.\nSeptum secundum (upper limb)\nForamen secundum\nSeptum secundum (upper limb)\nSeptum secundum\n(lower limb)\nOval foramen\nOval foramen\n(foramen ovale)\nDegenerating part of\nseptum primum\nOval foramen closed\nby valve of foramen ovale\nSuperior vena cava\nOval foramen open\nValve of oval foramen\nInferior vena cava\n(carrying welloxygenated blood)\nValve of oval foramen\n(derived from septum primum)\nSeptum secundum\n(lower limb)\nE1\nRemnant of foramen secundum\nE\nF1\nF\nG1\nG\nH1\nH\nFig. 2-10, cont’d\n\nAbnormal septation of the sinus venosus can lead\nto inappropriate pulmonary connections. Abnormal\ndevelopment of the left sinus horn would present with\nabnormalities in the coronary sinus, whereas incorrect development of the septum secundum can result\nin an ASD but would not be involved with anomalous\npulmonary veins. The left sinusal horn develops into\nthe coronary sinus, and the right sinusal horn is incorporated into the right atrial wall.",
    },
    {
      q: "A 3-day-old newborn has difficulties breathing. A\ncomputed tomography (CT) scan of his chest and\nabdomen reveals the absence of the central tendon of\nthe diaphragm. Which of the following structures failed\nto develop normally?",
      a: [
        "Pleuroperitoneal folds",
        "Pleuropericardial folds",
        "Septum transversum",
        "Cervical myotomes",
        "Dorsal mesentery of the esophagus",
      ],
      correct: 2,
      explanation:
        "The septum transversum is a thickened layer\nof mesoderm that gives origin to the central tendon\nof the diaphragm. It is situated between the thoracic\nFig. 2-11\nA B\nC D\nE F\nInferior\nvena cava\nPerforations in septum primum,\nthe valve of the oval foramen\nLarge oval foramen (ASD)\nNormal septum primum\nNormal oval fossa\nCleft in mitral valve\nNormal oval fossa\nHigh atrial septal defect (ASD)\nPatent foramen primum (ASD)\nSuperior vena cava\nRight atrium\nOpening of\ncoronary sinus\nTricuspid valve\nRight atrium\nNormal oval foramen\nShort septum primum\nPapillary muscles\nAbnormally large\noval foramen (large ASD)\nVery short\nseptum primum\nRA LA\n\ncavity and the omphaloenteric duct. As the lungs\ngrow into the pericardioperitoneal canal, they give\nrise to two folds: the pleuroperitoneal and pleuropericardial folds. The pleuroperitoneal folds are responsible for formation of the posterolateral aspect of the\ndiaphragm, and the pleuropericardial folds develop\ninto the fibrous pericardium. The crura provide origin\nof the dorsal mesentery of the esophagus, whereas the\ncervical myotomes are responsible for the musculature of the diaphragm. (Note that these are cervical\nmyotomes C3 to C5, the levels of origin of the phrenic\nnerve.)",
    },
    {
      q: "A 30-year-old man is diagnosed with a blockage\nof arterial flow in the proximal part of the thoracic\naorta. Brachial arterial pressure is markedly increased,\nfemoral artery pressure is decreased, and the femoral\npulses are delayed. The patient shows no external signs\nof inflammation. Which of the following structures\nfailed to develop normally?",
      a: [
        "Second aortic arch",
        "Third aortic arch",
        "Fourth aortic arch",
        "Fifth aortic arch",
        "Ductus venosus",
      ],
      correct: 2,
      explanation:
        "The fourth aortic arch develops into the aortic\narch on the left side and the brachiocephalic and\nsubclavian arteries on the right side of the embryo.\nImproper development of the arch of the aorta will\ncause an increased pressure in the subclavian artery\nand, subsequently, the brachial artery. Similarly,\ndecreased flow through the aorta will lead to a\ndecreased pressure in the femoral artery. The second\naortic arch, specifically the dorsal aspect, develops\ninto aspects of the small stapedial artery. The proximal part of the third aortic arch gives rise to the\ncommon carotid arteries, which supply the head. The\nfifth aortic arch is said not to usually develop in\nhuman embryos. The proximal part of the sixth aortic\narch develops into the left pulmonary artery.",
    },
    {
      q: "A 1-year-old child was admitted to the pediatric\nclinic due to severe dyspnea. An electrocardiogram\n(ECG) reveals cardiac arrhythmia and right ventricular\nhypertrophy. An angiogram reveals a PDA. From which\nof the following embryologic arterial structures does\nthe PDA take origin?",
      a: [
        "Left sixth aortic arch",
        "Right sixth aortic arch",
        "Left fifth aortic arch",
        "Right sixth aortic arch",
        "Left fourth aortic arch",
      ],
      correct: 0,
      explanation:
        "The left sixth aortic arch is responsible for the\ndevelopment both of the pulmonary arteries and the\nductus arteriosus. Without regression of the ductus\narteriosus, a patent connection remains between aorta\nand the pulmonary trunk. The ductus arteriosus often\nreaches functional closure within 24 hours after birth,\nwhereas anatomic closure and subsequent formation\nof the ligamentum arteriosum often occur by the\ntwelfth postnatal week.",
    },
    {
      q: "A 4-year-old girl is admitted to the hospital with\nhigh fever. Staphylococcus aureus is isolated from her\nblood cultures and antibiotic therapy is initiated. A\nloud, harsh murmur is heard on auscultation. A chest\nradiograph shows prominent pulmonary arteries. Echo\ncardiography shows all the valves to be normal. Which\ncongenital heart disease most likely explains these\nfindings?",
      a: [
        "Atrial septal defect",
        "Tetralogy of Fallot",
        "Coarctation of the aorta",
        "Patent ductus arteriosus",
        "Aortic atresia",
      ],
      correct: 3,
      explanation:
        "With a PDA, an abnormal connection persists\nbetween the aorta and the pulmonary trunk. Blood\nleaving the left ventricle of the heart and into the aorta\nis reshunted back into the left pulmonary artery. This\nis responsible for the murmur heard during auscultation of the heart. The diversion of blood to the pulmonary arteries causes increased atrial pressure,\nleading to enlarged, and therefore noticeable, pulmonary arteries on the chest radiograph. The tetralogy\nof Fallot often presents with a right-to-left shunt of\nblood flow through the ventricles. It is also associated\nwith pulmonary artery stenosis, right ventricular\nhypertrophy, interventricular septal defect, and an\noverriding of the aorta. This condition would not\npresent with a murmur, however. Atrial septal defects\nare often characterized by a left-to-right shunt of\nblood, which often presents with dyspnea and abnormal heart sounds. A chest radiograph would not\nreveal prominent pulmonary arteries in such cases.\nBoth aortic atresia and coarctation of the aorta result\nin a narrowing of the aorta but would not lead to\nnoticeable prominent pulmonary arteries on the\nradiograph.",
    },
    {
      q: "A 3-day-old infant is admitted to the cardiology\nunit with severe cyanosis. During echocardiographic\nexamination a right-to-left shunt is identified. Which of\nthe following conditions will most likely produce this\ntype of shunt?",
      a: [
        "Interatrial septal defect",
        "Interventricular septal defect",
        "Patent ductus arteriosus",
        "Corrected transposition of the great arteries",
        "Common truncus arteriosus",
      ],
      correct: 4,
      explanation:
        "A common truncus arteriosus results from\nfailure of separation of the pulmonary trunk and\naorta. Without proper perfusion of the child by oxygenated blood, severe cyanosis will result.",
    },
    {
      q: "A 4-day-old infant is admitted to the pulmonary\nunit suffering from dyspnea and cyanosis. Radiologic\nexamination revealed a left hypoplastic lung and her\nniation of the abdominal intestines into the left thoracic\ncavity. Which of the following embryologic structures\nmost likely failed to develop properly?",
      a: [
        "Septum transversum",
        "Pleuroperitoneal membrane",
        "Tracheoesophageal septum",
        "Laryngotracheal groove",
        "Foregut",
      ],
      correct: 1,
      explanation:
        "The pleuroperitoneal membrane forms the\nposterolateral aspect of the diaphragm. A defect in\nthis membrane would allow for communication\nbetween the upper left abdominal cavity and thoracic\ncavity and could result in a congenital diaphragmatic\nhernia. The septum transversum provides origin\nto the central tendon of the diaphragm but is not\ninvolved in herniation of the intestines. The tracheoesophageal septum, laryngotracheal groove, and oligohydramnios are not associated with development of\nthe diaphragm.",
    },
    {
      q: "A 3-month-old infant is diagnosed with a VSD\nat the area of the subpulmonary infundibulum. Which\nof the following structures must be avoided carefully\nby the surgeon when the sutures are placed at the site\nof the defect?",
      a: [
        "Right bundle branch",
        "Right coronary artery",
        "Tricuspid valve",
        "Left anterior descending coronary artery",
        "Aortic valve",
      ],
      correct: 0,
      explanation:
        "When closing a VSD, it is important not to\nsuture over the right bundle branch because it carries\nthe stimulating impulse from the atrioventricular\nnode to the apex of the heart through the right bundle\nof His. Following the course of the right bundle\nbranch on the interventricular septum, the impulses\ntravel along the septomarginal trabecula (moderator\nband) and Purkinje fibers, leading to ventricular contraction. The right coronary artery passes dorsally in\nthe atrioventricular groove; therefore, it does not pass\nthrough the interventricular septum. The anterior\ninterventricular (left anterior descending) coronary\nartery is superficial to the IV septum on the anterior\nsurface of the heart. The tricuspid valve and aortic\nvalve are not directly associated with the interventricular septum.",
    },
    {
      q: "A 2-day-old infant is diagnosed with incomplete\ndivision of the foregut into respiratory and digestive\nportions. Which is the most common congenital condi\ntion characteristic of this description?",
      a: [
        "Esophageal atresia",
        "Esophageal achalasia",
        "Tracheoesophageal fistula",
        "Congenital diaphragmatic hernia",
        "Esophageal fistula",
      ],
      correct: 0,
      explanation:
        "Esophageal atresia is often the result of an\nincomplete division of the tracheoesophageal septum,\nthus causing an absence of, or blind ending of, the\nesophagus. Though similar to an esophageal atresia,\n\na tracheoesophageal fistula is an atypical connection\nbetween the trachea and the esophagus.",
    },
    {
      q: "An unconscious 2-month-old infant is admitted\nto the emergency department after an automobile\ncollision. An emergency tracheostomy is performed.\nWhich of the following structures is most commonly at\nhigh risk of injury during this procedure?",
      a: [
        "Left brachiocephalic vein",
        "Left common carotid artery",
        "Vagus nerve",
        "Phrenic nerve",
        "Thoracic duct",
      ],
      correct: 0,
      explanation:
        "In a tracheotomy, an incision is made at the\nlevel of the sixth cervical vertebra, near the cricoid\ncartilage. The left brachiocephalic vein passes across\nthe trachea immediately anterior to the brachiocephalic trunk. This vein is the most superficial structure and thus the most likely to be damaged. The left\ncommon carotid artery, the vagus nerve, and the\nphrenic nerve are not situated near the midline\nincision of the tracheotomy. The thoracic duct is\nlocated posterior and lateral to the esophagus and\nthe trachea and is not likely to be damaged during\na tracheotomy, other than the intentional opening\nmade in it.",
    },
    {
      q: "A 45-year-old woman is admitted to the hospital\nwith difficulty breathing. Radiologic examination\nreveals a tumor invading the lung surface anterior to\nthe hilum. Which nerve is most likely compressed by\nthe tumor to result in dyspnea?",
      a: [
        "Phrenic",
        "Vagus",
        "Intercostal",
        "Recurrent laryngeal",
        "Cardiopulmonary",
      ],
      correct: 0,
      explanation:
        "The phrenic nerve has a path between the\nanterior medial aspect of the lung and the mediastinum. Along the path of the nerve, it courses anterior\nto the hilum of the lung. The vagus nerves run posterior to the heart as they give off branches to the\ncardiac plexus upon the trachea near the carina. The\nrecurrent laryngeal nerves arise from the vagus nerves\nbefore the vagus nerves pass behind the hila of the\nlungs.",
    },
    {
      q: "A 62-year-old male patient expresses concern that\nhis voice has changed over the preceding months.\nImaging reveals a growth located within the aortic arch,\nadjacent to the left pulmonary artery. Which neural\nstructure is most likely being compressed to cause the\nchanges in the patient’s voice?",
      a: [
        "Left phrenic nerve",
        "Esophageal plexus",
        "Left recurrent laryngeal nerve",
        "Left vagus nerve",
        "Left sympathetic trunk",
      ],
      correct: 2,
      explanation:
        "The left recurrent laryngeal nerve passes\nbeneath the ligamentum arteriosum and then loops\nsuperiorly toward the tracheoesophageal groove,\nmedial to the arch of the aorta. It is the only nerve\nlocated near the described mass.",
    },
    {
      q: "A 39-year-old woman visits the outpatient clinic\nand complains of inability to reach a pantry shelf just\nabove her head. History reveals that 2 months ago she\nunderwent a mastectomy procedure and she did not\nhave this complaint prior to the surgery. Which nerve\nwas most likely damaged during surgery to result in\nthe patient’s complaint?",
      a: [
        "Axillary",
        "Spinal accessory",
        "Long thoracic",
        "Radial",
        "Thoracodorsal",
      ],
      correct: 2,
      explanation:
        "During mastectomy procedures, three superficial nerves are susceptible to ligation or laceration:\nthe long thoracic nerve, intercostobrachial nerve, and\nthoracodorsal nerve. In the event of injury to the long\nthoracic nerve, the patient complains of an inability\nto fully abduct the humerus above the horizontal. The\nserratus anterior (supplied by the long thoracic nerve)\nis necessary to elevate, rotate, and abduct the scapula,\nto facilitate abduction of the humerus above the\nshoulder. Because the patient does not indicate any\nloss of medial rotation or adduction of the humerus,\nligation or injury of the thoracodorsal nerve can be\neliminated.",
    },
    {
      q: "A 41-year-old woman is admitted to the emer\ngency department with a complaint of severe, sharp,\nbut poorly localized pain on the chest wall. Radiologic\nexamination gives evidence of pleural effusion. What\nis the location of the neuronal cell bodies responsible\nfor the nerve fibers that carry this pain to the central\nnervous system (CNS)?",
      a: [
        "Dorsal root ganglia",
        "Sympathetic chain ganglia",
        "Dorsal horn of the spinal cord",
        "Lateral horn of the spinal cord",
        "Ventral horn of the spinal cord",
      ],
      correct: 0,
      explanation:
        "The dorsal root ganglia contain nerve cell\nbodies for general somatic afferent and general visceral afferent neuronal processes. Pain localized on\nthe chest wall is transmitted back to the CNS via\nsensory fibers.",
    },
    {
      q: "A 23-year-old man is admitted to the emergency\ndepartment after an automobile collision. Physical\nexamination reveals tachycardia. What is the location\nof the preganglionic neural cell bodies involved in\nincreasing the heart rate?",
      a: [
        "Deep cardiac plexus",
        "Dorsal motor nucleus of vagus",
        "Lateral horn T5 to T9",
        "Lateral horn T1 to T4",
        "Inferior cervical ganglia",
      ],
      correct: 3,
      explanation:
        "The lateral horns, or intermediolateral cell\ncolumns, contain the cell bodies of preganglionic\nneurons of the sympathetic system. Spinal cord segments T1 to T4 are often associated with the upper\nlimbs and thoracic organs; the autonomic neurons in\nspinal cord segments T5 to T9 usually correlate with\ninnervation of organs in the abdominal cavity, specifically organs derived from the foregut.",
    },
    {
      q: "A 55-year-old man is admitted to the emergency\ndepartment with a diagnosis of possible myocardial\ninfarction. Which nerves carry pain fibers from the\nheart to the CNS?",
      a: [
        "Vagus",
        "Greater thoracic splanchnic",
        "Least thoracic splanchnic",
        "Cardiopulmonary (thoracic visceral)",
        "T5 to T9 ventral rami",
      ],
      correct: 3,
      explanation:
        "The cardiopulmonary splanchnic (or thoracic\nvisceral) nerves are responsible for carrying the\ncardiac sympathetic efferent fibers from the sympathetic ganglia to the thoracic viscera and afferent\nfibers for pain from these organs. The vagus nerve is\nresponsible for carrying parasympathetic fibers. The\ngreater and lesser splanchnic nerves carry sympathetic preganglionic fibers to the abdomen. T1 to T4\nventral rami receive sensory fibers for pain, carried\ninitially by the cardiopulmonary nerves, en route to\ntheir respective final destination.",
    },
    {
      q: "A 17-year-old girl is admitted to the hospital with\nsevere dyspnea. Physical examination reveals that the\npatient is suffering from an asthma attack, with associ\nated bronchospasm. Which of the following nerves is\nresponsible for the innervation of the bronchial smooth\nmuscle cells?",
      a: [
        "Greater thoracic splanchnic",
        "Phrenic",
        "Vagus",
        "Intercostal",
        "Lesser thoracic splanchnic",
      ],
      correct: 2,
      explanation:
        "The vagus nerve is the only nerve responsible\nfor parasympathetic innervation of the lungs. The\nphrenic nerve and intercostal nerves are somatic\nnerves and are not involved in innervation of the\nheart or lungs. The greater thoracic splanchnic and\nlesser thoracic splanchnic nerves are responsible for\ncarrying preganglionic sympathetic fibers for the\ninnervation of the abdomen. They also carry afferents\nfor pain from the abdomen.",
    },
    {
      q: "A 42-year-old woman is admitted to the hospital\nwith an inability to speak. The patient’s personal\nhistory reveals that she has experienced hoarseness for\nthe past month. A chest radiograph reveals a mass at\nthe aortopulmonary window. Which of the following\nnerves is most likely compressed?",
      a: [
        "Vagus",
        "Phrenic",
        "Left recurrent laryngeal",
        "Right recurrent laryngeal",
        "Greater thoracic splanchnic",
      ],
      correct: 2,
      explanation:
        "There is close proximity between the aortopulmonary window and the left recurrent laryngeal\nnerve. A mass within or adjacent to this window is\nthus likely to compress the left recurrent laryngeal\nnerve, resulting in the hoarseness of the patient. The\ngreater and lesser thoracic splanchnic nerves arise\ninferior and posterior to the aortopulmonary window\nand are thus unlikely to be compressed. The thoracic\nsplanchnic nerves are not involved in the innervation\nof the larynx. Though the vagus is responsible for\ninnervation of the larynx, it passes dorsal to the area\nof the aorticopulmonary window and is not likely to\nbe compressed.",
    },
    {
      q: "Following the diagnosis of breast cancer, a 42-yearold woman underwent a total mastectomy, including\nexcision of the axillary tail (of Spence). Postoperatively,\nthe patient complains of dysesthesia in the inner aspect\nof the arm and axilla. Which of the following nerves\nwas most likely injured during the procedure?",
      a: [
        "Ulnar",
        "Long thoracic",
        "Intercostobrachial",
        "Lateral cutaneous nerve of T4",
        "Axillary nerve",
      ],
      correct: 2,
      explanation:
        "The intercostobrachial nerve is responsible\nfor innervation of the skin on the medial surface of\nthe arm. The ulnar nerve is responsible for cutaneous\nsensation on the medial aspect of the hand, and the\naxillary nerve innervates the lateral aspect of the\nshoulder. The lateral cutaneous branch of T4 innervates the dermatome corresponding to the nipple and\nareola and also supplies the medial aspect of the\naxilla. The long thoracic nerve provides motor supply\nto the serratus anterior and is not involved in cutaneous innervation of the axillary region. Only the intercostobrachial nerve is responsible for sensory supply\nof the lateral aspect of the axilla.",
    },
    {
      q: "A 39-year-old man is admitted to the hospital\nwith a complaint of severe retrosternal pain that radi\nates to the left shoulder. The pain is relieved by leaning\nforward. Auscultation reveals a pericardial friction rub,\nleading to a diagnosis of pericarditis. Which of the fol\nlowing nerves is responsible for the radiating pain to\nthe shoulder?",
      a: [
        "Intercostobrachial",
        "Phrenic",
        "Long thoracic",
        "Greater thoracic splanchnic",
        "Cardiopulmonary",
      ],
      correct: 1,
      explanation:
        "Pericarditis is an inflammation of the pericardium and often causes a pericardial friction rub, with\nthe surface of the pericardium becoming gradually\ncoarser. Because the phrenic nerve is solely responsible for innervation of the pericardium, it would\ntransmit the pain fibers radiating from the pericardial\nfriction rub. The phrenic nerve contains sensory nerve\nfibers from C3 to C5, spinal nerve levels that also\nsupply the skin of the shoulder area; therefore, pain\ncarried by the phrenic nerve may be referred to the\nshoulder.",
    },
    {
      q: "A 72-year-old man is admitted to the hospital with\ncomplaints of severe chest pain radiating to his left\narm. ECG examination provides evidence of significant\nmyocardial infarction of the posterior wall of the left\nventricle. Which of the following nerves is responsible\nfor the radiation of pain to the arm during myocardial\ninfarction?",
      a: [
        "Phrenic",
        "Vagus",
        "Intercostobrachial",
        "Greater splanchnic",
        "Suprascapular",
      ],
      correct: 2,
      explanation:
        "The intercostobrachial nerve is the lateral\ncutaneous branch of the second intercostal nerve. It\nserves a cutaneous function both in the thoracic wall\nand medial aspect of the arm. The phrenic nerve\narises from spinal nerves C3 to C5 and innervates the\ndiaphragm. This nerve has no branches that pass into\nthe arm. The vagus nerve is CN X and supplies autonomic function to the gut, up to the left colic flexure,\nand also provides some autonomic motor and sensory\nsupply to organs in the head, neck, and thorax. The\ngreater thoracic splanchnic nerve originates in the\nthorax from the sympathetic chain at the levels of T5\nto T9 and innervates abdominal structures. The suprascapular nerve originates from the upper trunk of the\nbrachial plexus and receives fibers primarily from C5\nand C6. It innervates the supraspinatus and the infraspinatus muscles.",
    },
    {
      q: "A 43-year-old male hunter is admitted to the\nemergency department after falling over a barbed wire\nfence, as a result of which he suffered several deep\nlacerations along the left midaxillary line. When the\npatient is examined in the outpatient clinic several days\nlater, numbness and anhydrosis are observed anterior\nto the area of the cuts. Which structures were most\nlikely damaged to result in these signs?",
      a: [
        "Dorsal roots",
        "Ventral roots",
        "Cutaneous branches of dorsal rami",
        "Cutaneous branches of ventral rami",
        "Rami communicans",
      ],
      correct: 3,
      explanation:
        "Ventral rami contain both sensory and motor\nfibers and also sympathetics to the body wall, supplying all areas of the body wall except for tissues of the\nback. In this case both sensory fibers (numbness) and\nsympathetics (anhydrosis) are disrupted at the midaxillary line; therefore, cutaneous ventral rami is the\nonly correct choice. The dorsal roots carry somatic\nand visceral sensory information from the periphery.\nBecause only cutaneous sensation is lost the deficit\ncannot be the dorsal roots. The ventral roots of the\nspinal cord carry only somatic and visceral efferents.\nBecause no motor functions are disrupted, this is not\nthe correct answer. The branches of dorsal rami\nprovide cutaneous and postural muscle innervation to\nthe back and thus have no relation to the midaxillary\nline. The rami communicans are components of the\nsympathetic nervous system and are not involved\nwith general somatic afferent sensation.",
    },
    {
      q: "A 62-year-old patient is admitted to the hospital\nwith a complaint of suddenly occurring, tearing pain\nradiating to his back. A CT examination reveals that\nthe patient has an aortic aneurysm. An urgent place\nment of an endovascular stent-graft is performed.\nWhich of the following nerves are most likely respon\nsible for the tearing sensation radiating to his back?",
      a: [
        "Somatic afferent",
        "Thoracic visceral afferent",
        "Sympathetic postganglionics",
        "Sympathetic preganglionics",
        "Parasympathetic afferent",
      ],
      correct: 3,
      explanation:
        "General visceral afferents are nerve fibers that\ncarry sensation from organs, in this case pain from\nthe abdominal aorta. These fibers get mixed with\ngeneral somatic afferents in the dorsal roots. This is\nthe phenomenon of “referred pain.” The dorsal root\nganglia (or their counterparts associated with sensory\ncranial nerves) contain the cell bodies associated with\nall sensory fibers from the body, including somatic\nand visceral sensation.",
    },
    {
      q: "A 22-year-old woman had undergone elective\nbreast enhancement, with the insertion of 250-ml saline\nbags bilaterally. This resulted, unfortunately, in loss of\nsensation bilaterally in the nipples and areolae and\nsome reduction of sensation of the skin from the areolae\nlaterally to the midaxillary lines. Which of the follow\ning nerves were most likely subject to iatrogenic injury?",
      a: [
        "Anterior cutaneous branches of second and\n\nthird intercostal nerves",
        "Anterior and lateral cutaneous branches of\n\nthe fourth intercostal nerves",
        "Lateral pectoral nerves",
        "Cutaneous branches of the second thoracic\n\nspinal nerves (intercostobrachial nerves)",
        "Lateral cutaneous branches of the second and\n\nthird intercostal nerves",
      ],
      correct: 1,
      explanation:
        "The anterior and lateral cutaneous branches\nof the fourth intercostal nerves provide the sensory\nand sympathetic supply to the areolae and nipples.\nAnterior cutaneous branches of the second and third\nintercostal nerves innervate the skin above the nipples\nand areolae. Lateral pectoral nerves provide motor\ninnervation to the pectoralis major and minor, not\nsensory supply. Ventral primary rami of the second\nthoracic spinal nerves provide muscle innervation and\nsensory innervation above the nipples and areolae\nand sensory fibers for the medial side of the arm\n(GAS Fig. 3-9).",
    },
    {
      q: "A 32-year-old woman is admitted to the emer\ngency department with dyspnea, dysphagia, hoarse\nness, and severe anxiety. Her medical history reveals\nthat she has lived on a liquid diet for some months and\nhas lost more than 30 lb. Over the past several weeks,\nshe has had bloody sputum during attacks of coughing.\nFluoroscopy and a barium swallow reveal a 4-cm mass\nassociated with a bronchus and associated compression\nof the esophagus. Which of the following nerves is\nmost likely to be affected?",
      a: [
        "Right recurrent laryngeal nerve",
        "Left vagus nerve, posterior to the hilum of\n\nthe lung",
        "Left recurrent laryngeal nerve",
        "Greater splanchnic nerve",
        "Phrenic nerve",
      ],
      correct: 2,
      explanation:
        "The left recurrent laryngeal nerve passes\nsuperiorly in the tracheoesophageal groove after\nlooping around the aorta. The compression of this\nnerve and compression of the esophagus against the\ntrachea would result in the presenting symptoms. The\nright recurrent laryngeal nerve loops around the right\nsubclavian artery before passing toward the larynx\nand therefore does not descend into the thorax. The\nleft vagus nerve courses posterior to the hilum of the\nlung, after it has already given off its left recurrent\nlaryngeal branch at the level of the aortic arch;\ntherefore, compression of this nerve would not result\nin the presenting symptoms. The greater thoracic\nsplanchnic nerve arises from sympathetic chain\nganglia at levels T5 to T9 and therefore would not\ncause the presenting symptoms. The phrenic nerve\n\ninnervates the diaphragm; compression of this nerve\nwould not result in the presenting symptoms.",
    },
    {
      q: "A 35-year-old man is admitted to the hospital with\npain on swallowing. Imaging reveals a dilated left\natrium. Which structure is most likely being com\npressed by the expansion of the left atrium to result in\nthe patient’s symptoms?",
      a: [
        "Esophagus",
        "Root of the lung",
        "Trachea",
        "Superior vena cava",
        "Inferior vena cava",
      ],
      correct: 0,
      explanation:
        "The patient’s chief complaint is pain upon\nswallowing. With a dilated left atrium, the most probable structure being compressed is the esophagus.\nThe esophagus descends into the abdomen immediately posterior to the left atrium below the level of the\ntracheal carina. The root of the lung is the site of\njunction at the hilum where the pulmonary arteries,\nveins, and bronchi enter or leave. The lung root is\nnot so intimately associated with the esophagus and\nwould not be associated with pain during swallowing.\nThe trachea ends and bifurcates above the level of the\nleft atrium and therefore would be unaffected by a\ndilated left atrium. The inferior vena cava ascends\nfrom the abdomen to the right atrium and the superior\nvena cava is quite anterior in position. Neither of\nthese veins is closely related to the esophagus or the\nleft atrium.",
    },
    {
      q: "A 69-year-old woman with advanced stage of\nlaryngeal cancer has a tracheostomy and needs to be\ntube fed. A nasogastric tube is inserted. What is the\n\nlast site at which resistance would be expected as the\ntube passes from the nose to the stomach?",
      a: [
        "Pharyngoesophageal junction",
        "Level of the superior thoracic aperture",
        "Posterior to the aortic arch",
        "Posterior to the left main bronchus",
        "Esophageal hiatus of the diaphragm",
      ],
      correct: 4,
      explanation:
        "The esophageal hiatus in the diaphragm is\none of four openings associated with the diaphragm.\nIt is located at the level of T10 and allows the esophagus to pass through the thoracic cavity into the\nabdominal cavity. It is the most inferior of four esophageal constrictions. The pharyngoesophageal junction\nis the site at which the pharynx ends and the esophagus begins in the neck, at the level of the sixth cervical\nvertebra. It is the first and the most superior of the\nesophageal constrictions. There are no constrictions\nfound at the level of the superior thoracic aperture;\nthis is the opening for passage of the structures\npassing from the neck into the thorax. The esophagus\ndescends posterior to the arch of the aorta. It is at this\nlevel that the second of the esophageal constrictions\nis found. The third constriction occurs as the esophagus passes posteriorly to the left main bronchus.",
    },
    {
      q: "A 59-year-old man is admitted to the hospital with\nsevere chest pain. During examination a slight rhythmic\npulsation on the chest wall at the left fifth intercostal\nspace is noted in the midclavicular line. What part of\nthe heart is responsible for this pulsation?",
      a: [
        "Right atrium",
        "Left atrium",
        "Aortic arch",
        "Apex of the heart",
        "Mitral valve",
      ],
      correct: 3,
      explanation:
        "The apex of the heart is located in the left\nfifth intercostal space, about 3½ inches to the left of\nthe sternum. When this area of the heart is palpated,\nFourth thoracic\nintercostal nerve\nSecretory glands\nLactiferous\nducts\nLactiferous\nsinuses\nPectoralis major\nDeep (pectoral) fascia\nAxillary process\nAxillary\nlymph nodes\nSecond, third, and fourth anterior\nperforating branches of internal\nthoracic artery\nInternal\nthoracic artery\nParasternal\nlymph nodes\nLymphatic vessel\nA B\n\nany pulsations would be generated by throbbing of\nthe apex of the heart against the thoracic wall. This\nis also the location for performing auscultation (listening) of the mitral valve, not associated with palpation. The right atrium is located to the right of the\nsternum. The left atrium is located on the posterior\naspect of the heart, thus no direct palpation is realized. The aortic arch would be located posterior to\nthe manubrium of the sternum, above the second\nintercostal space.",
    },
    {
      q: "A 42-year-old man was admitted to the hospital\nafter a head-on vehicular collision in which he received\nsevere blunt trauma to his sternum from the steering\nwheel. What part of the heart would be most likely to\nbe injured by the impact?",
      a: [
        "Right ventricle",
        "Apex of left ventricle",
        "Left ventricle",
        "Right atrium",
        "Anterior margin of the left atrium",
      ],
      correct: 0,
      explanation:
        "These components of the heart are readily\nviewed in a plain radiograph of the thorax. It is important to understand the spatial arrangement of the\nheart as it rests in the thorax. The conus region of the\nright ventricle is located on the most anterior aspect\nof the heart, thus it is the most anterior portion of the\nheart within the thorax. The apex of the left ventricle\nis also located anteriorly, but it is located lateral to\nthe sternum and occupies little area compared with\nthe right ventricle. The left ventricle is positioned\non the left lateral side and slightly posterior position\nin the thorax. The right atrium is located on the right\nlateral side of the heart. The anterior margin of the\nleft atrium is positioned posteriorly in the thorax.",
    },
    {
      q: "A 54-year-old man is admitted to the hospital with\ndyspnea. Physical examination and echocardiographic\nstudies reveal severe mitral valve prolapse. Ausculta\ntion of this valve is best performed at which location?",
      a: [
        "Left fifth intercostal space, just below the nipple",
        "Right lower part of the body of the sternum",
        "Right second intercostal space near the lateral\n\nborder of the sternum",
        "Directly over the middle of the manubrium",
        "Left second intercostal space near the lateral\n\nborder of the sternum",
      ],
      correct: 0,
      explanation:
        "The left fifth intercostal space, just below the\nleft nipple, is typically the best location to listen to\nthe mitral valve. Although the mitral valve is located\nat the fourth intercostal space just to the left of the\nsternum, the sound is best realized “downstream”\nfrom the valve. The right lower part of the body of\nthe sternum is the location of the tricuspid valve. The\nright second intercostal space near the lateral border\nof the sternum is the typical location of auscultation\nof the aortic valve. It is difficult to hear valvular\nsounds through bone, so auscultating directly over the\nmiddle of the manubrium is not a good choice. The\nleft second intercostal space near the lateral border of\nthe sternum is the site chosen typically for auscultation of the pulmonary valve (GAS Fig. 3-102).",
    },
    {
      q: "A 48-year-old male patient is admitted with\nchronic angina. Coronary angiography reveals nearly\ntotal blockage of the circumflex artery near its origin\nfrom the left coronary artery. When this artery is\nexposed to perform a bypass procedure, what accom\npanying vein must be protected from injury?",
      a: [
        "Middle cardiac",
        "Great cardiac",
        "Small cardiac",
        "Anterior cardiac",
        "Posterior cardiac",
      ],
      correct: 1,
      explanation:
        "The great cardiac vein (anterior interven\n\ntricular vein) takes a pathway initially beside the\nanterior interventricular coronary artery (left anterior\nAortic valve\nPulmonary valve\nAuscultation position\nfor aortic valve\nTricuspid valve\nAuscultation position\nfor tricuspid valve\nAuscultation position\nfor pulmonary valve\nMitral valve\nAuscultation position\nfor mitral valve\n\ndescending; LAD) in its course, finally terminating in\nthe coronary sinus when it is joined by the oblique\nvein (of Marshall) of the left atrium. This vein must\nbe protected when performing bypass procedures.\nThe middle cardiac vein is located on the posterior\naspect of the heart, and it also drains into the coronary sinus. The small cardiac vein drains blood along\nthe same path as the right marginal branch. The anterior cardiac veins drain the blood from the right ventricle anteriorly and drain directly into the right\natrium, and are not associated with the anterior interventricular artery.",
    },
    {
      q: "A 55-year-old patient is to undergo a coronary\nbypass operation. The artery of primary concern is the\nvessel that supplies much of the left ventricle and the\nright and left bundle branches of the cardiac conduc\ntion system. Which artery is the surgeon most con\ncerned with?",
      a: [
        "Right marginal",
        "Anterior interventricular",
        "Circumflex",
        "Artery to the sinu-atrial (SA) node",
        "Posterior interventricular",
      ],
      correct: 1,
      explanation:
        "The anterior interventricular artery (left anterior interventricular artery, LAD) supplies the right\nand left ventricles and anterior two thirds of the IV\nseptum. The right marginal artery supplies the right\nventricle and apex of the heart; therefore, it does not\nsupply the left ventricle. The left coronary circumflex\nartery supplies the left atrium and left ventricle; it\ncourses posteriorly in, or near to, the coronary sulcus\nand supplies the posterior portion of the left ventricle\nand left atrium. The artery to the SA node is a branch\nof the right coronary artery and does not supply the\nleft ventricle. The posterior interventricular (posterior descending) artery arises from the right coronary\nartery in about 67% of people (this is referred to as\na right dominant pattern) and supplies the posterior\naspect of both ventricles and the posterior third of\nthe interventricular septum (GAS Fig. 3-71A).",
    },
    {
      q: "A 58-year-old male patient presents himself to the\nemergency department with severe angina. Upon\ncardiac catheterization, it is found that he has a signifi\ncant occlusion in his right coronary artery, just distal\nto the right sinus of the aortic valve. His collateral\ncardiac circulation is minimal. Assuming the patient is\nright coronary dominant, which of the following arter\nies would be most likely to still have normal blood\nflow?",
      a: [
        "Right (acute) marginal artery",
        "Atrioventricular nodal artery",
        "Posterior interventricular artery",
        "SA nodal artery",
        "Anterior interventricular artery",
      ],
      correct: 4,
      explanation:
        "The anterior interventricular artery (LAD)\narises from the left coronary artery. If there is occlusion in the right coronary artery, the anterior interventricular artery will still have normal blood flow.\nThe right marginal artery branches from the right\ncoronary artery; therefore, if there is occlusion of the\nright coronary artery, flow from the marginal artery\nwill be compromised. The AV nodal artery is supplied\nby the coronary artery that crosses the crux of the\nheart posteriorly. If this artery arises from the right\ncoronary, supply to the AV node might be reduced,\nRight marginal branch\nof right coronary artery\nRight coronary artery\nRight atrium\nRight ventricle\nSinu-atrial nodal branch\nof right coronary artery\nA\nPosterior interventricular\nbranch of right coronary artery\nAnterior interventricular\nbranch of left\ncoronary artery\nLeft coronary artery\nCircumflex branch\nof left coronary artery\nLeft marginal branch\nof circumflex branch\nDiagonal branch of\nanterior interventricular branch\nLeft auricle\nLeft ventricle\n\ndepending upon collateral supply. The SA nodal artery\nis supplied by the right coronary artery in about 55%\nof the population (only 35% from the left); as the\npatient is right coronary dominant, it would be predicted that the SA nodal artery will not have normal\nblood flow.",
    },
    {
      q: "A 55-year-old man is admitted to the emergency\ndepartment with severe chest pain. Coronary angiogra\nphy reveals that the patient’s right coronary artery is\nfree of pathology. The left coronary artery is found to\nbe 70% to 80% occluded at three points proximal to\nits bifurcation into the circumflex and left anterior\ndescending arteries. Having a left dominant coronary\ncirculation, and without surgery, what is the most likely\nexplanation for a poor prognosis for recovery of this\npatient to a normally active life?",
      a: [
        "All the branches of the coronary artery are\n\nend arteries, precluding the chance that\nanastomotic connections will occur.",
        "It is probable that the anterior and posterior\n\npapillary muscles of the tricuspid valve have\nbeen damaged.",
        "The blood supply of the SA node is\n\ninadequate.",
        "The development of effective collateral\n\ncirculation between anterior and posterior\ninterventricular arteries will not be possible.",
        "The blood supply of the atrioventricular (AV)\n\nnode will be inadequate.",
      ],
      correct: 3,
      explanation:
        "Because the patient is left coronary artery\ndominant, if there is 70% to 80% occlusion of the left\ncoronary, there will be deficiencies in flow both in the\nanterior descending and circumflex coronary arteries.\nNo possibility is available for collateral flow from the\nposterior descending interventricular artery, for it too\nwould be derived from the left coronary, by way of\nthe circumflex artery. If the patient does not undergo\nsurgery to remove or bypass the occlusion, he will be\nunable to have any substantial type of collateral circulation between the two major branches of the left\ncoronary. The branches of the coronary arteries are\nnot end arteries, and there are anastomoses between\nthem. The papillary muscles of the tricuspid valve\nwould not be affected with left coronary artery occlusion. The blood supply to the SA node would not\nbe inadequate. The blood supply of the region of the\nAV node might or might not be adequate, for it could\nstill be supplied by a branch of the right coronary\nartery.",
    },
    {
      q: "A 35-year-old woman is admitted to the hospital\nwith dyspnea. During physical examination her S1 heart\nsound is very loud. Which of the following valves is\nmost likely defective?",
      a: [
        "Mitral valve",
        "Aortic",
        "Pulmonary",
        "Aortic and pulmonary",
        "Tricuspid",
      ],
      correct: 0,
      explanation:
        "The mitral valve corresponds to the S1 heart\nsound produced during systole. The aortic and pulmonary valves correspond to the S2 heart sound produced during diastole. The tricuspid valve also\ncorresponds with the S1 heart sound. The aortic valve,\nhowever, corresponds with the S2 sound, so this\nanswer would be incorrect.",
    },
    {
      q: "A 72-year-old man is admitted to the hospital with\nsevere chest pain. ECG examination provides evidence\nof severe myocardial infarction of the lower part of\nthe muscular interventricular septum. The function of\nwhich of the following valves will be most severely\naffected?",
      a: ["Pulmonary", "Aortic", "Tricuspid", "Mitral", "Eustachian"],
      correct: 2,
      explanation:
        "The interventricular septum is intimately\ninvolved with the tricuspid valve on the right side, via\nthe muscular connections of the septomarginal trabeculum (moderator band) to the anterior papillary\nmuscle. Therefore, if the electrical system of the heart\nis disrupted, as with a myocardial infarction in the\nupper portion of the muscular septum, the innervation of the interventricular septum will be compromised and the tricuspid valve will be directly affected.\nNone of the other valves is directly involved with the\ninterventricular septum.",
    },
    {
      q: "A 35-year-old woman is admitted to the hospital\nwith a complaint of shortness of breath. During physi\ncal examination it is noted that there is wide splitting\nin her S2 heart sound. ECG reveals a right bundle\nbranch block. Which of the following valves is most\nlikely defective?",
      a: [
        "Mitral valve",
        "Pulmonary",
        "Aortic and mitral",
        "Tricuspid",
        "Tricuspid and aortic",
      ],
      correct: 1,
      explanation:
        "The pulmonary valve is associated with the\nS2 heart sound produced in diastole. A splitting in the\nS2 sound indicates that the aortic and pulmonary\nvalves are not closing simultaneously and would correlate with a possible defect in this valve. The mitral\nvalve is associated with the S1 heart sound, produced\nin systole; therefore, it cannot be defective if only the\nS2 sound is involved. The aortic valve is associated\nwith the S2 heart sound, but the mitral valve is not\n(as stated earlier); therefore, this answer cannot be\ncorrect. The tricuspid valve is associated with the S1\nheart sound and therefore is not associated with the\noccurrence of an abnormal S2 heart sound.",
    },
    {
      q: "A 3-month-old infant is diagnosed with a mem\nbranous VSD. A cardiac operation is performed, and\nthe septal defect is patched inferior to the noncoronary\ncusp of the aorta. Two days postoperatively, the infant\ndevelops severe arrhythmias affecting both ventricles.\nWhich part of the conduction tissue was most likely\ninjured during the procedure?",
      a: [
        "Right bundle branch",
        "Left bundle branch",
        "Bundle of His",
        "Posterior internodal pathway",
        "Atrioventricular node",
      ],
      correct: 2,
      explanation:
        "The atrioventricular bundle (of His) is a collection of specialized cardiac muscle cells (Purkinje\nfibers) that carry electrical activity to the right and\nleft bundle branches. Because both ventricles are\naffected, this is the logical site of injury, for this\nbundle leads to the bundle branches supplying both\nventricles. An injury either to the right or left bundle\nbranch would affect only one ventricle. Terminal Purkinje fibers transmit the electrical activity to the\ngreater sections of the ventricles, yet dysfunction in\nthe terminal part of the conduction system would\naffect only a small section of one ventricle, not both.\nThe atrioventricular node is a group of specialized\ncardiac muscle cells that serve to decrease the rate of\nconduction to the ventricles and is located in the\nregion deep to the septal wall of the right atrium. The\nposterior internodal pathway is in the roof of the right\natrium and is not involved here.",
    },
    {
      q: "A 62-year-old man was admitted to the hospital\nwith intense left chest pain. ECG and echocardiography\nreveal myocardial infarction and pulmonary valve\nregurgitation. Emergency coronary angiography is per\nformed and provides evidence that the artery supplying\nthe upper portion of the anterior right ventricular free\nwall is occluded. Which of the following arteries is\nmost likely to be occluded?",
      a: [
        "Circumflex",
        "Anterior interventricular artery",
        "Posterior interventricular artery",
        "Artery of the conus",
        "Acute marginal branch of the right coronary\n\nartery",
      ],
      correct: 3,
      explanation:
        "The artery of the conus is given off from the\nright coronary artery and winds around the conus\narteriosus. The conus region is the superior part of\nthe right ventricle that tapers into a cone (infundibulum) where the pulmonary valve leads into the pulmonary trunk. This conus artery supplies the upper\nportion of the anterior right ventricle and usually has\na small anastomotic connection with the anterior\ninterventricular (left anterior descending) branch of\nthe left coronary artery. The circumflex artery supplies\nthe left atrium and ventricle and does not supply the\nright ventricle except when the posterior inter\n\nventricular (posterior descending) artery arises from\nthe circumflex, or in unusual cases in which the circumflex passes to the surface of the right ventricle.\nThe anterior interventricular artery supplies the right\nand left ventricles and the anterior two thirds of the\nIV septum. It is given off by the left coronary artery\nand does not specifically supply the upper portion\nof the right ventricle. The posterior interventricular\nartery supplies the right and left ventricles and the\n\nposterior third of the IV septum. It does not supply\nthe upper portion of the right ventricle.",
    },
    {
      q: "A 3-month-old male infant died unexpectedly in\nhis sleep. The pathologist examined the histologic\nslides of tissue samples taken from the heart of the\ninfant and observed that a portion of the conduction\ntissue that penetrates the right fibrous trigone had\nbecome necrotic. As a result, a fatal arrhythmia prob\nably developed, leading to the death of the infant.\nWhich of the following parts of the conduction tissue\nwas most likely interrupted?",
      a: [
        "Right bundle branch",
        "The bundle of Bachmann",
        "The left bundle branch",
        "The atrioventricular bundle of His",
        "The posterior internodal pathway",
      ],
      correct: 3,
      explanation:
        "The atrioventricular bundle of His is a strand\nof specialized cardiac muscle fibers (Purkinje fibers)\nthat arises from the atrioventricular node and passes\nthrough the right fibrous trigone. The right fibrous\ntrigone (central fibrous body) is a dense area of connective tissue that interconnects the mitral, tricuspid,\nand aortic valve rings. After reaching the upper\nportion of the muscular interventricular septum, the\nbundle of His splits into right and left bundle branches.\nThe bundle of Bachmann is a collection of fibers\nrunning from the SA node to the left atrium and is\nthe only collection of conducting fibers to innervate\nthe left atrium. Finally, the posterior internodal\npathway, also known as Thorel’s pathway, is the principal pathway of electrical activation between the SA\nnode and atrioventricular node in humans.",
    },
    {
      q: "A 42-year-old woman is admitted to the hospital\nafter blunt trauma to her sternum by the steering wheel\nduring a car crash. Ultrasound examination reveals a\ncardiac tamponade. ECG data indicate that the heart\nhas been severely injured. Which of the following\ncardiac structures will most likely be injured?",
      a: [
        "Right ventricle",
        "Obtuse margin of the left ventricle",
        "Right atrium",
        "Left atrium",
        "Apex of the left ventricle",
      ],
      correct: 0,
      explanation:
        "The sternocostal surface of the heart consists\nmostly of the right ventricle. Therefore, an anterior\ninjury to the thorax would mostly likely first affect\nthe right ventricle because it is adjacent to the deep\nsurface of the sternum. However, if the question did\nnot ask which part of the heart has been injured but\nwhich part of the heart will most likely be compressed\nby the cardiac tamponade, the correct answer would\nhave been the right atrium. This is due to the fact that\nthe right atrium has lower pressures than the other\ncardiac components.",
    },
    {
      q: "A 69-year-old man is admitted to the hospital with\nintense left chest pain. ECG reveals hypokinetic ven\ntricular septal muscle, myocardial infarction in the\nanterior two thirds of the interventricular septum and\nleft anterior ventricular wall. The patient’s ECG also\nexhibited left bundle branch block. Which of the fol\nlowing arteries is most likely occluded?",
      a: [
        "Circumflex",
        "Proximal right coronary",
        "Proximal left coronary",
        "Proximal left anterior interventricular artery",
        "Posterior interventricular artery",
      ],
      correct: 3,
      explanation:
        "The tissues affected in this case, the interventricular septum and anterior ventricular wall, are\nmostly supplied by the proximal portion of the left\nanterior interventricular artery. If the circumflex artery\nwere blocked, the left atrium and left ventricle would\nbe affected (in a right coronary dominant heart). If\nthe right coronary artery were occluded, again assuming right coronary dominance, it would affect the right\natrium, the SA and atrioventricular nodes, part of the\nposterior left ventricle, and the posterior part of the\ninterventricular septum. If the left coronary artery\n(LCA) were blocked, most of the left atrium and left\nventricle, the anterior two thirds of the interventricular septum, and the area of bifurcation of the bundle\nof His would be affected. If the posterior interventricular artery were occluded, it would affect the right\nand left ventricles and the posterior third of the interventricular septum. The circumflex and the anterior\ninterventricular arteries are branches of the LCA, and\nthe posterior interventricular artery is most commonly\na branch of the terminal segment of the right coronary\nartery.",
    },
    {
      q: "A 49-year-old woman is admitted to the hospital\ncomplaining of severe, crushing, retrosternal pain\nduring the preceding hour. An ECG reveals that she is\nsuffering from acute myocardial infarction in the pos\nterior aspect of her left ventricle and posteromedial\npapillary muscle. A coronary angiogram is performed\nand the patient is found to have left dominant coronary\ncirculation. Which of the following arteries is the most\nlikely to be occluded?",
      a: [
        "Artery of the conus",
        "Right coronary artery",
        "Circumflex",
        "Right acute marginal",
        "Left diagonal",
      ],
      correct: 2,
      explanation:
        "A “left coronary dominant” circulation means,\nput simply, that the left coronary artery (LCA) provides the posterior interventricular artery as a terminal branch of the coronary circumflex. The posterior\naspect of the heart is composed primarily of the left\nventricle and is supplied by the posterior interventricular branch. The artery of the conus supplies the\nright ventricular free wall. If the right coronary artery\nwere occluded (in a right coronary dominant heart),\nit would affect the right atrium, right ventricle, the SA\nand atrioventricular nodes, the posterior part of the\ninterventricular septum, and part of the posterior\naspect of the left ventricle. The right acute marginal\nartery supplies the inferior margin of the right ventricle. The left diagonal arteries arise most commonly\nfrom the anterior interventricular (left-anterior\ndescending) artery but can also arise as branches of\nthe left coronary or the circumflex.",
    },
    {
      q: "A 75-year-old man is scheduled for his routine\nannual medical examination. During echocardiographic\nexamination a large, mobile structure resembling a\nthrombus is identified in the right atrium near the\nopening of the inferior vena cava. After careful exami\nnation the doctor identifies the large mobile structure\nas a normal component of the heart. Which of the fol\nlowing structures could most likely resemble a throm\nbus in this location?",
      a: [
        "Tricuspid valve",
        "Eustachian valve",
        "Thebesian valve",
        "Septum primum",
        "Fossa ovalis",
      ],
      correct: 1,
      explanation:
        "The eustachian valve is an embryologic\nremnant of the valve of the inferior vena cava and is\nnot a functional valve. The tricuspid valve is located\nbelow the inferior vena cava between the right atrium\nand right ventricle. The fossa ovalis is an embryonic\nremnant of the septum primum of the interatrial\nseptum, located between the right and left atria. The\nthebesian valve is a semicircular fold at the orifice of\nthe coronary sinus.",
    },
    {
      q: "A 4-year-old boy is operated on for a correction\nof a small, muscular interventricular septal defect. To\naccess the right side of the interventricular septum, a\nwide incision is first made in the anterior surface of the\nright atrium. Instruments are then inserted through the\ntricuspid valve to correct the VSD. Which of the follow\ning structures is the most crucial to protect during the\nopening of the right atrium?",
      a: [
        "Crista terminalis",
        "Pectinate muscles",
        "Tricuspid valve",
        "Eustachian valve",
        "Coronary sinus",
      ],
      correct: 0,
      explanation:
        "The crista terminalis is a muscular ridge that\nruns from the opening of the superior vena cava to\nthe inferior vena cava. This ridge provides the path\ntaken by the posterior internodal pathway (of Thorel)\nbetween the SA and atrioventricular nodes. The crista\nalso provides the origin of the pectinate muscles of\nthe right auricle. The tricuspid valve is located below\nthe inferior vena cava, between the right atrium and\nright ventricle. The eustachian valve is an embryologic remnant of the valve of the inferior vena cava.\nThe ostium of the coronary sinus is located between\nthe right atrioventricular orifice and the inferior vena\ncava.",
    },
    {
      q: "A 52-year-old patient is admitted to the hospital\nwith severe chest pain. ECG and radiologic examina\ntions provide evidence of a significant myocardial\ninfarction and cardiac tamponade. An emergency peri\n\ncardiocentesis is performed. At which of the following\nlocations will the needle best be inserted to relieve the\ntamponade?",
      a: [
        "Right seventh intercostal space in the\n\nmidaxillary line",
        "Left fifth intercostal space in the\n\nmidclavicular line",
        "Right third intercostal space, 1 inch lateral to\n\nthe sternum",
        "Left sixth intercostal space, 12 inch lateral to\n\nthe sternum",
        "Triangle of auscultation",
      ],
      correct: 1,
      explanation:
        "During pericardiocentesis, the needle is\ninserted below the xiphoid process, or in the left fifth\nintercostal space in the midclavicular line. The most\n\neffective way of draining the pericardium is by penetrating the thoracic wall at its lowest point anatomically, hence the third intercostal space would be too\nsuperior in position. The sixth and seventh intercostal\nspaces are locations that are not used clinically\nbecause of the increased likelihood of injury to the\npleura or lungs and other complications.",
    },
    {
      q: "A 55-year-old man is brought to the emergency\ndepartment after his motorcycle collided with an auto\nmobile. He is hypotensive, his pulse is irregular, and\nhe shows other signs of substantial blood loss. MRI and\nCT scan evaluations reveal profuse abdominal bleed\ning. A decision is made to enter the chest so that the\ndescending thoracic aorta can be clamped to minimize\nblood loss and to preserve cerebral blood flow. After\nsurgical entrance into the thorax, the fibrous pericar\ndium is elevated with forceps and punctured. A midline,\nlongitudinal incision of the pericardium would best be\nmade to prevent injury to which of the following\nstructures?",
      a: [
        "Auricular appendage of the left atrium",
        "Coronary sinus",
        "Left anterior descending artery",
        "Left phrenic nerve",
        "Left sympathetic trunk",
      ],
      correct: 2,
      explanation:
        "The anterior interventricular (left anterior\ndescending) artery lies anteriorly and to the left and\ndescends vertically to the left toward the apex. It can\nbe more easily injured by a transverse incision of the\npericardium, which would cross perpendicular to this\nartery. The auricular appendage of the left atrium is\nlocated posteriorly; therefore, it would not be injured\nin an anterior longitudinal incision. The coronary\nsinus is between the right atrioventricular orifice and\nthe inferior vena cava and would not be affected. The\nleft phrenic nerve lies between the heart and the left\nlung and is too deep to be injured in this incision.\nThe left sympathetic trunk is also too posterior to be\ninjured.",
    },
    {
      q: "During cardiac surgery of a 45-year-old man, the\ncardiac surgeon can place her fingers in the transverse\npericardial sinus, if necessary. This allows the surgeon\nto easily place a vascular clamp upon which of the\nfollowing vessels?",
      a: [
        "Right and left pulmonary veins",
        "Superior and inferior vena cava",
        "Right and left coronary arteries",
        "Pulmonary trunk and ascending aorta",
        "Pulmonary trunk and superior vena cava",
      ],
      correct: 3,
      explanation:
        "A finger passing through the transverse pericardial sinus passes directly behind the two great\narteries exiting the heart, allowing the surgeon to\nrather easily place a vascular clamp upon the pulmonary trunk and ascending aorta. The other vessels\nlisted are not readily accessible by way of the transverse sinus.",
    },
    {
      q: "A 48-year-old male patient is scheduled to have\na coronary arterial bypass because of chronic angina.\nCoronary arteriography reveals nearly total blockage of\nthe posterior descending interventricular artery. In\nexposing this artery to perform the bypass procedure,\nwhich accompanying vessel is most susceptible to\ninjury?",
      a: [
        "Middle cardiac vein",
        "Great cardiac vein",
        "Small cardiac vein",
        "Anterior cardiac vein",
        "Coronary sinus",
      ],
      correct: 0,
      explanation:
        "The middle cardiac veins run parallel with\nthe posterior interventricular (posterior descending)\nartery and drains directly into the coronary sinus. The\ngreat cardiac vein parallels the anterior interventricular artery and the small cardiac veins pass parallel\nwith the right marginal artery. The anterior cardiac\nveins are several small veins that drain directly into\nthe right atrium. The coronary sinus is a wide venous\nchannel that runs from left to right in the posterior\npart of the coronary groove.",
    },
    {
      q: "A 54-year-old man is admitted to the hospital with\nsevere chest pain. ECG examination reveals a myocar\ndial infarction. If the posterior interventricular branch\nin the patient arises from the right coronary artery,\nwhich part of the myocardium will most likely have its\nblood supply reduced if the circumflex branch of the\nleft coronary artery becomes occluded from an athero\nsclerotic plaque?",
      a: [
        "Anterior part of the interventricular septum",
        "Diaphragmatic surface of the right ventricle",
        "Infundibulum",
        "Lateral wall of the left ventricle",
        "Posterior part of the interventricular septum",
      ],
      correct: 3,
      explanation:
        "The left coronary artery bifurcates into the\nanterior interventricular artery (left anterior descending: LAD) and the coronary circumflex branch. The\ncircumflex branch gives off the left marginal branch,\nwhich supplies the lateral wall (obtuse margin) of the\nleft ventricle. The anterior part of the interventricular\nseptum is supplied by the LAD. The diaphragmatic\nsurface of the right ventricle is supplied by the\nposterior descending artery and the right marginal, a\nbranch of the right coronary artery. The infundibulum, also known as the conus arteriosus, is the\noutflow portion of the right ventricle. The posterior\npart of the interventricular septum is supplied by the\nposterior descending artery, in most cases a branch\nof the right coronary artery.",
    },
    {
      q: "A 70-year-old man with a history of two previous\nmyocardial infarctions is admitted to the hospital with\nsevere chest pain. ECG reveals a new myocardial infarc\ntion and ventricular arrhythmia. Coronary angiography\nreveals that the right coronary artery is blocked just\ndistal to the origin of the right marginal artery in a right\ncoronary dominant circulation. Which of the following\nstructures would most likely be affected after such a\nblockade?",
      a: [
        "Right atrium",
        "SA node",
        "AV node",
        "Lateral wall of the left ventricle",
        "Anterior interventricular septum",
      ],
      correct: 2,
      explanation:
        "The atrioventricular (AV) node is most commonly supplied by a branch of the right coronary\nartery. This branch arises at the crux of the heart\n(the point of junction of all four cardiac chambers\nposteriorly); this is the location of the occlusion. The\nright atrium is supplied by the right coronary artery,\nwhich additionally supplies the SA node. The left\nmarginal artery supplies the lateral wall of the left\nventricle. The anterior portion of the interventricular\nseptum is supplied by the anterior interventricular\nartery.",
    },
    {
      q: "A 43-year-old woman is diagnosed with mitral\nvalve stenosis. During physical examination the first\nheart sound is abnormally loud. Which of the following\nheart valves are responsible for the production of the\nfirst heart sound?",
      a: [
        "Aortic and mitral",
        "Aortic and tricuspid",
        "Tricuspid and mitral",
        "Mitral and pulmonary",
        "Tricuspid and pulmonary",
      ],
      correct: 2,
      explanation:
        "The first heart sound is caused by the closure\nof the tricuspid and mitral valves. The second heart\nsound is caused by the closure of the aortic and pulmonary valves.",
    },
    {
      q: "A 75-year-old woman is admitted to the hospital\nwith anginal pain. ECG reveals myocardial infarction\nand a right bundle branch block. During physical exam\nination the patient has a loud second heart sound.\nWhich of the following heart valves are responsible for\nthe production of the second heart sound?",
      a: [
        "Aortic and pulmonary",
        "Aortic and tricuspid",
        "Tricuspid and mitral",
        "Mitral and pulmonary",
        "Tricuspid and pulmonary",
      ],
      correct: 0,
      explanation:
        "The second heart sound is caused by the\nclosure of the aortic and pulmonary valves. The first\nsound by the heart is caused by the closure of the\ntricuspid and mitral valves.",
    },
    {
      q: "Ten days after a surgical procedure to correct her\ncardiac malformation, a 3-month-old infant died unex\npectedly in her sleep. After an autopsy, the pathologist\nreported as follows: “A significant portion of the con\nduction tissue was found to be necrotic. The area of\nthe necrotic tissue was located inferior to the central\nfibrous body, membranous septum, and septal leaflet\nof the tricuspid valve. Further examination revealed\ninfarction of the surrounding tissue. The rest of the\nheart was unremarkable.” Which of the following arter\nies was most likely occluded?",
      a: [
        "Artery of the conus",
        "SA node artery",
        "AV node artery",
        "First septal perforator of the anterior\n\ninterventricular artery",
        "All of the above",
      ],
      correct: 3,
      explanation:
        "The first septal perforating branch of the\nanterior interventricular artery (left anterior descending; LAD) is the first branch of the LAD that supplies\nthe conducting tissue of the heart; it passes directly\nto the point of bifurcation of the common atrioventricular bundle of His. The other vessels listed have\nno anatomic relation to the area of ischemia.",
    },
    {
      q: "A 55-year-old man is undergoing an aortic valve\nreplacement. During the procedure the heart is con\nnected to the heart lung machine. As the surgeon\nexplores the oblique pericardial sinus, which of the\nfollowing is not directly palpable with the tips of the\nfingers?",
      a: [
        "Inferior vena cava",
        "Superior vena cava",
        "Posterior wall of the left atrium",
        "Inferior right pulmonary vein",
        "Right atrium",
      ],
      correct: 1,
      explanation:
        "The superior vena cava empties into the right\natrium on the superior aspect of the heart; it is not\ndirectly palpable from the oblique sinus. The oblique\nsinus is a cul-de-sac providing access to the inferior\nvena cava, the posterior wall of the left atrium, right\natrium, and the right and left pulmonary veins.",
    },
    {
      q: "A 42-year-old woman is admitted urgently to the\nemergency department after suffering a penetrating\nwound to her chest from an ice pick during a violent\ndomestic dispute. Physical and ultrasound examina\ntions reveal that the patient has cardiac tamponade.\nWhich of the following will most likely be found during\nphysical examination?",
      a: [
        "There will be a visible or palpable decrease\n\nin the dimensions of the external jugular and\ninternal jugular vein",
        "There will be gradual enlargement of the\n\nventricles in diastole",
        "The difference between systolic and diastolic\n\narterial pressures will increase significantly",
        "There will be diminished heart sounds",
        "The pulses in the internal carotid arteries will\n\nbecome increasingly distinct, as detected\nbehind the angles of the mandible",
      ],
      correct: 3,
      explanation:
        "Cardiac tamponade is characterized by hypotension, tachycardia, muffled heart sounds, and\njugular vein distention. Bleeding into the pericardial\n\ncavity would muffle the heart sounds because of the\nincreased distance between the chest wall and the\nheart, leading to “distant” heart sounds. When the\neffusion is particularly severe, the heart may take on\na “water bottle” appearance on an anterior-posterior\nradiograph.",
    },
    {
      q: "During surgical repair of a congenital cardiac\nanomaly in a 15-year-old boy with a right dominant\ncoronary arterial system, the surgeon accidentally\ninjured a vessel that usually supplies part of the con\nduction system. This results in intermittent periods of\natrioventricular block and severe arrhythmia. The\ninjured artery was most likely a direct branch of which\nof the following arteries?",
      a: [
        "Distal anterior interventricular artery",
        "Circumflex artery",
        "Left coronary artery",
        "Marginal artery",
        "Right coronary artery",
      ],
      correct: 4,
      explanation:
        "“Right coronary dominant circulation” refers\nsimply to the fact that the right coronary artery provides origin for the posterior interventricular (posterior descending) coronary artery. In such cases, it\nprovides supply for the SA and atrioventricular nodes.\nIt might be anticipated that right coronary blockage\ncould result in dysfunction of the atrioventricular\nnode, if collateral supply is poor or absent. The LAD,\ncircumflex, and left marginal are all branches of the\nleft coronary artery. The right marginal artery marginal is a branch of the right coronary artery.",
    },
    {
      q: "A 42-year-old woman is admitted to the hospital\nwith dyspnea. Imaging reveals severe mitral valve\nregurgitation. Which of the following structures pre\nvents regurgitation of the mitral valve cusps into the\nleft atrium during systole?",
      a: [
        "Crista terminalis",
        "Crista supraventricularis",
        "Pectinate muscles",
        "Chordae tendineae",
        "Trabeculae carneae",
      ],
      correct: 3,
      explanation:
        "The chordae tendineae are fibrous cords that\nconnect papillary muscles to valve leaflets. The\nrestraint provided by these cords on the valve leaflets\n(along with contraction of the papillary muscles) prevents the prolapse of the mitral valve cusps into the\nleft atrium. The crista terminalis is a ridge that runs\nfrom the opening of the inferior vena cava to the\nsuperior vena cava. Trabeculae carneae are irregular\nridges of myocardium that are present within the\nventricles.",
    },
    {
      q: "A 58-year-old woman with cardiac arrhythmia\nhas undergone a procedure to implant a pacemaker.\nThe electrical conducting leads for the pacemaker must\nbe passed into the heart from the pacemaker. Which of\nthe following is the correct order of structures for\npassage of the leads into the right ventricle?",
      a: [
        "Brachiocephalic vein, superior vena cava,\n\nmitral valve, right ventricle",
        "Superior vena cava, right atrium, mitral valve,\n\nright ventricle",
        "Superior vena cava, right atrium, tricuspid\n\nvalve, right ventricle",
        "Brachiocephalic vein, superior vena cava,\n\nright atrium, tricuspid valve, right ventricle",
        "Brachiocephalic vein, superior vena cava,\n\nright atrium, mitral valve, right ventricle",
      ],
      correct: 3,
      explanation:
        "The correct path that leads to the right ventricle for the lead of the pacemaker is the brachiocephalic vein (could be right or left; pacemakers are\nmore commonly placed on the left in which case it\nwould be the left brachiocephalic vein), superior\nvena cava, right atrium, tricuspid valve, and right\nventricle.",
    },
    {
      q: "A 68-year-old man patient in the cardiology ward\ncomplains at each mealtime of difficulty in swallowing\n(dysphagia). Radiologic studies reveal significant car\ndiac hypertrophy. A barium swallow, followed by radio\nlogic examination of the thorax, reveals esophageal\nconstriction directly posterior to the heart. Which of\nthe following is the most likely cause of the patient’s\ndysphagia?",
      a: [
        "Mitral valve stenosis",
        "Pulmonary valve stenosis",
        "Regurgitation of the aorta",
        "Occlusion of the anterior interventricular\n\nartery",
        "Occlusion of the posterior interventricular\n\nartery",
      ],
      correct: 0,
      explanation:
        "Mitral stenosis leads to left atrial dilation,\nwhich can exert a compressive effect on the esophagus. The pulmonary valve is located between the\noutflow tract of the right ventricle and the pulmonary\ntrunk. The aortic valve is located between the left\nventricle and the aorta. Anterior interventricular\n(LAD) and posterior interventricular (posterior descending) arterial occlusions can cause a myocardial\ninfarction, but not dysphagia. In the normal position\nof the heart the left atrium lies most posteriorly.\nTherefore, a stenosis of the mitral valve (atrioventricular valve between left atrium and left ventricle)\nwould lead to enlargement of the left atrium, which\nwould in turn impinge upon the esophagus. A stenosis of the pulmonary valve would have no effect upon\nthe esophagus because of the anterior position of the\npulmonary trunk in the thorax. Regurgitation through\nany valve will ultimately decrease systemic blood\nflow. An occlusion of a coronary artery will lead to\nischemia and possibly myocardial infarction.",
    },
    {
      q: "A 35-year-old woman is admitted to the emer\ngency department because of cardiac arrhythmia. ECG\nexamination reveals that the patient suffers from atrial\nfibrillation. Where is the mass of specialized conduct\ning tissue that initiates the cardiac cycle located?",
      a: [
        "At the junction of the coronary sinus and the\n\nright atrium",
        "At the junction of the inferior vena cava and\n\nthe right atrium",
        "At the junction of the superior vena cava and\n\nthe right atrium",
        "Between the left and right atria",
        "In the interventricular septum",
      ],
      correct: 2,
      explanation:
        "The SA node, the primary pacemaker of the\nheart, is a mass of specialized cardiac cells within the\nmyocardium at the upper end of the crista terminalis,\nnear the opening of the superior vena cava into the\nright atrium. The AV node is at the junction of the\ncoronary sinus and the right atrium upon the right\nfibrous trigone (central fibrous body). The eustachian\nvalve directs blood from the inferior vena cava and\nthrough the right atrium toward the tricuspid valve\nostium. The interatrial septum is located between the\nleft and right atria. The septomarginal trabeculum\n(moderator band) arises from the muscular portion of\nthe interventricular septum and passes to the base of\nthe anterior papillary muscle in the right ventricle.\nThe moderator band carries the right bundle branch\nof the conduction system just beneath its endocardial\nlayer.",
    },
    {
      q: "A 45-year-old woman is admitted to the hospital\nwith swelling (edema) of the lower limbs. Ultrasound\nexamination reveals an incompetent tricuspid valve.\nInto which area will regurgitation of blood occur in this\npatient?",
      a: [
        "Pulmonary trunk",
        "Left atrium",
        "Ascending aorta",
        "Right atrium",
        "Left ventricle",
      ],
      correct: 3,
      explanation:
        "The tricuspid valve is the atrioventricular\nvalve located between the right atrium and right ventricle. An incompetent valve would allow blood to\nregurgitate into the right atrium during systole and\nsubsequently raise pressure in the venous system,\nincreasing capillary pressure and causing edema. A\nregurgitation of blood into the pulmonary trunk would\nbe a result of an incompetent pulmonary valve. Regurgitation of blood from the left ventricle back into the\nleft atrium is a result of prolapse of the mitral valve.\nThere is no direct anatomic relationship between the\ntricuspid valve and the ascending aorta. Blood would\npool in the left ventricle in the event of aortic valve\nincompetence.",
    },
    {
      q: "A 34-year-old man with a complaint of sharp,\nlocalized pain over the thoracic wall is diagnosed with\npleural effusion. Through which intercostal space along\nthe midaxillary line is it most appropriate to insert a\nchest tube to drain the effusion fluid?",
      a: ["Fourth", "Sixth", "Eighth", "Tenth", "Twelfth"],
      correct: 2,
      explanation:
        "To avoid damaging the lungs, a chest tube\nshould be placed below the level of the lungs, in the\ncostodiaphragmatic recess. Such a point of entrance\nfor the tube would be the eighth or ninth intercostal\nspace. At the midclavicular line, the costodiaphragmatic recess is localized between intercostal spaces 6\nand 8, at the midaxillary line between 8 and 10, and\nat the paravertebral line between ribs 10 and 12.",
    },
    {
      q: "A 51-year-old man is admitted to the hospital with\nsevere dyspnea. Radiologic examination reveals a ten\nsion pneumothorax. Adequate local anesthesia of the\nchest wall prior to insertion of a chest tube is necessary\nfor pain control. Of the following layers, which is the\ndeepest that must be infiltrated with the local anes\nthetic to achieve adequate anesthesia?",
      a: [
        "Endothoracic fascia",
        "Intercostal muscles",
        "Parietal pleura",
        "Subcutaneous fat",
        "Visceral pleura",
      ],
      correct: 2,
      explanation:
        "The parietal pleura is innervated by the intercostal nerves and is very sensitive to pain, in this case\nbeing somatic innervation. Therefore, the parietal\npleura is the deepest layer that must be anesthetized\nto reduce pain during aspiration or chest tube\nplacement.",
    },
    {
      q: "A 5-year-old boy had been playing with a small\ntoy car. Soon after, he put a wheel from one of the cars\nin his mouth and began choking and coughing. Where\nin the tracheobronchial tree is the most common site\nfor a foreign object to lodge?",
      a: [
        "The right primary bronchus",
        "The left primary bronchus",
        "The carina of the trachea",
        "The beginning of the trachea",
        "The left tertiary bronchus",
      ],
      correct: 0,
      explanation:
        "The right main bronchus is the shorter, wider,\nand more vertical primary bronchus. Therefore, this\nis most often the location that foreign objects will\nlikely be lodged. The left primary bronchus is not as\nvertical and therefore does not present the path of\nleast resistance. (It must be understood, however, that\nin some cases of aspiration, the foreign body can pass\ninto the left primary bronchus rather than the right\nbronchus!) The carina is a ridge separating the openings of left and right bronchi, the “fork in the road,”\nso to speak. The trachea is a tubular structure supported by incomplete cartilaginous rings, and the likelihood that an object will be lodged there is minimal.\nIt is unlikely that a foreign object would descend so\nfar as to obstruct a tertiary bronchus, although this\ncould happen.",
    },
    {
      q: "A 3-year-old child is admitted to the emergency\ndepartment with a particularly severe attack of asthma.\nWhich of the following is the most important factor in\nincreasing the intrathoracic capacity in inspiration?",
      a: [
        "“Pump handle movement” of the ribs—\n\nthereby increasing anterior-posterior\ndimensions of the thorax",
        "“Bucket handle movement” of the ribs—\n\nincreasing the transverse diameter of the\nthorax",
        "Straightening of the forward curvature of the\n\nthoracic spine, thereby increasing the vertical\ndimensions of the thoracic cavity",
        "Descent of the diaphragm, with protrusion of\n\nthe abdominal wall, thereby increasing\nvertical dimensions of the thoracic cavity",
        "Orientation and flexibility of the ribs in the\n\nbaby, thus allowing expansion in all\ndirections",
      ],
      correct: 3,
      explanation:
        "Contraction of the diaphragm (descent) pulls\nthe dome inferiorly, increasing the vertical dimension\nof the thorax. This is the most important factor in\ninspiration for decreasing intrathoracic pressure,\nthereby increasing the internal pulmonary volume.\nThe contraction of intercostal muscles is usually\ninvolved in forced inspiration, resulting in increases\nin the transverse and anteroposterior dimensions of\nthe thoracic cavity.",
    },
    {
      q: "A 54-year-old woman is admitted to the hospital\nwith a stab wound of the thoracic wall in the area of\nthe right fourth costal cartilage. Which of the following\npulmonary structures is present at this site?",
      a: [
        "The horizontal fissure of the left lung",
        "The horizontal fissure of the right lung",
        "The oblique fissure of the left lung",
        "The apex of the right lung",
        "The root of the left lung",
      ],
      correct: 1,
      explanation:
        "The horizontal fissure of the right lung is a\nfissure separating the superior lobe from the middle\nlobe. It usually extends medially from the oblique\nfissure at the midaxillary line to the sternum, along\nthe lower border of the fourth rib. The apex of the\nright lung reaches to a level above the clavicle and is\ntherefore superior to the stab wound in the fourth\ncostal cartilage.",
    },
    {
      q: "A 55-year-old woman visited her doctor because\nof a painful lump in her right breast and a bloody dis\ncharge from her right nipple. Radiologic studies and\nphysical examination reveal unilateral inversion of the\nnipple, and a tumor in the right upper quadrant of the\nbreast is suspected. In addition, there is an orange-peel\n\nappearance of the skin (peau d’orange) in the vicinity\nof the areola. Which of the following best explains the\ninversion of her nipple?",
      a: [
        "Retention of the fetal and infantile state of\n\nthe nipple",
        "Intraductal cancerous tumor",
        "Retraction of the suspensory ligaments of the\n\nbreast by cancer",
        "Obstruction of the cutaneous lymphatics,\n\nwith edema of the skin",
        "Inflammation of the epithelial lining of the\n\nnipple and underlying hypodermis",
      ],
      correct: 2,
      explanation:
        "The patient’s symptoms are all indicative\nof inflammatory breast cancer. Common symptoms\ninclude inversion of the nipple and dimpling of the\noverlying skin, changes that are due to the retraction\nof the suspensory ligaments (of Cooper). Intraductal\ncancerous tumors show symptoms including breast\nenlargement, breast lump, breast pain, and nipple\ndischarge (GAS Fig. 3-16).",
    },
    {
      q: "A 58-year-old woman is admitted to the emer\ngency department with severe dyspnea. Bronchoscopy\nreveals that the carina is distorted and widened.\nEnlargement of which group of lymph nodes is most\nlikely responsible for altering the carina?",
      a: [
        "Pulmonary",
        "Bronchopulmonary",
        "Inferior tracheobronchial",
        "Superior tracheobronchial",
        "Paratracheal",
      ],
      correct: 2,
      explanation:
        "The inferior tracheobronchial nodes are also\nknown as the carinal nodes and are located on the\ninferior aspect of the carina, the site of bifurcation of\nthe trachea. The pulmonary nodes lie on secondary\nbronchi. The bronchopulmonary (hilar) nodes run\nalong the primary bronchi. The superior tracheobronchial nodes are at the junction of the bronchi and\nthe trachea. The paratracheal nodes run along the\ntrachea.",
    },
    {
      q: "A 72-year-old patient vomited and then aspirated\nsome of the vomitus while under anesthesia. On bron\nchoscopic examination, partially digested food is\nobserved blocking the origin of the right superior lobar\nbronchus. Which of the following groups of broncho\npulmonary segments will be affected by this\nobstruction?",
      a: [
        "Superior, medial, lateral, medial basal",
        "Apical, anterior, posterior",
        "Posterior, anterior, superior, lateral",
        "Apical, lateral, medial, lateral basal",
        "Anterior, superior, medial, lateral",
      ],
      correct: 1,
      explanation:
        "The superior lobar bronchus is one of the\ndivisions of the right main bronchus. This bronchus\nbranches into apical, anterior, and posterior tertiary\nbronchi.",
    },
    {
      q: "A 35-year-old woman is admitted to a surgical\nward with a palpable mass in her right breast and\nswollen lymph nodes in the ipsilateral axilla. Radiologic\nstudies and biopsy reveal carcinoma of the breast.\nWhich group of axillary lymph nodes is the first to\nreceive lymph drainage from the secretory tissue of the\nbreast and therefore most likely to contain metastasized\ntumor cells?",
      a: [
        "Lateral",
        "Central",
        "Apical",
        "Anterior (pectoral)",
        "Posterior (subscapular)",
      ],
      correct: 3,
      explanation:
        "Lymphatic drainage of the breast is typically\nto the axillary nodes, more specifically to the anterior\n(pectoral) nodes. Lymphatic vessels from the pectoral\nnodes continue into the central axillary nodes, the\ndrainage of which passes farther into the apical node,\njust inferior to the clavicle in the deltopectoral triangle. From these nodes lymph passes to the “sentinel,”\nor scalene, nodes and the subclavian lymph trunk.\nThe lateral and posterior axillary nodes do not normally receive lymph drainage from the breast but do\nreceive lymph from the upper limb. (This is the reason\nfor the edema of the upper limb that occurs after a\nmastectomy, in which there may be a total removal\nof axillary lymph nodes.)",
    },
    {
      q: "An 18-year-old man is admitted to the emergency\ndepartment because of a significant nose bleed and a\nheadache that has worsened over several days. He also\ncomplains of fatigue. Upon examination it is noted that\nbrachial artery pressure is markedly increased, femoral\npressure is decreased, and the femoral pulses are\ndelayed. The patient shows no external signs of inflam\nmation. Which of the following is the most likely\ndiagnosis?",
      a: [
        "Coarctation of the aorta",
        "Cor pulmonale",
        "Dissecting aneurysm of the right common\n\niliac artery",
        "Obstruction of the superior vena cava",
        "Pulmonary embolism",
      ],
      correct: 0,
      explanation:
        "Increased arterial pressure in the upper limbs\n(as demonstrated in the brachial artery) and decreased\npressure in the lower limbs (as demonstrated in the\nfemoral artery) are common symptoms of coarctation\nof the aorta. Other symptoms include tortuous and\nenlarged blood vessels above the coarctation and an\nincreased risk of cerebral hemorrhage. This condition\nof coarctation occurs when the aorta is abnormally\nconstricted during development. The patient does not\ncomplain of respiratory distress, so cor pulmonale\nwould not likely be the underlying condition. Dissection of the right common iliac artery would not result\nin nosebleed or headache. Obstruction of the superior\nvena cava would not account for decreased femoral\n\npulse. A pulmonary embolism will not present with\nthese symptoms.",
    },
    {
      q: "A 22-year-old man is diagnosed with signs of\nreduced aortic flow. Upon examination it is noted that\nbrachial artery pressure is markedly increased, femoral\npressure is decreased, and the femoral pulses are\ndelayed. The patient shows no external signs of inflam\nmation. Which of the following conditions will most\nlikely be observed in a radiologic examination?",
      a: [
        "Flail chest",
        "Pneumothorax",
        "Hydrothorax",
        "Notching of the ribs",
        "Mediastinal shift",
      ],
      correct: 3,
      explanation:
        "The diagnosis for these symptoms is coarctation of the aorta. This condition occurs when the\naorta is abnormally constricted. One of the cardinal\nradiographic signs is a characteristic rib notching.\n“Notching” of the ribs is due to the reversal of direction of blood flow through the anterior intercostal\nbranches of the internal thoracic artery, as these\nusually small arteries carry collateral arterial blood\nflow to the lower thoracic portion of the aorta inferior\nto the coarctation. Enlargement and vibration of the\nintercostal arteries against the rib results in erosion\n(“notching”) of the subcostal grooves, which is visible\non radiography.",
    },
    {
      q: "A patient who has undergone a radical mastec\ntomy with extensive axillary dissection exhibits winging\nof the scapula when she pushes against resistance\non an immovable object, such as a wall. Injury of\nwhich of the following nerves would result in this\ncondition?\n\nB\n\nA\n\nC\n\nD\nE",
      a: ["A", "B", "C", "D", "E"],
      correct: 2,
      explanation:
        "The long thoracic nerve arises from the C5,\nC6, and C7 ventral rami and innervates the serratus\nanterior muscle. Injury of this nerve will result in\na characteristic winged scapula. A is the lateral pectoral nerve, which innervates the pectoralis major\nmuscle. B is the suprascapular nerve, which innervates the supraspinatus and infraspinatus muscles. D\nis the thoracodorsal nerve, which innervates latissimus dorsi. E is the lower subscapular nerve that\nParasternal nodes\nSuspensory ligaments\nLactiferous sinuses\nLactiferous ducts\nRetromammary space\nSecretory lobules\nPectoralis major muscle\nMammary branches of\ninternal thoracic artery\nAxillary process\nLateral thoracic artery\nLateral axillary nodes\nCentral axillary nodes\nApical axillary nodes\nPectoral branch of\nthoraco-acromial artery\nInternal thoracic artery\nAreola\nSecretory\nlobules\nLymphatic and venous drainage\npasses from lateral and superior\npart of the breast into axilla\nLymphatic and venous\ndrainage passes from medial part\nof the breast parasternally\nSome lymphatic and venous drainage\nmay pass from inferior part of the\nbreast into the abdomen\nPectoral axillary nodes\n\ninnervates the lower part of the subscapularis muscle\nand the teres major.",
    },
    {
      q: "A 22-year-old woman sustained a chest injury\nupon impact with the steering wheel during a car crash.\nUpon admission of the patient to the hospital, physical\nexamination revealed profuse swelling, inflammation,\nand deformation of the chest wall. A radiograph\nrevealed an uncommon fracture of the sternum at the\nmanubriosternal joint. Which of the following ribs\nwould be most likely to also be involved in such an\ninjury?",
      a: ["First", "Second", "Third", "Fourth", "Fifth"],
      correct: 1,
      explanation:
        "The superior margin of the manubrium is\ncharacterized by the jugular notch. Laterally are the\nsternoclavicular joints and the articulations of the\nfirst ribs with the manubrium. The second pair of ribs\narticulates with the sternum at the sternal angle, the\njunction of the manubrium with the body of the\nsternum.",
    },
    {
      q: "A 47-year-old man is admitted to the emergency\ndepartment, due to severe dysphagia. Edema of the left\nupper limb is apparent upon physical examination. A\nbarium sulfate swallow imaging procedure reveals\nesophageal dilation, with severe inflammation, due to\nconstriction at the esophageal hiatus from a large\nlipoma. What is the most likely cause of the severe\nedema of the left upper limb?",
      a: [
        "Thoracic aorta constriction",
        "Thoracic duct blockage",
        "Superior vena cava occlusion",
        "Aortic aneurysm",
        "Femoral artery disease",
      ],
      correct: 1,
      explanation:
        "The thoracic duct is important in lymph drainage of the entire body with the exception of the upper\nright quadrant. The thoracic duct ascends between the\naorta and azygos vein behind the esophagus. Dilation\nof the esophagus here in the lower thorax from a large\nlipoma can compress the thoracic duct, leading to\nimpairment of lymphatic drainage and resultant\nedema.",
    },
    {
      q: "In coronary bypass graft surgery of a 49-year-old\nwoman, the internal thoracic artery is used as the coro\nnary artery bypass graft. The anterior intercostal arter\nies in intercostal spaces three to six are ligated. Which\nof the following arteries will be expected to supply\nthese intercostal spaces?",
      a: [
        "Musculophrenic",
        "Superior epigastric",
        "Posterior intercostal",
        "Lateral thoracic",
        "Thoracodorsal",
      ],
      correct: 2,
      explanation:
        "The anterior intercostal arteries anastomose\nwith the posterior intercostal arteries. Ligation of the\nanterior arteries would not affect the supply of the\nintercostal spaces because the posterior arteries would\nprovide collateral arterial supply. Branches of the\nmusculophrenic artery provide supply for the lower\nseventh, eighth, and ninth intercostal spaces. The\nsuperior epigastric artery passes into the rectus sheath\nof the anterior abdominal wall. The lateral thoracic\nartery arises from the second part of the axillary\nartery, and the thoracodorsal artery is a branch of the\nsubscapular artery, a branch of the third part of the\naxillary artery.",
    },
    {
      q: "A 10-year-old boy is admitted to the hospital with\nretrosternal discomfort. A CT scan reveals a midline\ntumor of the thymus gland. Which of the following\nveins would most likely be compressed by the tumor?",
      a: [
        "Right internal jugular",
        "Left internal jugular",
        "Right brachiocephalic",
        "Left brachiocephalic",
        "Right subclavian",
      ],
      correct: 3,
      explanation:
        "The thymus lies in the superior mediastinum\nand extends upward into the neck, especially in the\nyoung. A midline tumor of this gland can compress\nthe left brachiocephalic vein. The subclavian vein\nis distal or lateral to this location, and the thymus\ngland would not likely impinge upon it. The internal\njugular veins are located superior and lateral to the\nposition of the thymus gland. A midline tumor is\nmore likely to cause compression of the left brachiocephalic vein, which crosses the midline, than the\nright brachiocephalic vein, which is not located in the\nmidline.",
    },
    {
      q: "A 25-year-old man is admitted to the emergency\ndepartment with a bullet wound in the neck just\nabove the middle of the right clavicle and first rib.\nRadiologic examination reveals collapse of the right\nlung and a tension pneumothorax. Injury to which of\nthe following respiratory structures resulted in the\npneumothorax?",
      a: [
        "Costal pleura",
        "Cupula",
        "Right mainstem bronchus",
        "Right upper lobe bronchus",
        "Mediastinal parietal pleura",
      ],
      correct: 1,
      explanation:
        "The parietal pleura can be divided regionally\ninto costal, diaphragmatic, mediastinal, and cervical\nportions, depending upon local topographic relations.\nAnother name for the cervical pleura is the cupula.\nThis forms the dome of the pleura, projecting into the\nneck above the first rib and corresponding to the area\nof injury. The costal pleura lines the internal surfaces\nof the ribs and intercostal spaces. The mediastinal\npleura lies between the lungs and the organs in the\nmediastinum. The right primary bronchus and upper\nlobe bronchus are not in the vicinity of the right\nclavicle or first rib.",
    },
    {
      q: "A 51-year-old woman with a history of brain\ntumor and associated severe oropharyngeal dysphagia\ndevelops right lower lobe pneumonia after an episode\nof vomiting. Which of the following is the best reason\nthat this type of aspiration pneumonia most commonly\naffects the right lower lung lobe?",
      a: [
        "Pulmonary vascular resistance is higher in\n\nthe right lung than the left lung",
        "The right main bronchus is straighter than\n\nthe left main bronchus",
        "The right main bronchus is narrower than the\n\nmain bronchus",
        "The right main bronchus is longer than the\n\nleft main bronchus",
        "The right lower lung lobe has poorer venous\n\ndrainage than the other lobes",
      ],
      correct: 1,
      explanation:
        "The right primary bronchus is shorter, wider,\nand more vertical than the left main bronchus. When\na foreign body is aspirated, it is more likely to enter\nthe right main bronchus (although in some cases the\nforeign body enters the left bronchus). Pulmonary\nvascular resistance is not related to the question. The\nright lower lung lobe does not have poorer venous\ndrainage than the other lobes.",
    },
    {
      q: "A 41-year-old man is admitted to the emergency\ndepartment with complaints of shortness of breath,\ndizziness, and sharp chest pain. The large arrow in his\nchest radiograph indicates the region of pathology (Fig.\n2-1). What is this structure?",
      a: [
        "Superior vena cava",
        "Right ventricle",
        "Left ventricle",
        "Arch of the aorta",
        "Pulmonary artery",
      ],
      correct: 3,
      img: "Fig.\n2-1",
      explanation:
        "The normal position of the heart as seen in\na plain radiograph has the right border of the heart\nformed by the superior vena cava, right atrium, and\ninferior vena cava. The left border is formed by the\naortic arch superiorly, left pulmonary artery, left\nauricle, left ventricle, and the apex of the heart inferolaterally. The area indicated by the arrow is just inferior to the clavicle (on the left side), and this marks\nthe location of the arch of the aorta. The superior vena\ncava and right ventricle would make up the right\nborder. The pulmonary artery and left ventricle would\nbe more inferior.",
    },
    {
      q: "A 42-year-old woman is seen by her family physi\ncian because she has a painful lump in her right breast\nand a bloody discharge from her right nipple. Upon\nphysical examination it is noted that there is unilateral\n\nFig. 2-1 \n\ninversion of the right nipple and a hard, woody texture\nof the skin over a mass of tissue in the right upper\nquadrant of the breast. Which of the following condi\ntions is most frequently characterized by these\nsymptoms?",
      a: [
        "Peau d’orange",
        "Cancer en cuirasse",
        "Intraductal cancerous tumor",
        "Obstruction of the lymphatics draining the\n\nskin of the breast, with edema of the skin",
        "Inflammation of the epithelial lining of the\n\nnipple and underlying hypodermis",
      ],
      correct: 1,
      img: "Fig. 2-1",
      explanation:
        "All of the symptoms described in the question are indicative of breast cancer. The best choice\nof answers is cancer en cuirasse, a pathologic condition that presents as a hard, “woodlike” texture. Intraductal cancerous tumor is often a mild form of cancer\ndetected by mammography. A, D, and E are all symptoms, not pathologic conditions.",
    },
    {
      q: "A 25-year-old woman is admitted to the hospital\nafter an automobile crash. Radiologic examination\nreveals four broken ribs in the left thoracic wall, pro\nducing a flail chest observable on physical examina\ntion. Which of the following conditions is most likely\nto also be observed during physical examination?",
      a: [
        "During deep inspiration the flail segment\n\nmoves in the opposite direction of the chest\nwall",
        "During deep inspiration the flail segment\n\nmoves in the same direction as the chest wall",
        "“Pump handle movements” of the ribs will\n\nnot be affected by the rib fractures",
        "The descent of the diaphragm will be affected\n\non the side of the broken ribs",
        "The descent of the diaphragm will be affected\n\non the side of the broken ribs and also on the\nopposite side",
      ],
      correct: 0,
      explanation:
        "When multiple rib fractures produce a flail\nsegment of the thoracic wall, paradoxical motion of\nthe flail segment is commonly experienced upon deep\ninspiration; that is, the flail area is sucked in rather\nthan expanding outward with inspiration, and the\nreverse movement occurs in expiration. Because the\nribs are fractured, they will not be able to facilitate\nthe normal “pump handle” motion during inspiration.\n\nThe excursions of the diaphragm will not be affected\nby the broken ribs, except as pain restricts the breathing effort of the patient.",
    },
    {
      q: "A 33-year-old man is admitted to the hospital\nwith severe traumatic injuries. His blood pressure is\n89/39 mm Hg, and a central venous line is placed.\nWhich of the following injuries is most likely to occur\nwhen a subclavian central venous line procedure is\nperformed?",
      a: [
        "Penetration of the subclavian artery",
        "Injury of the phrenic nerve",
        "Penetration of the superior vena cava",
        "Penetration of the left common carotid artery",
        "Impalement of the vagus nerve",
      ],
      correct: 0,
      explanation:
        "The subclavian artery lies directly posterior\nto the subclavian vein; therefore, it is the structure\nthat would be most vulnerable to damage when\nplacing a central venous line in the subclavian vein.\nBoth the phrenic and vagus nerves will be medial to\nthe placement of the line and are not likely to be\ndamaged. The common carotid artery is also too\nmedial to be damaged by the line. The superior vena\ncava lies medial and inferior to the site of placement\nand is too deep to be easily damaged.",
    },
    {
      q: "A 39-year-old man is admitted to the hospital with\nodynophagia. A barium swallow reveals an esophageal\nconstriction at the level of the diaphragm. A CT scan\nand a biopsy further indicate the presence of an esoph\nageal cancer. Which of the following lymph nodes will\nmost likely be affected first?",
      a: [
        "Posterior mediastinal and left gastric",
        "Bronchopulmonary",
        "Tracheobronchial",
        "Inferior tracheobronchial",
        "Superior tracheobronchial",
      ],
      correct: 0,
      explanation:
        "Lymph from the lower third of the esophagus drains into the posterior mediastinal and left\ngastric lymph nodes. The middle third of the esophagus drains into posterior and superior mediastinal\nlymph nodes. The upper third of the esophagus drains\ninto the deep cervical nodes.",
    },
    {
      q: "A 42-year-old man is admitted to the hospital with\nretrosternal pain. Endoscopy and biopsy examinations\nof the trachea reveal a malignant growth at the right\nmain bronchus. Which of the following lymph nodes\nwill most likely be the first infiltrated by cancerous cells\nfrom the malignancy?",
      a: [
        "Inferior tracheobronchial",
        "Paratracheal",
        "Bronchomediastinal trunk",
        "Bronchopulmonary",
        "Thoracic duct",
      ],
      correct: 0,
      explanation:
        "Lymph from the right primary bronchus\nwould drain first into the inferior tracheobronchial\nnodes. The bronchomediastinal trunk and the thoracic duct are not lymph nodes. The paratracheal\nnodes receive lymph from the superior tracheobronchial nodes. The superior tracheobronchial nodes\nreceive lymph from the inferior tracheobronchial\nnodes.",
    },
    {
      q: "A 60-year-old man is admitted to the hospital with\nsevere abdominal pain. A CT scan reveals a dissecting\naneurysm of the thoracic aorta. While in the hospital,\nthe patient’s aneurysm ruptures and he is transferred\nurgently to the operating theater. Postoperatively, the\npatient suffers from paraplegia. Which of the following\narteries was most likely injured during the operation to\nresult in the paralysis?",
      a: [
        "Right coronary artery",
        "Left common carotid",
        "Right subclavian",
        "Great radicular (of Adamkiewicz)",
        "Esophageal",
      ],
      correct: 3,
      explanation:
        "The artery of Adamkiewicz (great radicular\nartery) is an important artery that provides oxygenated blood to the lower portion of the spinal cord,\nspecifically the anterior cord where lower motor\nneurons are located, inferior to the vertebral level of\norigin of the artery, and provides collateral anastomoses with the anterior spinal artery. Care should be\ntaken during surgery to prevent damage to this artery\nas this can lead to paraplegia and alteration of functions of pelvic organs.",
    },
    {
      q: "A 47-year-old woman is admitted to the hospital\nwith pain in her neck. During physical examination it\nis observed that the thyroid gland is enlarged and is\ndisplacing the trachea. A biopsy reveals a benign\ntumor. A CT scan examination reveals tracheal devia\ntion to the left. Which of the following structures\nwill most likely be compressed as a result of the\ndeviation?",
      a: [
        "Left brachiocephalic vein",
        "Left internal jugular vein",
        "Left subclavian artery",
        "Vagus nerve",
        "Phrenic nerve",
      ],
      correct: 0,
      explanation:
        "A left tracheal deviation with an enlarged\nthyroid gland will most likely compress the left brachiocephalic vein.",
    },
    {
      q: "A 33-year-old man is admitted to the hospital after\na multiple car collision. His blood pressure is 89/39 mm\nHg, and a central venous line is placed. Which of the\nfollowing structures is used as a landmark to verify that\nthe the tip of the catheter of the central venous line is\nin the correct place?",
      a: [
        "Carina",
        "Subclavian artery",
        "Superior vena cava",
        "Left atrium",
        "Right atrium",
      ],
      correct: 0,
      explanation:
        "The carina is the only answer listed that can\neasily be seen in radiograph. The carina is at the level\nof T4 to T5 (plane associated with the sternal angle\nof Louis). This landmark is commonly used to guide\nthe placement of a central venous line.",
    },
    {
      q: "A 42-year-old man is diagnosed with liver and\npancreatic disease as a result of alcoholism. During\nphysical examination it is noted that he has abnormal\nenlargement of his mammary glands, as a secondary\nresult of his disease process. Which of the following\nclinical conditions will most likely describe this case?",
      a: [
        "Polythelia",
        "Supernumerary breast",
        "Polymastia",
        "Gynecomastia",
        "Amastia",
      ],
      correct: 3,
      explanation:
        "Gynecomastia is the abnormal growth of\nmammary glands in males. Polythelia refers to supernumerary, or extra, nipples. Polymastia refers to\nsupernumerary breasts. Amastia refers to the absence\nof breasts.",
    },
    {
      q: "A 21-year-old woman gymnast is admitted to the\nhospital with severe dyspnea after a fall from the\nuneven parallel bars. Radiologic examination reveals\nthat her right lung is collapsed and the left lung is\ncompressed by the great volume of air in her right\npleural cavity. During physical examination she has no\nsigns of external injuries. Which of the following condi\ntions will most likely describe this case?",
      a: [
        "Flail chest with paradoxical respiration",
        "Emphysema",
        "Hemothorax",
        "Chylothorax",
        "Tension pneumothorax",
      ],
      correct: 4,
      explanation:
        "A tension pneumothorax is caused by injury\nto the lung, leading to air in the pleural cavity. The\nsite of the wound acts as a one-way valve, allowing\nair to enter the pleural cavity but not to leave the\ncavity. The lack of negative pressure in the pleural\ncavity causes the lung to collapse. Neither flail chest,\nemphysema, nor hemothorax will necessarily lead to\nthe increased volume of air in the pleural cavity. The\ntension pneumothorax occurred during a violent fall;\ntherefore, the clinical condition is not likely to be a\nspontaneous pneumothorax, in which case there is\nrupture of the pleura without the necessary occurrence of trauma.",
    },
    {
      q: "A 34-year-old man unconscious patient is admit\nted to the hospital. His blood pressure is 85/45 mm Hg.\nA central venous line is placed. During subsequent\nradiologic examination, a chylothorax is detected.\nWhich of the following structures was most likely acci\ndentally damaged during the placement of the central\nvenous line?",
      a: [
        "Left external jugular vein",
        "Site of origin of the left brachiocephalic vein",
        "Right subclavian vein",
        "Proximal part of right brachiocephalic vein",
        "Right external jugular vein",
      ],
      correct: 1,
      explanation:
        "Chylothorax is usually caused by injury to\nthe thoracic duct. The thoracic duct enters the venous\nsystem at the junction of the left internal jugular vein\nand the left subclavian vein, where they form the left\nbrachiocephalic vein. Penetrating injuries at the beginning of the left brachiocephalic vein commonly also\ndisrupt the termination of the thoracic duct.",
    },
    {
      q: "A 28-year-old woman in the third trimester of\npregnancy has experienced severe dizziness for several\ndays and is admitted to the hospital. During physical\nexamination her blood pressure is normal when stand\ning or sitting. When the patient is supine, her blood\npressure drops to 90/50 mm Hg. What is the most\nlikely explanation for these findings?",
      a: [
        "Compression of the inferior vena cava",
        "Compression of the superior vena cava",
        "Compression of the aorta",
        "Compression of the common carotid artery",
        "Compression of the internal jugular veins",
      ],
      correct: 0,
      explanation:
        "The inferior vena cava quite likely undergoes compression by the growing fetus when the\nmother is in the supine position. In this case the\ncompression led to reduced blood flow through\nthe heart, with a resultant drop in blood pressure.",
    },
    {
      q: "A 17-year-old girl is admitted to the hospital with\ndyspnea and fever. Radiologic examination reveals\nlobar pneumonia in one of the lobes of her right lung.\nDuring auscultation at the level of the sixth intercostal\nspace at the midaxillary line, rales (or crackles) are\nheard and dull sounds are produced during percussion.\nWhich of the following lobes is most likely to be\ninvolved by pneumonia?",
      a: [
        "Upper lobe of the right lung",
        "Middle lobe of the right lung",
        "Lower lobe of the right lung",
        "Lower lobes of the right and left lungs",
        "Upper lobes of the right and left lungs",
      ],
      correct: 2,
      explanation:
        "Crackling noises in the lungs due to the\nbuildup of fluid are referred to as rales. The fluid\nusually migrates to the inferior portion of the lung\ndue to the effects of gravity. Auscultation over the\nsixth intercostal space at the midaxillary line would\nbe associated with the lower lobe of the right lung.\n\nRemember that the oblique fissure runs from the level\nof T2 posteriorly to the sixth costal cartilage anteriorly. At the sixth intercostal space in the midaxillary\nline, one would be percussing below this fissure and\ntherefore over the lower lobe. This question does not\nindicate any examination of the left lung.",
    },
    {
      q: "A 35-year-old man is admitted to the hospital with\nsevere chest pain, dyspnea, tachycardia, cough, and\nfever. Radiologic examination reveals significant peri\ncardial effusion. When pericardiocentesis is performed,\nthe needle is inserted up from the infrasternal angle.\nThe needle passes too deeply, piercing the visceral\npericardium and entering the heart. Which of the\n\nfollowing chambers would be the first to be penetrated\nby the needle?",
      a: [
        "Right ventricle",
        "Left ventricle",
        "Right atrium",
        "Left atrium",
        "The left cardiac apex",
      ],
      correct: 0,
      explanation:
        "Pericardiocentesis is usually performed\nthrough the infrasternal angle with the needle passing\nup through the diaphragm to the fibrous pericardium.\nThe diaphragmatic surface of the heart is largely composed of the right ventricle and would therefore be\nentered if a needle is inserted too far. The other chambers of the heart would not lie in the direct path of\nthe needle.",
    },
    {
      q: "A 45-year-old man is admitted to the hospital with\nsevere chest pain radiating to his left arm and left upper\njaw. An emergency ECG reveals an acute myocardial\ninfarction of the posterior left ventricular wall. Which\nof the following spinal cord segments would most likely\nreceive the sensations of pain in this case?",
      a: ["T1, T2, T3", "T1, T2, T3, T4", "T1, T2", "T4, T5, T6", "T5, T6, T7"],
      correct: 1,
      explanation:
        "The pain experienced by the patient travels\nwith the sympathetic innervation of the heart, derived\nfrom spinal nerve levels T1 to T4. The pain fibers\nleave the heart and the cardiac plexuses via the cardiopulmonary nerves. Subsequently, the pain fibers\npass through the sympathetic chain, enter the spinal\nnerve, and pass into the dorsal roots of the spinal\nnerves. The cell bodies of the pain fibers are located\nin the dorsal root ganglia of the spinal nerves from\nT1 to T4. The other levels indicated do not correspond\nto the typical pattern of innervation of this region\n(GAS Fig. 3-77).",
    },
    {
      q: "A 55-year-old woman is admitted to the hospital\nwith cough and severe dyspnea. Radiologic examina\ntion reveals that the patient suffers from emphysema.\nUpon physical examination the patient shows only\n“bucket handle movements” during deep inspiration.\nWhich of the following movements of the thoracic wall\nis characteristic for this type of breathing?",
      a: [
        "Increase of the transverse diameter of the\n\nthorax",
        "Increase of the anteroposterior diameter of\n\nthe thorax",
        "Increase of the vertical dimension of the\n\nthorax",
        "Decrease of the anteroposterior diameter of\n\nthe thorax",
        "Decrease of the transverse diameter of the\n\nthorax",
      ],
      correct: 0,
      explanation:
        "The “bucket handle movement” of the ribs\naffects the transverse diameter of the thorax. Inspiration would increase the transverse diameter, whereas\nexpiration decreases the transverse diameter. The\nanteroposterior diameter of the thorax is increased\nand decreased by the “pump handle movements” of\nthe ribs and sternum. Vertical dimensions of the\nthorax would be changed by contraction and relaxation of the diaphragm (GAS Fig. 3-34).",
    },
    {
      q: "A 15-year-old male is admitted to the hospital\nwith cough and severe dyspnea. Physical examination\nreveals expiratory wheezes, and a diagnosis is made of\nacute asthma. The expiratory wheezes are characteris\ntic signs of bronchospasm of the smooth muscle of the\nbronchial airways. Which of the following nerves could\nbe blocked to result in relaxation of the smooth muscle?",
      a: [
        "Phrenic",
        "Intercostal",
        "Vagus",
        "T1 to T4 sympathetic fibers",
        "Recurrent laryngeal nerve",
      ],
      correct: 2,
      explanation:
        "Bronchial constriction is induced by the\nparasympathetic innervation of the airways. This is\nsupplied by the vagus nerves, which could be blocked\nto result in relaxation of the airways. The phrenic\nnerve provides motor and sensory innervation to the\ndiaphragm. The intercostal nerves provide sensory\nand somatic motor innervation to their respective\nintercostal spaces. Stimulation of sympathetic innervation results in bronchodilation. The recurrent laryngeal nerve is a branch of the vagus and innervates\nparts of the larynx.",
    },
    {
      q: "A 34-year-old man with a complaint of sharp,\nlocalized pain over the thoracic wall is diagnosed with\npleural effusion. A chest tube is inserted to drain the\neffusion through an intercostal space. At which of the\nfollowing locations is the chest tube most likely to be\ninserted?",
      a: [
        "Superior to the upper border of the rib",
        "Inferior to the lower border of the rib",
        "At the middle of the intercostal space",
        "Between the internal and external intercostal\n\nmuscles",
        "Between the intercostal muscles and the\n\nposterior intercostal membrane",
      ],
      correct: 0,
      explanation:
        "The location where one is least likely to\ndamage important structures by making an incision\nor pushing a chest tube into the thorax is over the\nupper border of the rib. At the inferior border of each\nrib, one will encounter intercostal vein, artery, and\nnerve, in that order (VAN structures). Entrance\nthrough the middle of the intercostal space does not\neliminate the heightened possibility of piercing important structures. Neither passage between the internal\nand external intercostal muscles, nor between the\nintercostal muscles and the posterior intercostal membrane, would allow entry to the pleural cavity.",
    },
    {
      q: "A 42-year-old woman is admitted to the emer\ngency department after a fall from the balcony of her\napartment. During physical examination there is an\nabsence of heart sounds, reduced systolic pressure,\nreduced cardiac output, and engorged jugular veins.\nWhich condition is most likely characterized by these\nsigns?",
      a: [
        "Hemothorax",
        "Cardiac tamponade",
        "Hemopneumothorax",
        "Pneumothorax",
        "Deep vein thrombosis",
      ],
      correct: 1,
      explanation:
        "Cardiac tamponade is a condition in which\nfluid accumulates in the pericardial cavity. It can\nresult from pericardial effusion or from leakage of\nblood from the heart or proximal portions of the great\nvessels. The increased pressure within the pericardial\nsac leads to decreased cardiac filling during diastole\nand therefore reduced systolic blood pressure. Because\nof the reduced pumping capacity of the heart, there\nis increased pressure in the venous system, leading to\nthe distension of the jugular venous system. Deep\nvein thrombosis often occurs in the lower limbs and\nincreases the risk of pulmonary embolism. The other\nanswers listed are conditions that affect pulmonary\nfunction rather than cardiac functions.",
    },
    {
      q: "A 35-year-old woman is admitted to the hospital\nwith a complaint of shortness of breath. During physi\ncal examination it is noted that there is wide splitting\nin her S2 heart sound. Which of the following valve(s)\nis/are responsible for production of the S2 heart sound?",
      a: [
        "Mitral valve",
        "Pulmonary and aortic",
        "Aortic and mitral",
        "Tricuspid",
        "Tricuspid and aortic",
      ],
      correct: 1,
      explanation:
        "The S2 heart sound refers to the second\n(dub) heart sound. This sound is produced by the\nclosure of the aortic and pulmonary semilunar valves.\nThe closure of mitral/bicuspid and tricuspid valves\nproduce the first S1 (lub) heart sound.",
    },
    {
      q: "A 35-year-old woman is admitted to the hospital\nwith dyspnea. During physical examination her S1 heart\nsound is very loud. Which of the following valve(s) is/\nare responsible for production of the S1 heart sound?",
      a: [
        "Mitral valve",
        "Pulmonary and aortic",
        "Aortic and mitral",
        "Tricuspid",
        "Tricuspid and mitral",
      ],
      correct: 4,
      explanation:
        "The closure of the mitral/bicuspid and tricuspid valves produces the first S1 (lub) heart sound.\nThe S2 heart sound refers to the second (dub) heart\nsound. This latter sound is produced by the closure\nof the aortic and pulmonary semilunar valves.",
    },
    {
      q: "A 57-year-old man is admitted to the emergency\ndepartment after he was struck by a truck while cross\ning a busy street. Radiologic examination reveals flail\n\nchest. During physical examination, the patient com\nplains of severe pain during inspiration and expiration.\nWhich of the following nerves is most likely responsi\nble for the sensation of pain during respiration?",
      a: [
        "Phrenic",
        "Vagus",
        "Cardiopulmonary",
        "Intercostal",
        "Thoracic splanchnic",
      ],
      correct: 3,
      explanation:
        "Flail chest is characterized by paradoxical\nbreathing movements caused by multiple rib fractures. The sensory innervation provided to intercostal\nspaces and to the underlying parietal pleura is supplied via the corresponding intercostal nerves. The\nphrenic nerve provides motor innervation to the diaphragm and sensory innervation to the diaphragmatic\nand mediastinal parietal pleura and pericardium. The\nvagus nerves provide parasympathetic innervation to\nthe thoracic viscera, and to the gastrointestinal tract\n\nas distal as the left colic flexure. The cardiopulmonary\nnerves carry sympathetic innervation from T1 to T4\nlevels to the thoracic organs, and pain fibers from\nthese organs. Thoracic splanchnic nerves carry sympathetic innervation to the abdomen.",
    },
    {
      q: "A 62-year-old woman is admitted to the hospital\nwith severe dyspnea and also complains of pain over\nher left shoulder. A radiologic examination reveals an\naneurysm of the aortic arch. Which of the following\nnerves is most likely affected by the aneurysm?",
      a: [
        "Phrenic",
        "Vagus",
        "Cardiopulmonary",
        "Intercostal",
        "Thoracic splanchnic",
      ],
      correct: 0,
      explanation:
        "An aneurysm of the aortic arch could\nimpinge upon the phrenic nerve, causing referral of\npain to the left shoulder. This referral occurs because\nthe root levels of the phrenic nerve are C3 to C5, nerve\nlevels that are also distributed to the skin over the\nshoulder region. The other choices do not cause\nLeft vagus nerve\nRight vagus nerve\nVagal cardiac branches\nVagal cardiac branches\nCardiac nerves from\nsympathetic trunk\nSuperior vena cava\nArch of aorta\nSuperficial cardiac plexus\nPulmonary trunk\nLeft recurrent laryngeal nerve\nRight recurrent laryngeal nerve\nLeft vagus nerve\nRight vagus nerve\nCardiac nerves from sympathetic trunk\nDeep cardiac plexus\nVagal cardiac branches\nVagal cardiac branches\nA\nB\n\nreferral of pain to the left shoulder. The vagus nerve\ndoes not transmit pain sensations except from certain\norgans in the abdomen and pelvis. The intercostal\nnerves carry sensory information from the intercostal\nspaces and parietal pleura, pain that would not be\nreferred to the shoulder. The thoracic splanchnics\ncarry sympathetic innervation to the abdomen.",
    },
    {
      q: "A 62-year-old woman accountant is admitted to\nthe emergency department with severe chest pains that\nradiate to her left arm. ECG reveals that the patient\nsuffers from an acute myocardial infarction. Coronary\nangiography is performed and a stent is placed at the\nproximal portion of the anterior interventricular artery\n(left anterior descending). Because of the low ejection\nfraction of the right and left ventricles, a cardiac pace\nmaker is also placed in the heart. The function of which\nof the following structures is essentially replaced by the\ninsertion of a pacemaker?",
      a: [
        "AV node",
        "SA node",
        "Purkinje fibers",
        "Bundle of His",
        "Bundle of Kent",
      ],
      correct: 1,
      explanation:
        "The SA node functions as the primary intrinsic pacemaker of the heart, setting the cardiac rhythm.\nAn artificial pacemaker assists in producing a normal\nrhythm when the SA node is not functioning normally. The atrioventricular node receives the depolarization signals from the SA node. The signal is delayed\nwithin the atrioventricular node (providing the time\nfor the atria to contract), then propagated from the\natrioventricular node through the bundle of His and\nPurkinje fibers.",
    },
    {
      q: "A 22-year-old marathon runner is admitted to the\nemergency department with severe dyspnea. Physical\nexamination reveals that the patient is experiencing an\nacute asthma attack, and a bronchodilating drug is\nadministered. Which of the following elements of the\nnervous system must be inhibited by the drug to achieve\nrelaxation of the smooth muscle of the tracheobron\nchial tree?",
      a: [
        "Postganglionic sympathetic fibers",
        "Preganglionic sympathetic fibers",
        "Postganglionic parasympathetic fibers",
        "Visceral afferent fibers",
        "Somatic efferent fibers",
      ],
      correct: 2,
      explanation:
        "Postganglionic parasympathetic fibers are\ninvolved in the constriction of smooth muscle in the\ntracheoesophageal tree. Sympathetic fibers cause dilation of this structure. Visceral and somatic afferents\nare sensory fibers and therefore cannot cause dilation\nof muscle, as this is a motor nerve function.",
    },
    {
      q: "Radiologic examination of a 3-day-old infant who\nwas cyanotic gives evidence of abnormalities within the\nheart. Blood tests reveal abnormally high levels of\nTGF-β factor Nodal. Which of the following conditions\nis most likely to be associated with these findings?",
      a: [
        "Dextrocardia",
        "Ectopia cordis",
        "Transposition of the great arteries",
        "Unequal division of the truncus arteriosus",
        "Coarctation of the aorta",
      ],
      correct: 0,
      explanation:
        "Dextrocardia is a condition that results from\na bending of the heart tube to the left instead of to\nthe right. TGF-β factor Nodal plays a role in the\nlooping of the heart during the embryonic period.",
    },
    {
      q: "A 35-year-old woman who was brought into the\nemergency department for a drug overdose requires\ninsertion of a nasogastric tube and administration of\nactivated charcoal. What are the three sites in the\nesophagus where one should anticipate resistance due\nto compression on the organ?",
      a: [
        "At the aortic arch, the cricopharyngeal\n\nconstriction, and the diaphragmatic\nconstriction",
        "The cardiac constriction, the cricoid cartilage\n\nconstriction, and the thoracic duct",
        "The pulmonary constriction, cricothyroid\n\nconstriction, and the azygos vein arch",
        "The cardiac constriction, the azygos vein\n\narch, and the pulmonary trunk",
        "The cricopharyngeal constriction, cricothyroid\n\nconstriction, and thymus gland",
      ],
      correct: 0,
      explanation:
        "The esophagus typically has four constrictions. In the thorax the esophagus is compressed by\n(1) the arch of the aorta, (2) the left principal bronchus, and (3) the diaphragm. The cricopharyngeal\nconstriction is in the neck.",
    },
    {
      q: "A 29-year-old patient complains of severe pain\nradiating across her back and chest. Upon clinical\nexamination you observe a rash characteristic of herpes\nzoster infection passing from her upper left back and\n\nFig. 2-2 \n\nacross her left nipple. Which of the following spinal\nnerve roots sheds the active virus?",
      a: [
        "Dorsal root of T3",
        "Ventral root of T3",
        "Dorsal root of T4",
        "Ventral root of T4",
        "Dorsal root of T5",
      ],
      correct: 2,
      img: "Fig. 2-2",
      explanation:
        "The dermatome that encompasses the\nnipple is supplied by spinal nerve T4. In this case the\nherpes zoster virus is harbored in the dorsal root\nganglion of T4 and can be activated to cause the\ncharacteristic rash that is distributed along the dermatome including the nipple.",
    },
    {
      q: "A 3-year-old man who fell from a tree complains\nof severe pain over the right side of his chest because\nof a rib fracture at the midaxillary line. He is admitted\nto the hospital due to his difficulty breathing. Radio\nlogic and physical examinations reveal atelectasis,\nresulting from the accumulation of blood in his pleural\nspace and resulting hemothorax. What is the most\nlikely the source of bleeding to cause the hemothorax?",
      a: [
        "Left common carotid artery",
        "Intercostal vessels",
        "Pulmonary arteries",
        "Pulmonary veins",
        "Internal thoracic artery",
      ],
      correct: 1,
      explanation:
        "Due to rib fracture, the intercostal vessels\nare damaged, parietal pleura is torn, and blood flows\ninto the pleural space. The loss of negative pressure\nwithin the pleural cavity results in collapse of the\nlung. The carotid vessels would not be affected by the\ndescribed injury. The pulmonary vessels are found\nwithin the parenchyma of the lungs and would not\nbe injured due to an external injury such as that\ndescribed. The internal thoracic artery is well protected by the sternum and is not the cause of this\nhemothorax.\nGAS Fig. 3-34\nBucket\nhandle\nmovement\nElevation of lateral\nshaft of rib\nSuperior and anterior\nmovement of sternum\nB\nA\nPump\nhandle",
    },
    {
      q: "A 45-year-old woman is admitted to the hospital\nwith severe dyspnea. Radiologic examination confirms\nthe presence of a Pancoast tumor (Fig. 2-2). Physical\nexamination reveals that the patient has miosis of the\npupil, partial ptosis of the eyelid, and anhydrosis of the\nface. Which of the following structures has most likely\nbeen injured?",
      a: [
        "Sympathetic chain",
        "Vagus nerve",
        "Phrenic nerve\n\nL\n\nFig. 2-3",
        "Arch of aorta",
        "Cardiopulmonary plexus",
      ],
      correct: 0,
      img: "Fig. 2-2",
      explanation:
        "Miosis, partial ptosis, and anhydrosis are a\nclinically important constellation of symptoms possibly indicating Horner’s syndrome. Horner’s syndrome\nis a lesion of the cervical sympathetic chain and sympathetic chain ganglia and is often a result of a Pancoast tumor, also known as a superior pulmonary\nsulcus tumor of the apex of the lung. The pupil, eyelid\n(superior tarsal muscle), and sweat glands are all\nunder sympathetic nervous system control. The arch\nof the aorta and phrenic nerve are not part of the\nautonomic nervous system. The vagus nerve does\ncarry parasympathetic fibers to muscles of the trachea,\nbronchi, digestive tract, and heart but not to any\nstructure in the head and neck (laryngeal supply, and\nVon Ebner’s glands in the tongue). A lesion to the\nphrenic nerve would result in paralysis of the diaphragm. The cardiopulmonary nerves are splanchnic\nnerves that are postganglionic and sympathetic. They\noriginate in cervical and upper thoracic ganglia and\ninnervate the thoracic cavity. The cardiopulmonary\nplexus is the autonomic supply to the heart.",
    },
    {
      q: "A 35-year-old male bartender is admitted to the\nhospital due to severe dysphagia. A CT scan (Fig. 2-3)\nreveals carcinoma of the middle segment of the esopha\ngus. Which of the following structures will most likely\nbe affected if the carcinoma increases greatly in size?",
      a: [
        "Inferior vena cava",
        "Left atrium",
        "Pulmonary artery",
        "Left ventricle",
        "Vertebral body",
      ],
      correct: 1,
      img: "Fig. 2-3",
      explanation:
        "The esophagus lies posterior to the heart. Of\nthe four chambers in the heart, the left atrium lies\nmost posteriorly, just anterior to the esophagus when\nthe heart is in its normal position in the mediastinum.\nThe inferior vena cava runs on the right side within\nthe thoracic cavity and empties its contents into the\nright atrium. The pulmonary arteries are too anterior\nto the esophagus to be affected by an esophageal\ntumor. The left ventricle is too anterior within the\nmediastinum to be affected by an esophageal tumor.\nWhereas the esophagus does lie against the vertebral\nbodies, a growing tumor would affect the esophagus\nfirst because it is a smooth muscle structure and\ntherefore the path of least resistance, but this organ\ncan be deviated relatively easily rather than\ncompressed.",
    },
    {
      q: "A 62-year-old male internist is admitted to the\nemergency department with a complaint of severe chest\npain. Physical examination reveals acute myocardial\ninfarction. After the patient is stabilized, angiography\nis performed and the ejection fraction of the left ven\ntricle is reduced to 30% of normal values. A cardiac\npacemaker is placed to prevent fatal arrhythmias\n(Fig. 2-4). What is the location of the tip of the\npacemaker?",
      a: [
        "Right atrium",
        "Left atrium",
        "Right ventricle",
        "Left ventricle",
        "Superior vena cava",
      ],
      correct: 2,
      img: "Fig. 2-4",
      explanation:
        "Artificial pacemakers are commonly used to\ntreat patients who have weak or failing heart conduction systems. The electrode or “tip” of the pacemaker\nis threaded through the subclavian vein to the superior vena cava into the right atrium and then the right\nventricle where it is used to stimulate the Purkinje\nfibers to result in ventricular contraction. The right\natrium and left atrium do not contain Purkinje fibers\nand would therefore not be useful in artificially pacing\nthe heart. The left ventricle is more difficult to access.\nThe superior vena cava is not related to cardiac\npacing.",
    },
    {
      q: "Postoperative examination of a 68-year-old man\nwho underwent mitral valve replacement demonstrates\n\nFig. 2-4 \n\nFig. 2-5 \n\nsignificant cardiac hypertrophy (Fig. 2-5). Which of the\nfollowing structures would be most likely compressed?",
      a: [
        "Esophagus",
        "Pulmonary trunk",
        "Superior vena cava",
        "Trachea",
        "Inferior vena cava\n\nFig. 2-6",
      ],
      correct: 0,
      img: "Fig. 2-4",
      explanation:
        "Cardiac hypertrophy is a compensatory\nmechanism of the myocardium in response to increasing demands on the heart due to ischemia, incompetent valves, or hypertension. The increased size of the\nheart muscle would most likely compress the esophagus, and due to the incompetent mitral valve, a backflow of blood into the left atrium can cause a left atrial\ndilation. The left atrium lies just anteriorly to the\nesophagus in the mediastinum. The pulmonary trunk\nis located superiorly and delivers blood to the lungs,\nso cardiac hypertrophy would not cause direct compression to this structure. The superior vena cava and\ninferior vena cava are vessels that deliver blood to the\nright atrium and are not likely to be compressed in\nthis example of cardiac hypertrophy. The heart is\ninferior to the trachea.",
    },
    {
      q: "A 29-year-old man is admitted to the hospital with\ngreat difficulty breathing after an automobile accident.\nRadiologic examination (Fig. 2-6) reveals no fractured\nbones or mediastinal shift. During physical examina\ntion he has no signs of external injuries, but the dyspnea\nbecomes progressively worse. Which of the following\nconditions would best describe this case?",
      a: [
        "Flail chest with paradoxical respiration",
        "Emphysema",
        "Hemothorax",
        "Spontaneous pneumothorax",
        "Tension pneumothorax",
      ],
      correct: 4,
      img: "Fig. 2-6",
      explanation:
        "Tension pneumothorax is a progressive\naccumulation of air in the pleural cavity that is trapped\nduring inspiration. The resulting increase of pressure\ndiminishes the negative pressure required to maintain\nan inflated lung, resulting in a collapsed lung as seen\non the radiograph. A flail chest is a result of ribs being\nbroken in two or more locations, and no broken ribs\nare seen on this radiograph. Emphysema is a chronic\ncondition in which elastic tissues and alveoli in the\nlungs are destroyed, reducing the surface area for gas\nexchange. Emphysema may result in a secondary\nspontaneous pneumothorax. A hemothorax is an\naccumulation of blood in the pleural space. On a\nradiograph, it is identifiable by a meniscus of fluid.\nAlthough spontaneous pneumothorax would present\nthe same way on a radiograph, the patient’s history\nof trauma (car crash) indicates the patient does not\nhave a spontaneous pneumothorax.",
    },
    {
      q: "A 56-year-old male swimming coach is admitted\nto the hospital with dyspnea, cough, and high fever. A\nradiologic examination reveals lobar pneumonia (Fig.\n2-7). Which of the following lobes of the lung is affected\nas shown in the image?",
      a: [
        "Right upper",
        "Right middle",
        "Right lower",
        "Right upper, middle, and lower",
        "Right upper and lower",
      ],
      correct: 3,
      img: "Fig.\n2-7",
      explanation:
        "Upper, middle, and lower lobes are affected.\nThe right upper lobe extends from the apex of the\nlung (above the clavicle) to the fourth rib. The radiograph shows multiple opacities on the right side,\neliminating the possibility of it being a left lung pneumonia. Opacity in the right middle lobe extends inferiorly to the sixth rib. In the present case the opacity\nis inferior to the sixth rib extending to the tenth rib\nin the midaxillary line affecting the lower lobe of the\nright lung.",
    },
    {
      q: "Having fallen while jogging, a 62-year-old man is\nadmitted to the emergency department with severe\nchest pain. Physical examination reveals acute myo\ncardial infarction. After the patient is stabilized, angi\nography is performed and one of the major coronary\narteries is found to be occluded (Fig. 2-8). Which of\n\nFig. 2-7 \n\nFig. 2-8 \n\nthe following arteries is most obviously blocked by\natherosclerotic plaque or clot?",
      a: [
        "Right coronary",
        "Left anterior interventricular",
        "Posterior interventricular",
        "Diagonal",
        "Circumflex",
      ],
      correct: 3,
      img: "Fig. 2-8",
      explanation:
        "In many people the anterior interventricular\nbranch of the left coronary artery gives rise to a\nlateral diagonal branch that descends on the anterior\nsurface of the heart. This branch is occluded in the\n\nradiograph. The left coronary artery arises from the\nleft aortic sinus of the ascending aorta and passes\nbetween the left atrium and the left side of the pulmonary trunk in the coronary groove. The left coronary artery divides into two branches: an anterior\ninterventricular branch (also known as the left anterior descending branch; LAD) and a circumflex branch.\nThe LAD runs along the interventricular groove to the\napex of the heart. The right coronary artery arises\nfrom the right aortic sinus and runs in the coronary\ngroove. It usually gives off a SA nodal branch; it\ndescends in the coronary groove and gives off a right\nmarginal branch. At the crus of the heart, it gives off\nan AV nodal branch and a large posterior interventricular branch (in the “right dominant” pattern).",
    },
    {
      q: "A 47-year-old woman patient’s right breast\nexhibited peau d’orange characteristics. This condi\ntion is primarily a result of which of the following\noccurrences?",
      a: [
        "Blockage of cutaneous lymphatic vessels",
        "Shortening of the suspensory ligaments by\n\ncancer in the axillary tail of the breast",
        "Contraction of the retinacula cutis of the\n\nareola and nipple",
        "Invasion of the pectoralis major by metastatic\n\ncancer",
        "Ipsilateral (same side) inversion of the nipple\n\nfrom cancer of the duct system of the breast",
      ],
      correct: 0,
      explanation:
        "Blockage of cutaneous lymphatic vessels\nresults in edema of the skin surrounding the hair follicles, leading to an appearance like an orange peel\n(peau d’orange). Shortening of the suspensory ligaments leads to dimpling of the overlying skin, not\npeau d’orange. Contraction of retinacula cutis results\nin retraction and inversion of the nipple and/or areola.\nPectoralis major involvement has nothing to do with\nthis condition but can result in fixing the tumor firmly\nto the chest wall.",
    },
    {
      q: "A 27-year-old male billiards player received a\nsmall-caliber bullet wound to the chest in the region of\nthe third intercostal space, several centimeters to the\nleft of the sternum. The patient is admitted to the\nemergency department and a preliminary notation of\n“Beck’s triad” is entered on the patient’s chart. Which\nof the following are features of this triad?",
      a: [
        "There was injury to the left pulmonary artery,\n\nleft primary bronchus, and esophagus",
        "The patient has bleeding into the pleural\n\ncavity, a collapsed lung, and mediastinal shift\nto the right side of the thorax",
        "The patient has a small, quiet heart;\n\ndecreased pulse pressure; and increased\ncentral venous pressure",
        "The young man is suffering from marked\n\ndiastolic emptying, dyspnea, and dilation of\nthe aortic arch",
        "The left lung has collapsed, there is\n\nparadoxical respiration, and there is a\nmediastinal shift of the heart and trachea to\nthe left",
      ],
      correct: 2,
      explanation:
        "The patient is suffering from cardiac tamponade, that is, filling of the pericardial cavity with\nfluid. The classic signs of this tamponade are referred\nto as “Beck’s triad.” This trio, by definition, includes\na small heart from compression of the heart by the\nfluid-filled pericardial sac, and a quiet heart because\nthe tamponade muffles the cardiac sounds; decreased\npulse pressure resulting from the reduced difference\nbetween systolic and diastolic pressure because the\ntamponade restricts the ability of the heart to fill\nin diastole; and increased central venous pressure\nbecause venous blood cannot enter the compressed\nheart.",
    },
    {
      q: "A 34-year-old patient had been diagnosed earlier\nin the week with Guillain-Barré syndrome. He is now\nin extreme respiratory distress. His thoracic wall con\ntracts and relaxes violently, but there is little movement\nof the abdominal wall. The degenerative disease has\nobviously affected the muscle that is most responsible\nfor increasing the vertical dimensions of the thoracic\n\ncavity (and pleural cavities). Which of the following is\nthe most likely cause of his disease?",
      a: [
        "Paralysis of his intercostal muscles and loss\n\nof the “bucket handle movement” of his ribs",
        "Generalized intercostal nerve paralysis that\n\nresulted in loss of the “pump handle\nmovement” of his ribs",
        "Paralysis of his medial and lateral pectoral\n\nnerves, interrupting the function of his\npectoralis major muscles, an important\naccessory muscle of respiration",
        "Paralysis of his sternocleidomastoid muscles",
        "Degeneration of the myelin of his phrenic\n\nnerves",
      ],
      correct: 4,
      explanation:
        "Myelin degeneration of the phrenic nerves,\nas can occur in Guillain-Barré, results in loss of\nphrenic nerve function and paralysis of the diaphragm.\nDiaphragmatic paralysis is predictable with lack of\nmovement of the abdominal wall in respiratory efforts.\nThe ribs are moving “violently” in this case; therefore,\nintercostal muscles and the pectoral musculature have\nretained their motor supply.",
    },
    {
      q: "Two days after the patient’s breathing had become\nassisted by mechanical ventilation, a patient with Guil\nlain-Barré syndrome began experiencing severe cardiac\narrhythmia, with perilously slow cardiac contractions,\nresulting in reduced cardiac output. This most likely\nresulted from interruption of the contractile stimulus\ncarried by which of the following?",
      a: [
        "Left vagus nerve",
        "Right phrenic nerve",
        "Preganglionic sympathetic fibers in upper\n\nthoracic spinal nerves",
        "Cardiac pain fibers carried by upper thoracic\n\nspinal nerves",
        "Ventral horn neurons of spinal cord levels T1\n\nto T4",
      ],
      correct: 2,
      explanation:
        "The loss of myelin from the preganglionic\n(normally myelinated) sympathetic fibers in T1 to T4\nresults in interruption in their transmission of electrical stimulating impulses and, therefore, reduction of\npositive inotropic (force increasing) and chronotropic\n(rate increasing) stimulation of the heart. Reduction\nof function of the vagus nerves would not result in\nslowing cardiac activity; just the opposite would\noccur. Interruption of phrenic nerve activity has no\neffect on cardiac rate (as this nerve innervates the\ndiaphragm), nor would the interruption of the thinly\nmyelinated pain fibers from the heart. The ventral\nhorn neurons do not innervate the heart, but rather\nskeletal muscle; therefore, they would not be directly\naffected by the disease process affecting the heart.",
    },
    {
      q: "During transesophageal echocardiography (TEE),\nan ultrasound transducer is placed through the nose or\nmouth to lie directly behind the heart. The closer a\nstructure is to the transducer, the better the ultrasound\nimage that can be obtained. In TEE, which heart valve\ncan be best visualized?",
      a: [
        "Tricuspid",
        "Pulmonary",
        "Mitral",
        "Aortic",
        "Valve of the inferior vena cava",
      ],
      correct: 2,
      explanation:
        "The mitral valve is best visualized by TEE\nbecause the transducer within the esophagus is\ndirectly posterior to the left atrium. The physical laws\nthat apply to ultrasound imaging dictate that the\ncloser the structure to the transducer, the better the\nability to obtain a good image. This question asks\nwhich heart valve is most directly related to the posterior aspect of the left atrium, which is the mitral\nvalve.",
    },
    {
      q: "A 65-year-old alcoholic man is admitted to the\nemergency department because of severe dehydration\ndue to continuous vomiting for the past 2 days. The\npatient was placed on fluid replacement and he recov\ners well. His chest radiograph reveals a mild pneumo\nmediastinum. The presence of which of the following\nanatomic structures is a radiologic landmark for the\ndiagnosis of pneumomediastinum?",
      a: [
        "Left superior intercostal vein",
        "Vagus nerve",
        "Superior vena cava",
        "Pulmonary vein",
        "Aortic arch",
      ],
      correct: 0,
      explanation:
        "Pneumomediastinum describes the presence of air in the mediastinum and may arise from a\nwide range of pathological conditions. Despite the\nwell-described imaging of pneumomediastinum, it is\nsometimes difficult to differentiate from other conditions such as pneumopericardium and medial pneumothorax. The “aortic nipple” is the radiographic\nterm used to describe the lateral nipple-like projection\nfrom the aortic knob. The aortic nipple corresponds\nto the end-on appearance of the left superior intercostal vein coursing around the aortic knob and may be\nmistaken radiologically for lymphadenopathy or a\nneoplasm. In cases of pneumomediastinum, it takes\non an “inverted aortic nipple” appearance. In this\nposition, the inverted aortic nipple facilitates the\nradiographic discrimination of pneumomediastinum\nfrom similar conditions (GAS Fig. 3-88).",
    },
    {
      q: "A neonate was born at 34 weeks of gestation and\nwas admitted for pneumonitis. A CT scan examination\nreveals that the upper segment of the esophagus ends\nblindly and the presence of an abnormal communica\ntion between the trachea and the lower segment of\nesophagus. Which of the following clinical condition is\ncommonly seen in association with this congenital\nanomaly?",
      a: [
        "Polyhydramnios",
        "Oligodramnios",
        "Anhydramnios",
        "Hydatidiform mole",
        "Choriocarcinomas",
      ],
      correct: 0,
      explanation:
        "A tracheoesophageal fistula (TEF) is an\nabnormal communication between the trachea and\nesophagus. This is a congenital anomaly that results\nfrom incomplete fusion of the tracheoesophageal folds\nthat separate the trachea from the esophagus embryologically. In most cases it is accompanied by esophageal atresia. Polyhydramnios is commonly associated\n\nwith TEF and esophageal atresia, as the amniotic fluid\nis unable to pass into the stomach and intestines\nfor absorption and collects in the amniotic sac. Oligohydramnios and anhydramnios are associated with\ngenitourinary anomalies. Hydatidiform mole and choriocarcinomas are tumors of the placenta and are not\nusually associated with polyhydramnios.",
    },
    {
      q: "A 55-year-old woman is admitted to the hospital\nwith cough and severe dyspnea. Radiologic examina\ntion reveals that the patient suffers from emphysema.\nUpon physical examination the patient shows only\n“bucket-handle” movements during deep inspiration.\nWhich movements of the thoracic wall are characteris\ntic of this type of breathing?",
      a: [
        "Increase of the transverse diameter of the\n\nthorax",
        "Increases of the anteroposterior diameter of\n\nthe thorax",
        "Increase of the vertical dimension of the\n\nthorax",
        "Decrease of the anteroposterior diameter of\n\nthe thorax",
        "Decrease of the transverse diameter of the\n\nthorax",
      ],
      correct: 0,
      explanation:
        "The middles of the shafts of the ribs are\nlower than the two ends (anterior and posterior).\nTherefore when the shafts of the ribs are elevated,\nthey move laterally. This “bucket-handle” movement\nincreases the transverse diameter of the thorax. The\nanterior ends of the ribs are inferior to the posterior\nends; therefore when the ribs are elevated, they move\nthe sternum upward and forward in a “pump handle”\nRib I\nLeft subclavian artery\nBrachiocephalic trunk\nLeft common carotid artery\nLeft pulmonary artery\nLeft brachiocephalic vein\nLeft vagus nerve\nLeft phrenic nerve\nLeft recurrent laryngeal nerve\nEsophagus\nBronchus\nThoracic aorta\nDiaphragm\nLigamentum arteriosum\nPericardial sac\n\nmovement that increases the anteroposterior diameter\nof the thorax. Depression of the diaphragm results\nfrom contraction of the muscle, which increases the\nvertical dimension of the thorax. When the muscle\nrelaxes, the diaphragm is elevated, which decreases\nthe vertical dimension of the thorax.",
    },
    {
      q: "A 34-year-old man with a complaint of sharp,\nlocalized pain over the thoracic wall is diagnosed with\npleural effusion. A chest tube is inserted to drain the\neffusion through an intercostal space. Where should\nthe chest tube be inserted?",
      a: [
        "Just superior to the upper border of the rib",
        "Just inferior to the lower border of the rib",
        "At the middle of the intercostal space",
        "Between the internal and external intercostal\n\nmuscles",
        "Between the intercostal muscles and the\n\nposterior intercostal membrane",
      ],
      correct: 0,
      explanation:
        "By placing a chest tube just superior to the\nupper border of the rib, the important neurovascular\nbundle is avoided. The bundle consists of intercostal\nvein, artery, and nerve running through the superior\nportion of the intercostal space. In each space, the\nvein is the most superior structure and is highest in\nthe costal groove. The artery is inferior to the vein\nand the nerve is inferior to the artery and may not be\nprotected by the costal groove on the lower border of\nthe rib. Entrance through the middle of the space does\nnot remove the possibility of damaging the neurovascular bundle. Neither passage between the internal\nand external intercostal muscles, nor between the\nintercostal muscles and the posterior intercostal membrane would allow entry to the pleural cavity.",
    },
    {
      q: "A 30-year-old man is admitted to the emergency\ndepartment because of a significant nose bleed and a\nheadache that has worsened over several days. He also\ncomplains of fatigue. Upon examination it is noted that\nbrachial artery pressure is markedly increased, femoral\npressure is decreased, and the femoral pulses are\ndelayed. The patient shows no external signs of inflam\nmation. Which of the following is the most likely\nembryologic defect of this condition?",
      a: [
        "Fourth pharyngeal arch",
        "Third pharyngeal arch",
        "Left dorsal aorta",
        "Left fifth pharyngeal arch",
        "Sixth pharyngeal arch",
      ],
      correct: 2,
      explanation:
        "This is a typical description of a postductal\ncoarctation. This type of coarctation is the most\ncommon type found in adults. It is associated with\nthe typical symptoms of notching of the ribs, hypertension in the upper limb, and weak pulses in the\nlower limbs. During embryonic development the left\ndorsal aorta gives rise to the thoracic aorta. Developmentally the aortic arch is formed by the aortic sac,\nthe fourth pharyngeal artery, and the dorsal aorta. The\nthird pharyngeal artery will give rise to the common\ncarotid artery. The fifth pharyngeal arch artery will\ndisappear bilaterally and the sixth will form the ductus\narteriosus on the left and part of the pulmonary trunk.\nSince this case is a postductal coarctation the development of this area of the arch of the aorta is from the\ndorsal aorta (Fig. 2-12).",
    },
    {
      q: "A 3-day-old newborn is admitted to the surgical\nunit with severe dyspnea and cyanosis. On physical\nexamination the patient appears to have a flat abdomen.\nImaging reveals a left side pneumothorax and pockets\nof air in the left hemithorax. Which of the following\nconditions is the most likely diagnosis?",
      a: [
        "Congenital diaphragmatic hernia",
        "Laryngeal atresia",
        "Emphysema",
        "Respiratory distress syndrome",
        "Tracheoesophageal fistula",
      ],
      correct: 0,
      explanation:
        "Congenital diaphragmatic hernia is a relatively common congenital anomaly. It is most often\nseen as a posterolateral defect in the diaphragm resulting from the defective formation or fusion of the\npleuroperitoneal membranes with the other three\nembryological parts of the diaphragm. If this defect\npersists when the intestines return to the stomach\nfrom the umbilicus during the tenth week, some of\nthe intestines and abdominal viscera may pass into\nthe thorax. This compresses the developing lungs and\nresults in pulmonary hypoplasia. In cases of severe\nhypoplasia, some primordial alveoli may rupture,\ncausing air to enter into the pleural cavity (pneumothorax). On physical exam, the patient has severe\ndyspnea and a flat “scaphoid” abdomen. Laryngeal\natresia is a rare anomaly that results in obstruction of\nthe upper airways. Emphysema is a condition usually\nseen in adults where the elasticity of the lung tissue\nis lost resulting in rupture of the alveoli and the development of large air pockets. Respiratory distress syndrome is usually seen in premature infants due to a\nsurfactant deficiency. Tracheoesophageal fistula is a\ncongenital condition where there is an abnormal connection between the trachea and esophagus and is\nusually accompanied by esophageal atresia. Patients\nusually present with dyspnea and choking when\nattempting to feed.",
    },
    {
      q: "A 55-year-old man is admitted to the hospital with\ncomplaints of severe chest pain radiating to his left arm\nand increased sweating over his chest. ECG examina\ntion provides evidence of a myocardial infarction of\nthe posterior wall of the left ventricle. Which nerve\nfibers are most likely responsible for the increased\nsweating?",
      a: [
        "Preganglionic parasympathetics",
        "Postganglionic sympathetics in the\n\ncardiopulmonary nerve",
        "Thoracic visceral afferents",
        "Postganglionic sympathetic fibers from T1\n\nto T4",
        "Postganglionic sympathetic fibers from\n\nsuperior, middle, and inferior cervical ganglia",
      ],
      correct: 3,
      explanation:
        "The sympathetic system innervates the\nsweat glands located in the skin and subcutaneous\ntissue. The postganglionic cell bodies are located in\nthe sympathetic chain from T1 to T4, which corresponds to the chest wall. The postganglionic fibers\nleave the sympathetic chain via the gray ramus communicans to enter the T1 to T4 spinal nerves in order\nto get to their target. Postganglionic sympathetics\nin the cardiopulmonary nerves are responsible for\nincreasing the heart rate. Postganglionic sympathetic\nfibers from superior, middle, and inferior cervical\nganglia are directed either to the head and neck or to\nthe heart to increase the heart rate. There are no\nparasympathetic fibers in the body wall. Thoracic\nvisceral afferents travel back to the spinal cord with\nsympathetic fibers but are responsible for the patient’s\ncomplaint of severe chest pain.",
    },
    {
      q: "A 35-year-old woman patient has a hard tumor\nabout 1 cm in diameter slightly above, and lateral, to\nher right areola. A specific dye was injected into the\ntissue around the tumor which was taken up by the\nlymph vessels, draining the area. An incision was made\nto expose the lymphatic vessels which were then visible\nto the naked eye. The vessels were traced to surgically\nexpose the lymph nodes receiving the lymph from the\n\ntumor. Which nodes will most likely first receive lymph\nfrom the tumor?",
      a: [
        "Anterior axillary (pectoral)",
        "Lateral axillary",
        "Parasternal",
        "Central axillary",
        "Apical (infraclavicular)",
      ],
      correct: 0,
      explanation:
        "The lateral quadrants of the breast drain\ninto the anterior axillary (pectoral), which is approximately 75% of the lymphatic drainage. The medial\nquadrants drain into the parasternal nodes with some\ndrainage to the parasternal nodes of the opposite\nbreast. There is also a small amount of drainage of\nthe inferior part of the breast into lymph nodes of the\nanterior abdominal wall. The central and apical axillary nodes receive lymphatic from the pectoral, lateral,\nand posterior axillary nodes.",
    },
    {
      q: "A 51-year-old woman visited her physician com\nplaining of dyspnea. Examination revealed edema of\nthe lower limbs and a systolic murmur was heard in\nthe left second intercostal space. Which of the follow\ning valve abnormalities is she most likely suffering\nfrom?",
      a: [
        "Regurgitation through aortic valve",
        "Regurgitation through pulmonary valve",
        "Stenosis of aortic valve",
        "Regurgitation through mitral valve",
        "Stenosis of pulmonary valve",
      ],
      correct: 4,
      explanation:
        "Pulmonary stenosis of the pulmonary valve\nresults in a systolic murmur that can be auscultated\nat the left second intercostal space. During systole,\nblood is forcibly expelled from the ventricles and\nresult in turbulent flow against a narrowed valve.\n\nAortic stenosis also results in a systolic murmur but\nis auscultated at the right second intercostal space.\nRegurgitation through the mitral valve results in a\nsystolic murmur that is auscultated at the fourth left\nintercostal space in the midclavicular line. Pulmonary\nand aortic valve regurgitation result in diastolic\nmurmurs.",
    },
    {
      q: "A 58-year-old man was brought to the emergency\ndepartment complaining of breathlessness and chest\npains radiating out into his left arm. A diagnosis of\nangina pectoris was made resulting from ischemia of\nthe myocardium. Sublingual nitroglycerine relieved the\ncondition by causing vasodilation and improving blood\nflow to the heart. Which of the following nerves referred\nthe pain to the arm?",
      a: [
        "Vagus",
        "Intercostals",
        "Phrenic",
        "Intercostobrachial",
        "Cardiopulmonary",
      ],
      correct: 3,
      explanation:
        "The intercostobrachial nerve is the lateral\ncutaneous branch of the second intercostal nerve and\nis responsible for the sensation to the medial side of\nthe arm. Ischemia of the myocardium stimulates visceral afferents that travel back to the spinal cord with\nthe sympathetics that innervate the heart. At the level\nof the spinal cord, this visceral stimulus is interpreted\nas coming from the body wall. The vagus nerve is CN\nFig. 2-12\n3rd pharyngeal arch\narteries\nLeft dorsal aorta\nPharyngeal arch\narteries\nRight subclavian artery\nLeft subclavian artery\nLeft subclavian artery\nArch of aorta\nLigamentum arteriosum\n7th intersegmental artery\nInternal carotid arteries\nAscending\naorta\nPulmonary arterial trunk\nBrachiocephalic artery\nSubclavian arteries\nRight pulmonary artery\nDuctus arteriosus\nLeft pulmonary\nartery\nDescending aorta\nAscending aorta\nExternal carotid arteries\nLeft common carotid artery\nTruncus arteriosus\n(partly divided into\naortic and pulmonary\narteries)\nExternal carotid artery\nLeft dorsal aorta\nInternal carotid artery\nAortic sac\n\nDuctus arteriosus\nLeft dorsal aorta\nPulmonary arteries\nLeft pulmonary artery\n4th pharyngeal arch\narteries\n6th pharyngeal arch\narteries\nTruncus arteriosus Aortic sac\nAortic sac\nDorsal aortas\nA\nC\nB\nD\n\n5 6\n\nB\nA\nX and is a major supplier of autonomic function to\nthe gut, up to the left colic flexure, and also provides\nsome autonomic motor and sensory supply to organs\nin the head, neck, and thorax. The phrenic nerve\narises from spinal nerves C3 to C5 and innervates the\ndiaphragm. This nerve has no branches that pass into\nthe arm. The intercostal nerves innervate the anterior\nand posterior chest wall. The cardiopulmonary nerves\nare responsible for carrying the cardiac sympathetic\nefferent fibers from the sympathetic ganglia to the\nthoracic viscera and afferent fibers for pain from these\norgans (GAS Fig. 3-108).",
    },
    {
      q: "A 41-year-old woman is examined in the outpa\ntient surgical clinic for a lump in her right breast.\nPhysical examination reveals dimpling of skin of the\nbreast over the mass. A CT scan of the breast reveals\na 3-cm mass at the right upper quadrant of her right\nbreast with multiple calcifications. The dimpling of the\nbreast is most likely caused by invasion of the tumor\ninto which of the following structure(s)?",
      a: [
        "Lactiferous ducts",
        "Mammary and apical lymph nodes",
        "Suspensory ligaments",
        "Deltopectoral fascia",
        "Medial and lateral pectoral nerves",
      ],
      correct: 2,
      explanation:
        "The suspensory ligaments (of Cooper) are\nwell-defined condensations of connective tissue that\nrun from the clavicle to the dermis of the skin overlying the breast. They support and suspend the breast\nfrom the chest wall. Carcinoma of the breast produces\ntension on these ligaments and causes dimpling of the\nbreast. Invasion of the axillary lymph nodes results in\nstagnation and fibrosis of lymph resulting in the peau\nd’orange appearance of the overlying skin.",
    },
    {
      q: "A 65-year-old woman is admitted to the emer\ngency department with severe chest pain. Laboratory\nexamination reveals that the patient has suffered a\n\nFig. 2-9 \n\nmyocardial infarction. Cardiac catheterization is per\nformed and the portion of the heart immediately behind\nthe sternum is found to be infarcted. Which artery is\nmost likely occluded?",
      a: [
        "Circumflex",
        "Anterior interventricular",
        "Posterior interventricular",
        "Left marginal",
        "Right coronary",
      ],
      correct: 4,
      img: "Fig. 2-9",
      explanation:
        "The right coronary artery supplies the right\nventricle, which lies immediately posterior to the\nsternum. The circumflex artery supplies the left\natrium. The anterior interventricular artery supplies\nthe left ventricle and the anterior two thirds of the\ninterventricular septum. The posterior interventricular artery supplies the posterior third of the interventricular septum. The left marginal artery is a branch\nof the circumflex artery and supplies the posterior part\nof the left ventricle.",
    },
    {
      q: "A 42-year-old woman is admitted to the emer\ngency department with severe dysphagia. A CT scan\n(Fig. 2-9) reveals a small aortic aneurysm. Which of\nthe following nerves will most likely be compressed if\nthe aortic aneurysm continues to grow?",
      a: [
        "Vagus",
        "Phrenic",
        "Left recurrent laryngeal",
        "Right recurrent laryngeal",
        "Greater thoracic splanchnics",
      ],
      correct: 2,
      img: "Fig. 2-9",
      explanation:
        "The CT scan shows an aneurysm of the\narch of the aorta. The left recurrent laryngeal artery\nloops around the arch of the aorta before traveling in\nthe tracheoesophageal groove to supply the larynx.\nThe vagus nerve travels anterior to the aorta and\nwill not be compressed. The phrenic nerve travels\nanterior to the hilum of the lung and will not be\naffected in this case. The right recurrent laryngeal\nnerve loops around the right subclavian artery. The\ngreater splanchnic nerve originates in the thorax\nfrom the sympathetic chain at the levels of T5 to T9\nand innervates abdominal structures (GAS Fig. 3-46).",
    },
    {
      q: "A 59-year-old man is admitted to the hospital with\na severe inferior myocardial infarction. The patient was\nbrought to the catheterization lab for an emergency\ncatheterization of his coronary arteries. During passage\nof the catheter from his right radial artery it is noted\nthat the patient has a right subclavian artery passing\nposteriorly to the esophagus and thus requires a longer\ncatheter. Which of the following structures failed to\nregress in this condition?",
      a: [
        "Right dorsal aorta distal to the seventh\n\nintersegmental artery",
        "Left dorsal aorta distal to the seventh\n\nintersegmental artery",
        "Right dorsal aorta proximal to the seventh\n\nintersegmental artery",
        "Fifth arch artery",
        "Ventral part of the first arch artery",
      ],
      correct: 0,
      explanation:
        "During development the right subclavian\nartery forms from the fourth pharyngeal arch and\nseventh intersegmental arteries. If the fourth pharyngeal arch artery and the right dorsal aorta disappear\ncranial to the seventh segmental artery the right subclavian artery will be retroesophageal. In this case the\nright subclavian artery is formed by the right seventh\nintersegmental artery and the distal dorsal aorta,\nwhich does not regress.",
    },
    {
      q: "A 25-year-old man is admitted to the hospital with\nsevere headache, cold feet and legs, and pain in his legs\nwhen he runs a short distance. During physical exami\nnation, femoral pulses are much weaker than radial\npulses. Three-dimensional CT scan angiography reveals\na coarctation of the aorta proximal to the left subcla\nvian artery. The condition that creates these symptoms\nis a result of a failure of normal development of which\nstructure?",
      a: [
        "Fourth pharyngeal arch",
        "Third pharyngeal arch",
        "Left dorsal aorta",
        "Left fifth pharyngeal arch",
        "Sixth pharyngeal arch",
      ],
      correct: 0,
      explanation:
        "During embryonic development the left\ndorsal aorta gives rise to the thoracic aorta. The aortic\n\narch is formed by the aortic sac and the fourth pharyngeal artery. The third pharyngeal artery will give\nrise to the common carotid artery. The fifth pharyngeal arch artery will disappear bilaterally, and the\nsixth will form the ductus arteriosus on the left and\npart of the pulmonary trunk. In this case the region\nof the arch of the aorta between the subclavian artery\nand the left common carotid artery is formed by the\nfourth aortic arch.",
    },
    {
      q: "A newborn girl is diagnosed with tricuspid valve\natresia. An ultrasonographic examination reveals a\nwidely patent oval foramen, VSD, hypoplastic right\nventricle, and hypertrophied left ventricle. The patent\nforamen ovale most likely reflects a developmental\nfailure of which of the following structures?",
      a: [
        "Endocardial cushions",
        "Foramen primum",
        "Septum secundum",
        "Truncus arteriosus",
        "Bulbus cordis",
      ],
      correct: 2,
      explanation:
        "The septum secundum develops from the\ndorsal endocardial cushion and the wall of the primitive atria ventrally. It overgrows the septum primum,\nwhich becomes a one-way valve during intrauterine\ndevelopment. The foramen primum is the space\nbetween the endocardial cushion and the developing\nseptum primum. The truncus arteriosus will give rise\nto the ascending aorta and pulmonary trunk. The\nbulbus cordis will give rise to the smooth parts (arterial outflow) of both the left and right ventricles.",
    },
    {
      q: "A 25-year-old woman is admitted to hospital with\ndyspnea. Radiologic examination reveals a tumor invad\ning the lung surface just anterior to the hilum. Which\nnerve is being compressed by the tumor?",
      a: [
        "Phrenic",
        "Vagus",
        "Intercostal",
        "Recurrent laryngeal",
        "Cardiopulmonary",
      ],
      correct: 0,
      explanation:
        "The phrenic nerve passes anterior to the\nhilum of the lung on both the left and right sides and\nwraps around the hilar structures inferiorly. The\nphrenic nerve innervates the diaphragm and if\ndamaged causes dyspnea. The vagus nerve passes\nalong the esophagus as the left and right trunks and\nis posterior to the hilum on both sides. The intercostal\nnerves are separated from the tumor by muscle, fat,\nand fascia. Cardiopulmonary plexus is arranged\naround the trachea and is located posterior to the\nhilum of the lung. Wrapping around the arch of\nthe aorta on the left and the subclavian artery on the\nright, the recurrent laryngeal nerve is far too superior\nto be affected. None of the other structures cause\nbreathing difficulties.",
    },
    {
      q: "A 60-year-old woman with a history of severe\nrheumatic heart disease is in the clinic for a routine\nfollow-up. Her cardiac symptoms have been relatively\nstable since valve replacement surgery 2 years ago, but\nshe has developed some new symptoms over the past\nfew months. A chest radiograph reveals sternotomy\nwires, prosthetic aortic and mitral valves, and a greatly\nenlarged left atrium. Which symptom could most\nlikely develop as a direct result of her left atrial\nenlargement?",
      a: [
        "Nausea and vomiting",
        "Pain and tenderness over thoracic vertebral\n\nspinous processes",
        "Difficulty swallowing",
        "Epigastric pain after eating fatty foods",
        "Increased coughing",
      ],
      correct: 2,
      explanation:
        "The left atrium lies directly anterior to the\nesophagus and compresses it when enlarged, resulting in difficulty swallowing. Nausea and vomiting\nmay be present but is a symptom of a wide array of\ndysfunctions and are not a direct result of the enlarged\natrium. Pain and tenderness over the thoracic vertebral spinous processes will not result because there is\nno compression of sensory nerves. Epigastric pain\nresulting from eating fatty foods is an indication of\nacute cholelithiasis, which is due to gallstones.\nIncreased coughing could only result from irritation\nof the vagus nerves above the larynx, which is above\nthe level of the left atria.",
    },
    {
      q: "A 59-year-old man is admitted to emergency\ndepartment with severe chest pain. During examination\na slight rhythmic pulsation on the chest wall at the left\nfifth intercostal space is noted. What causes this\npulsation?",
      a: [
        "Right atrium",
        "Left atrium",
        "Aortic arch",
        "Apex of the heart",
        "Mitral valve",
      ],
      correct: 3,
      explanation:
        "The apex of the heart is typically visualized\nand palpated in the fifth intercostal space of the midclavicular line. This is termed the “apex beat” and is\nthe result of blood being forced against it during atrial\ncontraction. The atria should not give a visible pulsation on the thoracic wall unless there is atrial fibrillation. In atrial fibrillation the right atrium may give\nvisible pulsations but not the left because it is located\nposteriorly. Pulsations from the aortic arch will only\nbe present if there is an aneurysm of the aortic arch.\nPain interpreted as\noriginating in distribution\nof somatic sensory nerves\nPatient perceives\ndiffuse pain in\nT1–4 dermatomes\nVisceral\nsensory nerve\nSomatic\nsensory nerve\nT3\nT4\nC\nT2\nT1\n\nThe mitral valve may be auscultated at this location\nand is one of the reasons why the physician would\nlocate the apex beat.",
    },
    {
      q: "A 48-year-old man is admitted to the emergency\ndepartment with chronic angina. Coronary angiography\nreveals nearly total blockage of the anterior interven\ntricular artery just after it arises from the left coronary.\nIn exposing this artery for a bypass procedure, which\naccompanying vein must be protected from injury?",
      a: [
        "Middle cardiac",
        "Great cardiac",
        "Small cardiac",
        "Anterior cardiac",
        "Posterior cardiac",
      ],
      correct: 1,
      explanation:
        "The great cardiac vein accompanies the anterior interventricular artery, and the middle accompanies the posterior interventricular artery. The small\ncardiac vein accompanies the right coronary artery as\nit wraps around the right coronary sulcus. This is the\nexternal demarcation of the atrioventricular septum\nand on the left contains the coronary sinus. On the\nanterior and posterior aspect of the right and left\nventricles the anterior and posterior cardiac veins\nare found. The posterior accompany the circumflex\nbranch of the left coronary artery and the anterior the\nsmall unnamed branches (GAS Fig. 3-75).",
    },
    {
      q: "A 25-year-old man is brought to the emergency\ndepartment because of a 1-week history of fever and\ncough productive of purulent sputum. His temperature\nis 38.9° C (102° F), pulse is 110/min, respirations are\n24/min, and blood pressure is 110/70 mm Hg. Crackles,\ndecreased breath sounds, and decreased fremitus are\npresent in the right lower lobe. A chest x-ray shows a\npleural effusion over the lower third of the thorax on\nthe right in the midclavicular line. A thoracocentesis is\nscheduled. Which intercostal space in the midclavicu\nlar line in this patient would be most appropriate for\ninsertion of the needle during this procedure?",
      a: ["Fifth", "Seventh", "Ninth", "Eighth", "Eleventh"],
      correct: 4,
      explanation:
        "Thoracocentesis is a procedure whereby a\nneedle is inserted into the pleural space to evacuate\nair or fluid that has become trapped. The pleural\nreflection lines posteriorly extend as far as T12 and\nwill contain the fluid that has accumulated. To drain\nall of the fluid efficiently the needle must be placed\ninto this costodiaphragmatic recess, which represents\nthe lowest point of the pleura. Inserting the needle\ninto the eleventh space ensures that the lung is not\ndamaged, as it does not reach that low under normal\ncircumstances. All of the other levels stand the risk\nLeft recurrent laryngeal nerve\nCervical cardiac nerves\nLeft vagus nerve\nRight vagus nerve\nSympathetic trunk\nLigamentum arteriosum\nAnterior pulmonary plexus\nPosterior pulmonary plexus\nEsophageal plexus\n\nAnterior veins\nof right ventricle\nAnterior interventricular vein\nCoronary sinus\nPosterior cardiac vein\nRight marginal vein\nCoronary sinus\nMiddle cardiac vein\nGreat cardiac vein\nSmall cardiac vein\nSmall cardiac vein\nGreat cardiac vein\nMiddle cardiac vein\nA\nB\n\nof damaging, the lung and will not effectively extract\nall of the fluid from the space.",
    },
    {
      q: "When inserting a nasogastric tube, which is the\nmost distal site in, or in relation to, the esophagus that\n\nmight offer resistance to the tube as it passes to the\nstomach?",
      a: [
        "Posterior to the left atrium",
        "Level of the superior thoracic aperture",
        "Posterior to the aortic arch",
        "Posterior to the left main bronchus",
        "Esophageal hiatus of the diaphragm",
      ],
      correct: 4,
      explanation:
        "The esophageal hiatus creates a physiological sphincter during diaphragmatic contraction. As\nthe esophagogastric junction does not have a valve\neither anatomically or physiologically this would be\nthe last point of resistance. The area posterior to the\nleft atrium may be compressed slightly but would not\ngive resistance to the passing of the tube. At the level\nof the superior thoracic opening the pharyngoesophageal junction is located and will give resistance;\nhowever, this is the first resistance offered by the\nesophagus. The areas posterior to the aortic arch and\nleft main bronchus are the second and third resistance\nsites.",
    },
    {
      q: "A 55-year-old woman is to undergo a coronary\nbypass operation. The artery of primary concern is the\nvessel that arises from the circumflex artery in a left\ndominant heart. Which artery is this?",
      a: [
        "Right marginal",
        "Anterior interventricular",
        "Left marginal",
        "Artery to the SA node",
        "Posterior interventricular",
      ],
      correct: 4,
      explanation:
        "The question of dominance is determined by\nwhere the posterior interventricular artery arises. If it\narises from the right coronary it is a right dominant\nheart; if from the circumflex of the left coronary it is\nleft dominant. The anterior interventricular artery\nmay anastomose with the posterior but is not a\ncommon origin or a determinant of dominance. The\nartery of the SA node and right marginal artery are\nbranches of the right coronary artery and do not contribute to dominance.",
    },
    {
      q: "A 35-year-old woman is admitted to emergency\ndepartment with dyspnea. Examination reveals a sys\ntolic (S1) murmur, suggestive of regurgitation of the\ntricuspid valve. What is the best site to auscultate this\nvalve?",
      a: [
        "Fourth intercostal space at left border of\n\nsternum",
        "Fifth intercostal space at left midclavicular\n\nline",
        "Fifth intercostal space at right border of\n\nsternum",
        "Third intercostal space at right border of\n\nsternum",
        "Second intercostal space at right border of\n\nsternum",
      ],
      correct: 0,
      explanation:
        "Murmurs of the tricuspid valve can be best\nauscultated in the fourth intercostal space at the\nleft border of the sternum. The fifth intercostal space\nmidclavicular line is the best site to auscultate the\nmitral valve. Second and third intercostal spaces on\nthe right side of the sternum are the areas to listen to\nthe aortic valve.",
    },
    {
      q: "A 42-year-old woman is admitted to the emer\ngency department after a fall from the balcony of her\napartment. During physical examination there is an\nabsence of heart sounds, reduced systolic pressure,\nand engorged jugular veins. The condition that was\ncreated can be alleviated with which of the following\nprocedures?",
      a: [
        "Chest tube insertion superior to the rib",
        "Central venous line",
        "Nasogastric tube",
        "Thoracocentesis",
        "Pericardiocentesis",
      ],
      correct: 4,
      explanation:
        "The patient exhibits signs of cardiac tamponade, known as Beck’s triad: hypotension, muffled\nor absent heart sounds, and jugular-venous dis\n\ntension. As a result, a pericardiocentesis procedure\nshould be performed. Pericardiocentesis is a procedure whereby a needle is inserted into the pericardial\nspace to extract fluid. Inserting a chest tube and thoracocentesis are done to alleviate a pneumothorax and\npleural effusion, respectively. A nasogastric tube will\nnot alleviate any symptoms produced by pericardial\nfluid, and a central line would only provide access for\nintravenous fluids.",
    },
    {
      q: "A 55-year-old man is admitted to the hospital\nwith reduced heart rate and cardiac output. Which\nnerve fibers may have been damaged to cause these\nsymptoms?",
      a: [
        "Preganglionic parasympathetics from the\n\nvagus nerve in the cardiac plexus",
        "Somatic efferents in the phrenic nerve",
        "Visceral afferents in the cardiopulmonary\n\nnerve",
        "Preganglionic sympathetics from T1 to T4\n\nlateral horn",
        "T1 to T4 ventral horn neurons",
      ],
      correct: 3,
      explanation:
        "The SA node receives information from the\nsympathetic preganglionic fibers T1 to T4 to increase\nthe heart rate. If these fibers are damaged the preganglionic vagal fibers from the cardiac plexus are unopposed and will slow down the heart rate. Somatic\nefferents in the phrenic nerve supply the diaphragm\nand have no effect on cardiac function. Visceral afferents in the cardiopulmonary nerve carry pain fibers\nfrom the heart and bronchi. T1 to T4 ventral horn\nneurons are somatic motor nerves and have no effect\non cardiac function.",
    },
    {
      q: "During a dissection of the posterior mediastinum,\na medical student identifies a vessel that lies on the\nanterior surface of the vertebral bodies between the\nthoracic aorta on the left and the azygos vein on\nthe right. In a living human being, this vessel would\nmost likely contain which of the following?",
      a: ["Lymph", "Deoxygenated blood", "Saliva", "Urine", "Oxygenated blood"],
      correct: 0,
      explanation:
        "The thoracic duct originates from the cisterna chyli in the abdomen and ascends through the\naortic hiatus in the diaphragm. It ascends in the posterior mediastinum among the thoracic aorta on its\nleft, the azygos vein on its right, the esophagus anteriorly, and the vertebral bodies posteriorly. At the level\nof the T4, T5, or T6 vertebra, the thoracic duct crosses\nto the left, posterior to the esophagus, and ascends\ninto the superior mediastinum.",
    },
    {
      q: "Diagnostic imaging of a 10-year-old boy revealed\na single but large tumor in a structure located in the\nmost anterior part of the superior mediastinum imme\ndiately posterior to the manubrium. This structure is\nmost likely derived from which of the following pha\nryngeal pouches?",
      a: ["First", "Second", "Third", "Fourth", "Fifth"],
      correct: 2,
      explanation:
        "The major structures in the superior mediastinum, from anterior to posterior, are thymus, veins,\narteries, airway, alimentary tract, and lymphatic\ntrunks. The thymus develops from the third pharyngeal pouch as well as the inferior parathyroid gland.\nThe first pharyngeal pouch derivatives are the endoderm lines the future auditory tube (pharyngotympanic, eustachian tube), middle ear, mastoid antrum,\nand inner layer of the tympanic membrane. Although\nthe second pharyngeal pouch is largely obliterated, it\ncontributes to the middle ear and palatine tonsils. The\nfourth pharyngeal pouch forms the superior parathyroid glands and ultimobranchial body, which forms\nthe parafollicular C-cells of the thyroid gland and\nmusculature and cartilage of the larynx. The fifth\npharyngeal pouch is a rudimentary structure.",
    },
    {
      q: "A 25-year-old woman was brought to the emer\ngency department after suffering a gunshot wound to\nthe back. During physical examination, she was found\nto be in cardiopulmonary distress. Vital signs: P 110\nbeats/min, BP 90/50, RR 32/min. The entry wound of\na bullet was noted on the left thoracic area of her back.\nThe left thorax was notably larger than the right with\ndecreased breath sounds on auscultation and hyper\nresonance to percussion of the left chest. A tracheal tug\nto the right side was noted. She was assessed as having\na tension pneumothorax and the physician prepared to\nperform an emergency decompression of the left thorax.\nBetween which layers will the needle have to be placed\nto relieve the pneumothorax?",
      a: [
        "Between the visceral and parietal layers of\n\nthe pericardium",
        "Between the serous and fibrous layers of the\n\npericardium",
        "Between the mediastinal pleura and fibrous\n\npericardium",
        "Between the parietal and visceral layers of\n\nthe pleura",
        "Between the endothoracic fascia and parietal\n\npleura",
      ],
      correct: 3,
      explanation:
        "A tension pneumothorax occurs when\nintrapleural air accumulates progressively, exerting\npositive pressure on mediastinal and intrathoracic\nstructures. It is a life-threatening occurrence requiring\nrapid recognition and treatment if cardiac arrest is to\nbe avoided. Pericardial effusion is an abnormal accumulation of fluid in the pericardial cavity.",
    },
    {
      q: "A 38-year-old woman delivered a live male infant\nat 37 weeks by elective cesarean section. Ultrasound at\n16 weeks’ gestation showed that the fetal heart was\nlocated outside the chest cavity but the mother opted\nagainst termination of the pregnancy. On examination,\nthe infant was pink, he was in no cardiopulmonary\ndistress, and vital signs were normal. A pulsatile mass\n5 cm × 6 cm was seen outside the skin in the midline\nof the thorax. A chest radiograph revealed a “split” in\nthe sternum. The infant was diagnosed with ectopia\ncordis. What was the most likely embryological cause\nof this defect?",
      a: [
        "Failed fusion of pleuropericardial folds at the\n\nmidline",
        "Failed fusion of the septum transversum with\n\npleuropericardial folds",
        "Failed fusion of lateral body wall folds in the\n\nmidline",
        "Failed fusion of pleuroperitoneal at the\n\nmidline",
        "Failed fusion of pericardial coelom and\n\nperitoneal coelom",
      ],
      correct: 2,
      explanation:
        "With ectopia cordis, a rare condition, the\nheart is in an abnormal location. In the thoracic form\nof ectopia cordis, the heart is partly or completely\n\nexposed on the surface of the thorax. It is usually\nassociated with widely separated halves of the sternum\n(nonfusion) and an open pericardial sac. The pleuropericardial folds split into two layers, the somatopleuric layer forms the future body wall and the he\nsplanchnopleuric layer forms the circulatory system\nand future gut wall. Failure of fusion of the pleuroperitoneal will lead to a diaphragmatic hernia.",
    },
    {
      q: "A 42-year-old woman delivered a male infant at\nterm. On examination of the infant, vital signs were\nnormal. Although he moved all limbs equally, there\nwas generalized decreased muscle tone. His face was\nbroad and flat with oblique eye fissures, flattened nose\nbridge, and protruding tongue from a small jaw. Aus\ncultation of the chest revealed a systolic ejection\nmurmur. Cardiac ultrasound showed a defect in the\nwall separating the right from left atria. The patient was\ndiagnosed with trisomy 21 with an ASD. What is the\nmost likely cause of the defect in this patient?",
      a: [
        "Failed fusion of septum primum with the\n\natrioventricular septum",
        "Failed fusion of septum primum with septum\n\nsecundum",
        "Excess resorption of the cranial part of the\n\nseptum primum",
        "Short septum secundum",
        "Incomplete resorption of the sinus venosus\n\ninto the right atrium",
      ],
      correct: 0,
      explanation:
        "There are four clinically significant types of\nASD: ostium secundum defect, endocardial cushion\ndefect with ostium primum defect, sinus venosus\ndefect, and common atrium. The first two types of\nASD are relatively common. Endocardial cushion\ndefects with ostium primum occur in approximately\n20% of persons with trisomy 21 (Down syndrome);\notherwise, it is a relatively uncommon cardiac defect.",
    },
    {
      q: "A 6.5 pound female infant was born to a 32-yearold woman by cesarean section. There was no cyanosis\n\nbut a pansystolic murmur was auscultated. Cardiac\nultrasound showed a small jet of blood directly between\nleft and right ventricles during systole, through a defect\nin the cranial part of the interventricular septum. The\ninfant was admitted to the Neonatal Intensive Care Unit\nand discharged on day 2. Which of the following is the\nmost likely cause of the cardiac defect discovered in\nthis patient?",
      a: [
        "There is uneven partitioning of the bulbus\n\ncordis",
        "It causes a right to left shunt of blood at birth",
        "It is a cause of cyanosis at birth",
        "Failed fusion of the interventricular septum\n\nand endocardial cushions",
        "Failed closure of the septum primum and\n\nseptum secundum at birth",
      ],
      correct: 3,
      explanation:
        "VSDs are the most common type of coronary\nheart disease, accounting for approximately 25% of\nheart defects. A membranous VSD is the most common\ntype but it may occur at any part of the interventricular septum. A bulbus cordis partitioning defect may\nlead to persistent truncus arteriosus or transposition\nof the great vessels. VSD is an acyanotic heart disease.\nSeptum primum and septum secundum may close\nafter birth. Failure of closure will lead to patent\nforamen ovale.",
    },
    {
      q: "A 30-year-old woman delivered a 6-lb female\ninfant at term via spontaneous vaginal delivery. The\ninfant was noted to have an elevated respiratory rate\nand was admitted to the neonatal intensive care unit.\nShe developed a fever day later with no resolution of\nthe tachypnea. A chest radiograph showed bilateral\nbasal hazy opacification and a right-sided cardiac\nshadow. A whole-body CT scan was ordered which\nshowed normal orientation of the other viscera. What\nis the most likely cause of this infant’s cardiac\ncondition?",
      a: [
        "Posterior and superior growth of the\n\nprimordial atrium",
        "Anterior and inferior growth of the primordial\n\nventricle",
        "Anterior and inferior growth of the bulbus\n\ncordis",
        "Growth of primordial heart tube to the left",
        "Growth of the primordial heart tube to the\n\nright",
      ],
      correct: 3,
      explanation:
        "With isolated dextrocardia, the abnormal\nposition of the heart is not accompanied by displacement of other viscera. This defect is usually complicated by severe cardiac anomalies (e.g., single ventricle\nand transposition of the great vessels).",
    },
    {
      q: "A 54-year-old man was admitted to hospital for\nelective esophageal surgery. He had been diagnosed\nwith Barrett’s esophagus and opted for surgery that\nwould excise the distal part of the esophagus. Postop\neratively, he complained of gradually increasing chest\ndiscomfort. Vital signs: P 90 beats/min, BP 160/90, RR\n20/min. Auscultation revealed normal heart and breath\nsounds. A chest radiograph showed hazy opacity of the\nmediastinum. A CT image of the chest showed a col\nlection in the posterior mediastinum. Which of the\nfollowing structures is most likely damaged in this\npatient?",
      a: [
        "Thoracic duct",
        "Esophagus",
        "Descending aorta",
        "Azygos vein",
        "Bronchial lymphatics",
      ],
      correct: 0,
      explanation:
        "The thoracic duct originates from the cisterna chyli in the abdomen and ascends through the\naortic hiatus in the diaphragm. It ascends in the posterior mediastinum among the thoracic aorta on its\nleft, the azygos vein on its right, the esophagus anteriorly, and the vertebral bodies posteriorly. At the level\nof the T4, T5, or T6 vertebra, the thoracic duct crosses\nto the left, posterior to the esophagus, and ascends\ninto the superior mediastinum.",
    },
    {
      q: "A 3-day-old male infant is admitted to the cardiol\nogy unit with cyanosis. During echocardiographic\nexamination a right-to-left shunt is identified. Which\ncondition is most likely to produce this type of shunt\nat birth?",
      a: [
        "Atrial septal defect",
        "VSD",
        "Patent ductus arteriosus",
        "Persistent truncus arteriosus with VSD",
        "Tetralogy of Fallot",
      ],
      correct: 4,
      explanation:
        "Tetralogy of Fallot consists of four cardiac\ndefects: pulmonary artery stenosis, VSD, dextroposition of aorta (overriding or straddling aorta), and\nright ventricular hypertrophy. The pulmonary trunk is\nusually small and there may be various degrees of\npulmonary artery stenosis. Cyanosis (deficient oxygenation of blood) is an obvious sign of the tetralogy\nbut is not usually present at birth. Persistent truncus\narteriosus is present at birth. ASD, VSD, and PDA\ncontribute to acyanotic heart disease.",
    },
    {
      q: "During cardiac catheterization of a 4-year-old girl,\nthe radiologist notes that the contrast medium released\ninto the arch of the aorta is visible immediately in both\npulmonary arteries. What is the most likely explanation\nfor this finding?",
      a: [
        "Aortic atresia",
        "Tetralogy of Fallot",
        "Patent (persistent) ductus arteriosus",
        "Patent ductus venosus",
        "VSD",
      ],
      correct: 2,
      explanation:
        "Patent ductus arteriosus (PDA), a common\nbirth defect, is two to three times more common in\nfemales than males. If it remains patent, aortic blood\nis shunted into the pulmonary trunk. Aortic atresia is\npresent when obstruction of the aorta or its valve is\ncomplete. Patent ductus venosus shunts a portion of\nthe left umbilical vein blood flow directly to the inferior vena cava. In VSD the shunt will from the right\nto the left ventricle. Tetralogy of Fallot consists of four\ncardiac defects: pulmonary artery stenosis, VSD, dextroposition of aorta (overriding or straddling aorta),\nand right ventricular hypertrophy.",
    },
    {
      q: "A 4-day-old female infant was admitted to the\npulmonary unit suffering from dyspnea and cyanosis.\nRadiographic examination revealed herniation of bowel\ninto the left thoracic cavity and a hypoplastic left lung.\nWhich embryologic structure probably failed to develop\nand resulted in the herniation?",
      a: [
        "Septum transversum",
        "Pleuroperitoneal membrane",
        "Tracheoesophageal septum",
        "Laryngotracheal groove",
        "Ventral mesogastrium",
      ],
      correct: 1,
      explanation:
        "Congenital diaphragmatic hernia is usually\nunilateral and results from defective formation and/\nor fusion of the pleuroperitoneal membranes with the\nother three parts of the diaphragm. This results in a\nlarge opening in the posterolateral region of the diaphragm. As a result, the peritoneal and pleural cavities are continuous with one another along the\nposterior body wall. In septum transversum defect the\npatient presents with midline diaphragmatic hernia.\nTracheoesophageal septum defect can lead to esophageal atresia or tracheoesophageal fistula. The lesser\nomentum and falciform ligament form from the\nventral mesogastrium, which is formed by the septum\ntransversum.",
    },
    {
      q: "A 30-year-old man is admitted emergency depart\nment following involvement in a domestic dispute with\na jilted lover. The man reported that he was stabbed in\nhis right anterior chest wall with a sharp instrument.\nInitial assessment revealed a man in acute respiratory\ndistress. Physical examination showed a puncture\nwound in the third right intercostal space at the mid\nclavicular line and distended neck veins. There was a\nhyperresonance on percussion and absent breath\nsounds on right hemithorax. A radiograph revealed a\ndeviated trachea to the left. Which one of the following\nis the most likely diagnosis?",
      a: [
        "Right tension pneumothorax",
        "Right simple pneumothorax",
        "Right simple pneumothorax and cardiac\n\ntamponade",
        "Right tension pneumothorax and cardiac\n\ntamponade",
        "Cardiac tamponade",
      ],
      correct: 0,
      explanation:
        "A tension pneumothorax occurs when\nintrapleural air accumulates progressively, exerting\npositive pressure on mediastinal structures and leading to mediastinal shift to the opposite side. It is\na life-threatening occurrence requiring rapid recognition and treatment if cardiorespiratory arrest is to be\navoided. Cardiac tamponade is pressure on the heart\nthat occurs when blood or fluid builds up in the space\nbetween the visceral and parietal layers of the pericardium. Classical cardiac tamponade includes three\nsigns, known as Beck’s triad: hypotension, muffled\nheart sounds, and jugular-venous distension.",
    },
    {
      q: "A 35-year-old man was involved in a hit and run\naccident. A chest radiograph reveals broken ribs 5 to\n7. On physical examination there are lacerations and\nradiography shows no evidence of punctured pleura.\nSeveral hours later the patient appears cyanotic. What\nis the most likely cause of the new cyanosis?",
      a: [
        "Hemothorax",
        "Flail chest",
        "Paralysis of the diaphragm",
        "Tension pneumothorax",
        "Spontaneous pneumothorax",
      ],
      correct: 0,
      explanation:
        "The patient has hemothorax, which can be\nseen in the left hemithorax on the radiograph. A flail\n\nchest by itself will just show minimal soft tissue\nopacification without any lung field involvement and\nwill not cause cyanosis. Paralysis of the diaphragm\nwill likewise not cause opacification of the lung fields.\nTension pneumothorax and spontaneous pneumothorax will not cause opacification of the lung fields but\nloss of vascular markings and there is loss of pleural\nintegrity even if not observable.",
    },
    {
      q: "A 55-year-old man is admitted to the emergency\ndepartment because of chills followed by a painful dry\ncough and fever for the past 3 days. The patient com\nplains of painful breathing and upon auscultation, a\npleural rub is heard when the patient breathes. A radio\ngraph shows signs of pleurisy. The physician decides\nto administer lidocaine (a local anesthetic agent) to\nwhich of the following nerves?",
      a: [
        "Intercostal nerves",
        "Phrenic nerve",
        "Vagus nerve",
        "Cardiopulmonary",
        "Recurrent laryngeal nerve",
      ],
      correct: 0,
      explanation:
        "Pleuritic pain is due to inflammation of the\nparietal pleura which is mainly supplied by the intercostal nerves. The phrenic nerve only supplies the\ncentral and diaphragmatic parts of the visceral pleura\nwhich are not typically affected and not amenable to\nnerve blocks. The vagus nerve supplies visceral efferents and afferents to the lungs and visceral pleura but\nnot the parietal pleura. Likewise the cardiopulmonary\nnerves do not carry somatic afferent fibers. The recurrent laryngeal nerve is a branch of the vagus nerve\nand does not innervate the lungs.",
    },
    {
      q: "A 3-week-old prematurely born male neonate\nwith respiratory distress is found to have a systolic\nmurmur crossing the S2 heart sound. The murmur is\naccompanied by a thrill, is best heard below the left\nclavicle, and radiates over the chest. On a chest radio\ngraph, the cardiac silhouette is enlarged and pulmonary\nvascular markings are increased. Echocardiography\nreveals a congenital defect. A video-assisted thoraco\nscopic procedure is considered for correction of the\nunderlying defect. Which of the following structures is\nthe most common site of injury?",
      a: [
        "Left vagus nerve",
        "Right vagus nerve",
        "Left phrenic nerve",
        "Right phrenic nerve",
        "Left recurrent laryngeal nerve",
      ],
      correct: 4,
      explanation:
        "Due to the long looping course of the left\nrecurrent laryngeal nerve and its location in the superior mediastinum it is more easily damaged during\nthoracoscopic procedures than the other nerves,\nwhich are more posterior and protected from introduction of the thoracoscope. Increased pulmonary\nvascular markings indicate the presence of a left-toright shunt. A systolic murmur crossing the S2 heart\nsound characterizes the continuous (machinery)\nmurmur heard in PDA. Prematurity increases the risk\nof a PDA. The blood shunt through the patent duct\nincreases with physiological decline in the pulmonary\nartery pressure towards the end of first month of life.",
    },
    {
      q: "A 27-year-old man is stabbed in the chest during\na bar fight and is taken to the emergency department.\n\nHe is conscious with tachypnea, hypotension, and\npleuritic chest pain. On physical examination there is\njugular venous distension, right-sided hyper resonance\nto percussion, and decreased breath sounds over the\nright lung. A radiograph of the chest shows decreased\nvascular markings on the right side and a tracheal\ndeviation to the left. Which of the following is the most\nlikely diagnosis?",
      a: [
        "Spontaneous pneumothorax",
        "Tension pneumothorax",
        "Cardiac tamponade",
        "Lung contusion",
        "Pneumonia",
      ],
      correct: 1,
      explanation:
        "Any pneumothorax may cause hyperresonance to percussion, decrease breath sounds, and\nreduce vascular markings, but tracheal deviation to\nthe opposite side accompanied by distended jugular\nveins can only be caused by a tension pneumothorax.\nCardiac tamponade will cause muffled heart sounds,\ndecreased blood pressure, and distended jugular\nveins. Pneumonia will not cause tracheal deviation or\nhyperresonance but lung dullness to percussion. Lung\ncontusion will not cause any of the above signs but\nmay produce some soft tissue edema and minor lung\ninflammation. Tracheal deviation to the opposite side\nof the affected lung is a result of a tension pneumothorax. Spontaneous pneumothorax normally causes\ntracheal deviation to the same side of the collapsed\nlung to fill the pleural space now unused by the lung.\nTension pneumothorax is typically caused by injuries\nto the chest wall that cause defects in either the parietal or visceral pleurae.",
    },
    {
      q: "A 72-year-old patient is admitted to the emer\ngency department with tight, burning substernal chest\npain. An ECG reveals a myocardial infarction of the\ncardiac muscle forming the diaphragmatic surface of\nthe heart. Which of the following coronary arteries is\nmost likely occluded in this patient?",
      a: [
        "Left anterior descending coronary artery",
        "Left circumflex coronary artery",
        "Left main coronary artery",
        "Right coronary artery",
        "Acute marginal branches",
      ],
      correct: 3,
      explanation:
        "The right and left main coronary arteries\narise directly from the root of the aorta. The left main\ncoronary artery divides into the anterior interventricular (left anterior descending: LAD) and circumflex\ncoronary artery. The anterior interventricular artery\nsupplies the anterior 2/3 of the interventricular\nseptum through septal perforating branches and\nthe anterior wall of the left ventricle with diagonal\nbranches. The circumflex coronary artery supplies\nmost of the anterior and left lateral surfaces of the\nheart via obtuse marginal branches. The right coronary artery gives rise to the artery to the SA node and\nartery to the AV node. It also gives rise to the coronal\nartery supplying the area of the subpulmonary infundibulum or anterior ventricular wall and to the acute\nmarginal artery that supplies the lower portion (closer\nto the diaphragm) of the anterior ventricular wall.\nIn 85-90% of individuals, the right coronary artery\ngives rise to the posterior interventricular (posterior\ndescending) artery. This artery supplies the posterior\nor diaphragmatic surface of the heart.",
    },
    {
      q: "A newborn boy is examined due to his cyanosis.\nOn radiographic examination his right ventricle is\nenlarged and his heart shows a characteristic boot\nshape. Which of the following embryological events\nmost likely underlies this condition?",
      a: [
        "Abnormal neural crest cell migration",
        "Endocardial cushion defect",
        "Aortic arch constriction",
        "Pulmonary hypertension",
        "Abnormal primitive heart tube looping",
      ],
      correct: 0,
      explanation:
        "The embryological basis of the combination\nof lesions is anterosuperior deviation (malalignment)\nof the developing outlet ventricular septum (subpulmonary infundibulum) and hypertrophied septoparietal trabeculations. The deviation of the muscular\noutlet septum (not to be confused with the aorticopulmonary septum) is also responsible for creating\nthe malalignment type of ventricular septal defect and\nresults in the aortic override. The associated hyper\n\ntrophy of the right ventricular myocardium is the\nhemodynamic consequence of the anatomical lesions\ncreated by the deviated outlet septum. The cause of\nthe abnormal anterosuperior deviation of the outlet\nventricular septum is the abnormal neural crest cell\nmigration. In contrast an endocardial cushion defect\nwill be responsible for defects in the atrioventricular\nseptum and atrioventricular valves. The endocardial\ncushion defects do not produce cyanosis.",
    },
  ],
};
