import React, {useState} from "react";

type Props = {
    questionId: string,
    questionText: string,
    answerHtml: string,
}

export default function Question ({ questionId, questionText, answerHtml }: Props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="space-y-5 ">
            <div className="bg-slate-100 rounded-xl p-4 dark:bg-slate-800 text-white w-full text-center
                    font-bold cursor-pointer"
                 onClick={() => {
                     setIsOpen(!isOpen)
                 }}>
                {questionText}
            </div>
            {isOpen && <div className="space-y-5"
                            dangerouslySetInnerHTML={{ __html: answerHtml }}
            >
            </div>}
        </div>
    )

}