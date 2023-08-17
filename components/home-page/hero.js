import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {

    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src='/images/site/rose.png' alt='An image showing Rose' width={300} height={300}/>
        </div>
        <h1>Hi, I'm Rose</h1>
        <p>
            I plog about web development - especially frontend frameworks like React.
        </p>
    </section>
}

export default Hero;