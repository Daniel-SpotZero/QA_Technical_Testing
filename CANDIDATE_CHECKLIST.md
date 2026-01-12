# Quick Start

**Time: 50 minutes total**

## Setup (5 min)
```bash
git checkout -b assessment/your-name
cd Programming/javascript && npm install
cd ../python && pip install -r requirements.txt
cd ../../React_Testing && npm install
```

## Modules (45 min)

### 1. Programming (20 min)
- JS: Write tests in `Programming/javascript/tests/utils.test.js`
  - Run demo: `node src/demo.js`
  - Find bugs and write tests that expose them
- Python: Write tests in `Programming/python/tests/test_calculator.py`
  - Run demo: `python3 src/demo.py`
  - Find bugs and write tests that expose them

### 2. React (15 min)
- Find and fix bugs in the Todo app
- Document issues in `React_Testing/BUG_REPORT.md`
- Write tests in `React_Testing/src/__tests__/quick-tests.test.jsx`

### 3. C Bonus (5 min - optional)
- Debug `Programming/C-Bonus-Optional/buggy_program.c`
- Find memory leaks and logic errors

## Submit
```bash
git add . && git commit -m "Assessment complete"
git push origin assessment/your-name
```

**Instructions are in the files. Run demo files to see functions in action!**
