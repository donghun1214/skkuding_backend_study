# skkuding_backend_study

## 2주차 Node.js : 간단한 judger 만들어보기

서버를 실행하고 http://localhost:3000에 접속하면 아래 사진처럼 파이썬 코드를 보냈을 때, local에서 코드를 실행하고 결과값을 돌려주도록 하면 됩니다.
![image](https://github.com/user-attachments/assets/4c6ab8fe-6207-4482-a634-3fee2cf9855d)

- http 모듈로 서버를 만들어보세요. 포트 번호는 3000번으로 지정해주세요.
- 요청 메서드는 POST, 코드 데이터는 body에 담아서, 그리고 URL은 /code로 설정해주세요.
- 요청이 오면, 코드를 읽은 다음 fs 모듈을 사용하여 파이썬 파일을 생성해주세요. 그 다음, node.js에 있는 child_process 모듈을 이용하여 command(ex.python3 <filename>)를 실행시킨뒤, 출력을 응답에 담아 보낼 수 있도록 해주세요. (양식은 자유입니다.)
