import React from "react";

const AboutMe = props => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Hello, viewer!</h1>
        <p className="lead">
          This page is just here to explain a little bit about me (Matthew
          Solomon). My background, some hobbies of mine, etc...
        </p>
        <hr className="my-4" />
        <div className="aboutMe  ">
          <div className="card " style={{ width: "18rem" }}>
            <img
              style={{ minHeight: "50%" }}
              className="card-img-top"
              src="http://p4cdn4static.sharpschool.com/UserFiles/Servers/Server_15190/Image/How-To-Write-Your-Autobiography.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title aboutMeCardTitle">
                <strong>Background</strong>
              </h5>
              <hr className="my-4" />
              <p className="card-text">
                Click below to learn a little bit about my life
              </p>
              <br />
              <button
                class="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapse1"
                aria-expanded="false"
                aria-controls="collapse1"
              >
                Let's see it!
              </button>
              <p />
              <div class="collapse" id="collapse1">
                <div class="card card-body">
                  <ul>
                    <li>Born and raised in Cleveland OH</li>
                    <li>One older brother, no sisters</li>
                    <li>
                      Didn't enjoy highschool while growing up, but did enjoy
                      college for the time I went
                    </li>
                    <li>
                      Developed a passion for coding in 2016 when introduced to
                      it by a friend of mine
                    </li>
                    <li>
                      Left for Marine Boot Camp 3 days after graduating high
                      school, instantly regretted not taking one last summer
                    </li>
                    <li>
                      Spent 5 years in the service and traveled to around 10-15
                      countries by the end of it all
                    </li>
                    <li>
                      Was stationed in California which is how I ended up in San
                      diego, I didn't want to go back to nasty weather in OH
                    </li>
                    <li>
                      That being said...I do miss snow sometimes, as well as
                      thunderstorms
                    </li>
                    <li>
                      I have a girlfriend named Ashley who I've been with for 3
                      years
                    </li>
                    <li>
                      We have 2 golden retrievers together and they're awesome
                    </li>
                    <li>
                      Anything else you want to know just shoot me a message! I
                      can be reached at 0791msolomon@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card " style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title aboutMeCardTitle">
                <strong>Technologies I Use</strong>
              </h5>
              <hr className="my-4" />
              <p className="card-text">
                Click below to see some of the technologies I've been using so
                far.
              </p>
              <button
                class="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                Let's see it!
              </button>
              <p />
              <div class="collapse" id="collapse2">
                <div class="card card-body">
                  <ul>
                    <li>MongoDB</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>React/Redux</li>
                    <li>JavaScript</li>
                    <li>Robomongo/ Robo 3T</li>
                    <li>JSON Lint</li>
                    <li>jQuery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card " style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://image.shutterstock.com/image-vector/hobbies-icons-set-vol1-260nw-456583258.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title aboutMeCardTitle">
                <strong>Some of my hobbies</strong>
              </h5>
              <hr className="my-4" />
              <p className="card-text">
                Click below to see what I do in my spare time.
              </p>
              <br />
              <button
                class="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                Let's see it!
              </button>
              <p />
              <div class="collapse" id="collapse3">
                <div class="card card-body">
                  <ul>
                    <li>Play with my 2 golden retrievers</li>
                    <li>Exercise with my girlfriend Ashley</li>
                    <li>Go to the beach (with golden retrievers)</li>
                    <li>Play a little bit of video games when I have time</li>
                    <li>Expand knowledge in web development!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
