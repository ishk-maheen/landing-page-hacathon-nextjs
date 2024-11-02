import Image from "next/image"
import Building from "../data/Buillding.png"
import Aboutone from "../data/Rectangle 8.png"
import Abouttwo from "../data/Rectangle 10.png"
import Aboutthree from "../data/Rectangle 9.png"
import Project1 from "../data/Rectangle 12.png"
import Project2 from "../data/image 15.png"
import Project3 from "../data/image 16.png"
import Project4 from "../data/image 17.png"
import Project5 from "../data/image 18.png"
import Project6 from "../data/Rectangle 17.png"
import contactImage from "../data/image 12.png"

export default function Main() {
    return (
        <div className="mainbody">
            <div className="main">
                <div className="mainHeading">
                    <h1 className="project">PROJECT</h1>
                    <h1 className="lorem">Lorem</h1>
                    <div className="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="#000000" fill="none">
                            <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color="#000000" fill="none">
                            <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" stroke-waidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="text">
                        01 / 02
                    </div>
                </div>
                <div className="buildingImage">
                    <div className="building">
                        <button className="veiwProject">
                            <p>VIEW PROJECTS &nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <Image
                            src={Building}
                            alt="buildingImage"
                            width={770}
                            height={829}
                        />
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="aboutImages">
                    <div className="images">
                        <div className="imgone">
                            <Image
                                src={Aboutone}
                                alt="aboutImageOne"
                                width={270}
                                height={265}
                            />
                        </div>
                        <div className="imgtwo">
                            <Image
                                src={Abouttwo}
                                alt="aboutImageTwo"
                                width={270}
                                height={140}
                            />
                        </div>
                    </div>
                    <div className="imgthree">
                        <Image
                            src={Aboutthree}
                            alt="aboutImageTwo"
                            width={270}
                            height={345}
                        />
                    </div>
                </div>
                <div className="aboutText">
                    <h2>About Us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laborum magnam itaque voluptatibus dignissimos veniam, corrupti consectetur ipsam temporibus possimus ratione placeat delectus eligendi autem dolorum eius recusandae quos, provident rem? A exercitationem eaque minus quaerat explicabo aperiam itaque perspiciatis iste adipisci earum, aut nostrum cum illo deleniti sapiente consectetur
                    </p>
                    <button className="readMore">
                        READ MORE &nbsp;&nbsp;&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="statements">
                <h2>Main Focus/Mission Statement</h2>
                <div className="statementContainer">
                    <div className="one">
                        <h3>1</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae non eveniet nisi doloremque, deserunt numquam? Voluptates quis temporibus voluptatem alias.</p>
                    </div>
                    <div className="two">
                        <h3>2</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae non eveniet nisi doloremque, deserunt numquam? Voluptates quis temporibus voluptatem alias.</p>
                    </div>
                </div>
            </div>
            <div className="ourProjects">
                <h2>Our Projects</h2>
                <div className="projectImages">
                    <div className="textOnImage">
                        <h3>Sample</h3>
                        <h3>Project</h3>
                        <p>View More
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
                                <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </p>
                    </div>
                    <Image
                        src={Project1}
                        alt="projectImageOne"
                        width={665}
                        height={255}
                        className="project1"
                    />
                    <Image
                        src={Project2}
                        alt="projectImageTwo"
                        width={665}
                        height={255}
                        className="project2"
                    />

                    <Image
                        src={Project3}
                        alt="projectImageThree"
                        width={345}
                        height={255}
                        className="project3"
                    />
                    <Image
                        src={Project4}
                        alt="projectImageFour"
                        width={500}
                        height={255}
                        className="project4"
                    />
                    <Image
                        src={Project5}
                        alt="projectImageFive"
                        width={445}
                        height={255}
                        className="project5"
                    />
                    <Image
                        src={Project6}
                        alt="projectImageSix"
                        width={665}
                        height={255}
                        className="project6"
                    />
                <button className="allProjects">
                    ALL PROJECTS &nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
                        <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                </div>
            </div>
            <div className="contact">
                <div className="form">
                    <form>
                        <h2>Contact Us</h2>
                        <input type="text" placeholder="Name"></input><br />
                        <input type="number" placeholder="Phone Number*" required></input><br />
                        <input type="e-mail" placeholder="E-mail*" required></input><br />
                        <input type="text" placeholder="Interested In" required></input><br />
                        <textarea name="message" placeholder="Message*"></textarea>
                        <button className="sendEmail" type="submit">
                            SEND EMAIL
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
                                <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="contactImage">
                    <Image
                        src={contactImage}
                        alt="contactImage"
                        width={790}
                        height={369}
                    />
                </div>
            </div>

        </div>
    )
}