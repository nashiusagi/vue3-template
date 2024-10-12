# テスト戦略

| atomic design layer | end-to-end test | integration test | unit test | static test | 
| :-----------------: | :-------------: | :--------------: | :-------: | :---------: | 
| pages               | o               |                  |           | o           | 
| layouts             | o               | o                |           | o           | 
| organisms           |                 | o                |           | o           | 
| atoms               |                 | o                |           | o           | 
| composables         |                 |                  | o         | o           | 

## テストフレームワーク

| testing                      | framework  |
| :--------------------------: | :--------: |
| e2e test                     | playwright |
| integration (component) test | vitest     |
| unit test                    | vitest     |
| static test                  | eslint     |
