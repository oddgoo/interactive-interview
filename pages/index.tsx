import type {NextPage} from 'next'
import Head from 'next/head'
import React, {useState} from 'react';

const Home: NextPage = () => {

    const [questionOpen, setQuestionOpen] = useState(false)
    const [questionOpen2, setQuestionOpen2] = useState(false)

    return (
        <div className="">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="w-1/2  justify-center text-left m-auto">
                <h1 className="text-4xl font-bold my-5 w-full text-center">
                    Interview with Cuauh "oddgoo" Moreno
                </h1>

                <div className="space-y-5 ">
                    <div className="bg-slate-100 rounded-xl p-4 dark:bg-slate-800 text-white w-full text-center font-bold"
                         onClick={() => {
                             setQuestionOpen(!questionOpen)
                         }}>What was the inspiration for the game's concept and story?
                    </div>
                    {questionOpen &&
                    <div className="space-y-5">

                        <p>The original Amberial (2007) has a curious story.</p>
                        <p>I wanted to make a web game about breaking the 4th wall, literally.</p>
                        <p>And as a web game contained in a window, I envisioned a simple marble character literally
                            pushing against the walls of the browser,
                            trying to use momentum, springs and strings to get enough force to break out.</p>

                        <img className="m-auto shadow-xl shadow-gray-600 mb-10 rounded-2xl" width={380} alt={""}
                            src={"https://picon.ngfiles.com/378000/flash_378790_card.webp?f1675351127"}/>

                        <p>So I started making that, but before I got to coding the actual wall breaking mechanics, I
                            realised the game was fun enough as it was, and my focus shifter to building environments
                            and soundscapes to create a proper feeling of adventure and traversal.
                        </p>
                        <p>The concept itself is heavily inspired by games like Marble Madness, Within a Deep Forest and
                            Super Monkey Ball, where you cannot jump and all the focus on the environment and level
                            design. In games like these, you are not only seeing where you can land and what obstacles
                            to avoid, but you get to savour the angle of each bounce, the momentum against every gap.
                        </p>
                        <p>After the first Amberial, each new version has been an evolution of the concept heavily
                            guided by player feedback. This all culminates in Amberial Dreams, which has everything each
                            previous game had.
                        </p>
                        <p>As for the story, there has always been some environmental narrative in the background, but
                            Amberial Dreams takes a huge leap and presents a story that evolves from and complements the
                            game concepts and environments, giving life to abstract ideas.
                        </p>
                    </div>}
                </div>

                <div className="space-y-5 my-8">
                    <div className="bg-slate-100 rounded-xl p-4 dark:bg-slate-800 text-white w-full text-center font-bold"
                         onClick={() => {
                             setQuestionOpen2(!questionOpen2)
                         }}>How did you come up with the game's unique mechanics and features?
                    </div>
                    {questionOpen2 &&
                        <div className="space-y-5">

                            <p>Amberial is our life-long project to take everything that we like about platformers, and make an evolving universe that's all about creativity and the pure joy of rolling and bouncing around.
                                Where there is a lack of jumping, your avatar makes up on speed and bouncing around. This places a unique focus on the level design; we want players to develop an intimate relation with its physics, the geometry and all the mechanisms, creating a strong sense of place.
                            </p>
                        </div>}
                </div>

            </main>

            <footer className="flex h-24 w-full items-center justify-center border-t">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://www.oddgoo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Interview coded by www.oddgoo.com
                </a>
            </footer>
        </div>
    )
}

export default Home
