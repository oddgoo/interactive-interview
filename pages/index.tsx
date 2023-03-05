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
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="w-1/2  justify-center text-left m-auto">
                <h1 className="text-4xl font-bold my-5 w-full text-center">
                    Interview with Cuauh "oddgoo" Moreno
                </h1>
                {allQuestions.map((question) => (
                    <Question
                              key = {question.id}
                              questionId={question.id}
                              questionText={question.question}
                              answerHtml={question.formattedContent}
                    />
                ))}

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
