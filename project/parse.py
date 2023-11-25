import re
import json
from  PyPDF2 import PdfFileReader

pdf_path = "./project/川高公司2023年机电序列岗位专业知识测评理论复习题库.pdf"
pdf_content = f""
pdf_content_a = f""
pdf_content_b = f""
pdf_content_c = f""
pdf_content_d = f""

qa_list = []

def matchSingleQA(text):
    pattern = r'\d+ \. (.+?)（\s*([A-D]+)\s*）(.+?)(A、.+?)(B、.+?)(C、.+?)(D、.+?)\n'
    matchs = re.findall(pattern, text, re.DOTALL)

    for match in matchs:
        question, correctAnswer, leaveQuestion, answerA, answerB, answerC, answerD = match

        qaobj= {
            "question": question + '（  ）' + leaveQuestion,
            "answer": [
                answerA,
                answerB,
                answerC,
                answerD + '\n'
            ],
            "correct_answer": correctAnswer,
            "multiple_choice": len(correctAnswer) > 1
        }
        qa_list.append(qaobj)

    with open('single_select_data.json', 'w', encoding='utf-8') as file:
        json.dump(qa_list, file, ensure_ascii=False)

def matchMultiQA(text):
    pattern = r'\d+ \. (.+?)（\s*(.*)\s*）(.*?)\n(A、.+?)\n(B、.+?)\n(C、.+?)\n(D、.+?)\n'
    matchs = re.findall(pattern, text, re.DOTALL)

    for match in matchs:
        question, correctAnswer, leaveQuestion, answerA, answerB, answerC, answerD = match

        qaobj= {
            "question": question + '（  ）' + leaveQuestion,
            "answer": [
                answerA,
                answerB,
                answerC,
                answerD + '\n'
            ],
            "correct_answer": correctAnswer,
            "multiple_choice": len(correctAnswer) > 1
        }
        qa_list.append(qaobj)

    with open('multiple_select_data.json', 'w', encoding='utf-8') as file:
        json.dump(qa_list, file, ensure_ascii=False)

def matchJudgeQuestion(text):
    pattern = r'/\d+ \. ((.)*)\s*。\s*（(.*)）\n/'
    matchs = re.findall(pattern, text, re.DOTALL)

    print(matchs)
    # for match in matchs:


with open(pdf_path,'rb') as f:
    render = PdfFileReader(f)
    number_of_pages = render.getNumPages()

    for page_num in range(number_of_pages):
        # 获取当前页内容
        page = render.getPage(page_num)
        text = page.extractText()


        # 单选 多选处理
        if page_num <= 80:
            pdf_content_a += text
        elif page_num <= 147:
            pdf_content_b += text
        elif page_num <= 195:
            pdf_content_c += text 
        else:
            pdf_content_d += text

print('pdf_content', pdf_content_d)
# matchSingleQA(pdf_content_a + pdf_content_b)
# matchMultiQA(pdf_content_c)
matchJudgeQuestion(pdf_content_d)