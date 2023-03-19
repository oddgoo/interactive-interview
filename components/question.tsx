import React, {useState} from "react";
import markdownStyles from './markdown-styles.module.css'

type Props = {
    questionId: string,
    questionText: string,
    answerHtml: string,
}

export default function Question ({ questionId, questionText, answerHtml }: Props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="space-y-1 my-8 ">
            <div className=" bg-slate-100 rounded-xl p-4 dark:bg-slate-800 text-white text-center
                    font-bold cursor-pointer shadow-lg shadow-inner"
                 onClick={() => {
                     setIsOpen(!isOpen)
                 }}>
                {questionText}
            </div>
            <div className="">
                <div className={markdownStyles['markdown']} style={{ display: (isOpen ? 'block' : 'none') }}
                                dangerouslySetInnerHTML={{ __html: answerHtml }}>
                </div>
            </div>
        </div>
    )

}