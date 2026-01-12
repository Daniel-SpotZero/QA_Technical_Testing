# QA Developer Technical Assessment

**45 minutes • 4 modules • Hands-on coding**

## Quick Start

```bash
# 1. Clone and create branch
git clone <repo-url>
cd Technical_Testing
git checkout -b assessment/your-name

# 2. Install dependencies (5 min)
cd Programming/javascript && npm install
cd ../python && pip install -r requirements.txt
cd ../../React_Testing && npm install
cd ..

# 3. Start coding! (40 min)
# Run demos to see functions in action:
cd Programming/javascript && node src/demo.js
cd ../python && python3 src/demo.py
```

## Modules

### 1. Programming Skills (15 min)
**JavaScript (8 min)**: Write tests in `Programming/javascript/tests/utils.test.js`
- Run demo: `node src/demo.js`
- Run tests: `npm test`
- Find bugs and write tests to expose them

**Python (7 min)**: Write tests in `Programming/python/tests/test_calculator.py`
- Run demo: `python3 src/demo.py`
- Run tests: `pytest`
- Find bugs and write tests to expose them

### 2. React Testing (15 min)
**Bug Hunt (10 min)**: Find and fix bugs in the Todo app
- Run app: `npm run dev`
- Document in `React_Testing/BUG_REPORT.md`

**Quick Tests (5 min)**: Write tests in `React_Testing/src/__tests__/quick-tests.test.jsx`
- Run: `npm test`

### 3. C Bonus (5 min - optional)
Debug `Programming/C-Bonus-Optional/buggy_program.c`
- Compile: `gcc -Wall buggy_program.c -o buggy_program`
- Find memory leaks, off-by-one errors, and other issues

## Submit

```bash
git add .
git commit -m "Assessment complete"
git push origin assessment/your-name
```

## Scoring
- Module 1 (Programming): 10 points
- Module 2 (React Testing): 10 points  
- Module 3 (C Bonus): 5 bonus points
- **Pass**: 12/20 (60%)

## Tips
- Instructions are in each file as comments
- Focus on completion over perfection
- Time-box each module strictly
- Run tests to verify your work

**Prerequisites**: Node.js 16+, Python 3.8+, Git
# QA_Technical_Testing
