import type {NextPage} from 'next'
import Head from 'next/head'
import React, {useState} from 'react';
import Question from '../components/question'
import QuestionContent from '../interfaces/QuestionContent'
import { getAllQuestions } from '../lib/api'

type Props = {
    allQuestions: QuestionContent[]
}

const Home = ({ allQuestions }: Props) => {

    return (
        <div className="">
            <Head>
                <title>Interview with Cuauhtemoc "oddgoo" Moreno</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {/*<header className="w-full">*/}
            {/*    <div className="w-full h-[210px] bg-[url('https://amberial.com/img/separator_bottom.png')]">*/}
            {/*    </div>*/}
            {/*</header>*/}
            <header className="flex flex-col w-full items-center">
                <div className="text-center w-full mx-auto my-5">
                    <a href="https://www.amberial.com"  className="text-center mx-auto">
                        <img src="https://amberial.com/img/logos/amberial.png" className="h-24 w-auto mx-auto" />
                    </a>
                </div>
                <h1 className="text-4xl font-bold mt-6 mb-6 w-full text-center text-amber-300 drop-shadow">
                    Interview with Cuauh "oddgoo" Moreno
                </h1>

            </header>

            <main className="sm:w-1/2 p-1 justify-center text-left m-auto">

                {allQuestions.map((question) => (
                    <Question
                              key = {question.id}
                              questionId={question.id}
                              questionText={question.question}
                              answerHtml={question.formattedContent}
                    />
                ))}


                <iframe className="mx-auto mt-16 mb-32" src="https://store.steampowered.com/widget/917140/" frameBorder="0" width="580"
                        height="190"></iframe>
            </main>


            {/*<footer className="flex h-24 w-full items-center justify-center">*/}
            {/*    <a*/}
            {/*        className="flex items-center justify-center gap-2 text-white"*/}
            {/*        href="https://www.oddgoo.com"*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        Interview coded by www.oddgoo.com*/}
            {/*    </a>*/}
            {/*</footer>*/}
        </div>
    )
}

export const getStaticProps = async () => {
    const allQuestions = await getAllQuestions([
        'id',
        'question',
        'content',
        'formattedContent'
    ])

    return {
        props: { allQuestions },
    }
}

export default Home
