import React, {useState} from "react";

type Props = {
    questionId: String,
    questionText: String,
    answerHtml: String,
}

const Question = ({ questionId, questionText, answerHtml }: Props) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="space-y-5 " key={questionId}>
            <div className="bg-slate-100 rounded-xl p-4 dark:bg-slate-800 text-white w-full text-center
                    font-bold cursor-pointer"
                 onClick={() => {
                     setIsOpen(!isOpen)
                 }}>
                {questionText}
            </div>
            {isOpen && <div className="space-y-5">{answerHtml} </div>}
        </div>
    )
}

export default Question