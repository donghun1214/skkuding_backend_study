FROM node

WORKDIR /app

# 3. package.json과 package-lock.json 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 프로젝트 파일 전체 복사
COPY . .

# 6. TypeScript 컴파일 (tsconfig.json이 있어야 합니다)
RUN npm run build

# 7. 애플리케이션 실행
CMD ["npm", "start"]
