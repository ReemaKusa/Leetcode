class Solution {
public:
    int maxDiff(int num) {
        string strNum = to_string(num);

        string maxNum = strNum;
        for (char& ch : maxNum) {
            if (ch != '9') {
                char target = ch; 
                for (char& c : maxNum) {
                    if (c == target) {
                        c = '9';  
                    }
                }
                break; 
            }
        }

        string minNum = strNum;
        if (minNum[0] != '1') {

            char target = minNum[0];
            for (char& c : minNum) {
                if (c == target) {
                    c = '1';  
                }
            }
        } else {

            for (int i = 1; i < minNum.size(); i++) {
                if (minNum[i] != '0' && minNum[i] != '1') {
                    char target = minNum[i];
                    for (char& c : minNum) {
                        if (c == target) {
                            c = '0';  
                        }
                    }
                    break; 
                }
            }
        }
        
        int maxValue = stoi(maxNum);
        int minValue = stoi(minNum);
        return maxValue - minValue;
    }
};
