import '../css/About.css'

export default function About() {
  return (
      <div className='About'>
        <h1>About</h1>
        <div className='about-content'>
          <h2>Welcome!</h2>
          <p>
            I'm a CS student at the UW-Madison. My toolkit consists
            of tools, such as calculators and visualizers, that I
            made myself or I found online that I thought
            were notably useful when working on my university assignments.
          </p>
          <p>
            Feel free to check them out! I compiled this toolkit with the
            goal of providing a centralized point for students to easily
            reach for various helper tools.
          </p>
          <p>
            You can check out my other work on
            my <a href='https://github.com/redrossa'>Github</a> page.
          </p>
        </div>
      </div>
  );
}
