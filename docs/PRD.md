# Health 3.0 - 个人健康数据分析系统

## 1. 产品概述

### 1.1 产品定位
基于本地运行的个人健康数据分析系统，通过分析用户的健康相关数据，提供个性化的健康分析和建议。

### 1.2 使用场景
- 单一用户的本地数据分析
- 通过本地wifi在PC、手机、平板浏览器访问
- 基于静态数据的离线分析系统

## 2. 数据源规范

### 2.1 数据文件
- PersonalProfile.csv：用户个人信息（月度更新）
- DailyLifeRecord.csv：起居饮食作息数据（月更新1-4次）
- OutdoorWalk.csv：竞走运动数据（运动日更新，约每月15次）
- AutoSleep.csv：睡眠数据（与运动数据同步更新）
- HealthMeasurementData.csv：体重测量数据（与运动数据同步更新）
- HeartWatch.csv：心率数据（与运动数据同步更新）

### 2.2 数据更新机制
- 数据周期：2024年9月1日起
- 更新方式：人工更新至public目录
- 体重数据特殊说明：基于HealthMeasurementData目录下的截图识别更新

## 3. 功能需求

### 3.1 数据处理模块
- 原始数据保护
  * CSV文件只读处理，保持原始数据完整性
  * 建立数据处理日志，记录每次处理过程
  * 数据备份机制

- 数据标准化处理
  * 时间格式统一：统一转换为标准时间格式
  * 数值单位统一：确保所有测量单位一致
  * 空值处理规则：记录但不填充空值
  * 异常值标记：建立异常值判定标准，标记但不删除

- 数据验证规则
  * 数据完整性检查：必填字段验证
  * 数据范围验证：数值范围合理性检查
  * 数据一致性验证：跨文件数据关联验证
  * 时间序列完整性验证

- 数据关联分析
  * 建立数据关联映射表
  * 定义跨文件数据关联规则
  * 确保数据时间戳对齐

### 3.2 分析功能
- 竞走运动分析
  * 配速分析
    - 平均配速趋势图
    - 最快配速记录
    - 配速稳定性分析
    - 与目标配速的对比
  * 心率指标分析
    - 最高心率记录及出现时机
    - 运动强度评估（基于心率）
    - 心率区间分布图
      * 极限区间（161+次/分）：高强度训练区，建议每次持续时间不超过1分钟，需要充分热身和恢复
      * 无氧耐力区间（149-160次/分）：提升心肺功能区，建议每周1-2次，累计时间不超过20分钟
      * 有氧耐力区间（137-148次/分）：基础耐力训练，建议作为主要训练区间，每次30-45分钟
      * 燃脂区间（125-136次/分）：脂肪燃烧区，适合长时间训练，建议40-60分钟
      * 热身区间（<124次/分）：基础热身区，适合作为运动开始和结束阶段
    - 心率恢复能力评估
      * 即时恢复能力（运动结束后1分钟）
        - 优秀：心率下降>30次/分
        - 良好：心率下降20-30次/分
        - 一般：心率下降10-20次/分
        - 需改善：心率下降<10次/分
      * 持续恢复能力（运动结束后2-5分钟）
        - 优秀：5分钟内恢复至热身区间
        - 良好：5分钟内恢复至燃脂区间
        - 一般：5分钟内恢复至有氧区间
        - 需改善：5分钟后仍在有氧区间以上
  * 运动表现评估
    - 运动时长合理性分析
    - 运动频率评估
    - 疲劳度评估
    - 肌肉流失风险评估
  * 健康指标关联
    - 结合个人体重、年龄等信息
    - 制定个性化运动目标
    - 提供健康风险评估

- 健康指标分析
  * 体重变化趋势
  * 睡眠质量评估
  * 心率变化分析
  * BMI指数计算与追踪

- 生活习惯分析
  * 饮食规律性分析
  * 作息时间评估

### 3.3 输出功能
- 数据可视化中心
  * 实时概览面板
    - 健康指标仪表盘
      * 运动达标进度
      * 营养均衡状态
      * 作息规律评分
      * 体重变化趋势
    - 每日活动追踪
      * 运动记录时间轴
      * 饮食记录时间轴
      * 作息记录时间轴
  
  * 深度分析图表（支持导出）
    - 运动分析视图
      * 运动量趋势
      * 心率分布分析
      * 配速进展分析
    - 营养分析视图
      * 营养素摄入分布
      * 饮食规律性分析
      * 营养均衡评估
    - 作息分析视图
      * 睡眠质量趋势
      * 作息规律性分析
      * 生活节律评估
    - 多维关联分析
      * 运动-睡眠关联
      * 饮食-体重关联
      * 作息-表现关联
    - 心率作息关联视图
      * 24小时心率变化曲线
      * 活动心率分布
      * 压力水平时间分布
      * 生理节律分析图

- 智能报告系统
  * 日常简报
    - 今日健康概览
    - 营养摄入总结
    - 运动完成情况
    - 作息质量评估
  
  * 周度报告
    - 本周达标情况
    - 营养均衡分析
    - 运动进展评估
    - 作息规律分析
    - 下周计划建议
  
  * 月度综合报告
    - 健康指标总览
      * 运动达标率
      * 营养均衡度
      * 作息规律性
      * 体重变化趋势
    - 深度分析告
      * 运动表现分析
      * 营养摄入分析
      * 作息规律分析
      * 健康风险评估
    - 改进建议方案
      * 运动调整建议
      * 营养优化建议
      * 作息改进建议
      * 生活方式建议

- 营养规划系统
  * 智能营养方案
    - 基于健康报告的个性化建议
    - 结合运动计划的营养调整
    - 适应作息规律的用餐安排
  
  * 实施计划
    - 每日营养计划
      * 基于作息的用餐时间
      * 根据运动安排的营养补充
      * 个性化食材推荐
    - 周度营养规划
      * 均衡营养配比
      * 食材多样性建议
      * 实用采购清单
    - 月度营养策略
      * 营养目标设定
      * 阶段性调整建议
      * 长期改进方案

- 数据导出中心
  * 可视化图表导出
    - PNG格式（适合分享）
    - PDF格式（适合存档）
  * 分析报告导出
    - PDF格式（完整报告）
    - Word格式（可编辑版本）
  * 营养计划导出
    - PDF格式（打印友好）
    - Excel格式（可编辑计划）
    - 移动端格式（便于随身查看）

### 作息数据分析维度
1. **时间规律性分析**
   - 作息时间稳定性评估
     * 起床时间波动范围
     * 就寝时间波动范围
     * 作息规律性得
   - 生理时钟同步度分析
     * 昼夜规律评估
     * 生理节律匹配度
   - 黄金时间利用率评估
     * 早晨黄金时间利用
     * 晚间黄金时间利用

2. **睡眠质量分析**
   - 睡眠时长达标率
     * 工作日睡眠时长
     * 周末睡眠时长
     * 睡眠补偿情况
   - 睡眠时间规律性
     * 入睡时间稳定性
     * 醒来时间稳定性
   - 午休效果评估
     * 午休时长适当性
     * 午休时间规律性

3. **饮食规律性分析**
   - 正餐时间稳定性
     * 早餐时间规律度
     * 午餐时间规律度
     * 晚餐时间规律度
   - 进餐间隔合理性
     * 餐间间隔评估
     * 夜间进食情况
   - 用餐行为评估
     * 进食时长分析
     * 用餐环境评估

4. **活动规律性分析**
   - 工作时间分布
     * 工作时间规律性
     * 工作强度分布
   - 运动时间合理性
     * 运动时间选择
     * 运动频率评估
   - 户外活动评估
     * 日照接触时长
     * 活动时间分布

5. **生活平衡度分析**
   - 作息平衡指数
     * 工作休息比例
     * 活动静息比例
   - 时间分配评估
     * 必要活动时间
     * 自由活动时间
   - 压力管理评估
     * 压力水平监测
     * 恢复时间分

6. **健康响应评估**
   - 作息与睡眠质量关联
     * 作息规律性影响
     * 睡眠质量趋势
   - 作息与运动表现关联
     * 运动时间选择影响
     * 表现水平分析
   - 作息与饮食规律关联
     * 进餐时间影响
     * 饮食规律性分析

7. **改进建议生成**
   - 作息优化建议
     * 时间调整建议
     * 规律性改进建议
   - 生活习惯调整
     * 作息模式优化
     * 行为习惯改进
   - 平衡策略建议
     * 工作休息平衡
     * 活动强度调整

8. **心率作息关联分析**
   - 静息心率分析
     * 清晨静息心率趋势
     * 入睡前心率变化
     * 静息心率与作息质量关系
   - 日常活动心率分析
     * 工作时段心率变化
     * 用餐时段心率变化
     * 活动强度评估
   - 压力水平评估
     * 心率变异性分析
     * 压力高峰时段识别
     * 恢复能力评估
   - 生理节律分析
     * 24小时心率变化曲线
     * 最佳活动时间推荐
     * 作息调整建议

## 4. 技术方案

### 4.1 架构设计
- 本地运行环境：macOS
- 前端技术栈：
  - 框架：Next.js 14+ (基于React)
  - 图表：Apache ECharts + React-ECharts
  - 样式：TailwindCSS
  - 数据获取：SWR
  - 类型检查：TypeScript
  - 构建工具：Vite

- 后端技术栈：
  - 主框架：FastAPI
    * 性能异步框架
    * 自动API文档生成
    * 原生支持类型检查
    * 完美支持异步操作
  
  - 数据处理：
    * Pandas：数据处理和分析
    * NumPy：数值计算
    * Scikit-learn：机器学习功能支持
  
  - 数据存储：
    * SQLite：本地数据持久化
    * Redis：可选，用于缓存计算结果
  
  - 工具链：
    * Poetry：依赖管理
    * Pytest：单元测试
    * Black：代码格式化
    * Mypy：类型检查

### 4.2 部署方案
- 本地服务部署
- 支持局域网访问
- 支持多终端浏览器访问

## 5. 非功能需求

### 5.1 性能要求
- 数据更新后页面刷新即可看到最新结果
- 图表交互响应流畅

### 5.2 可用性要求
- 界面简洁直观
- 图表可视化效果清晰
- 支持主流浏览器访问

### 5.3 安全要求
- 本地数据存储
- 局域网访问控制

## 6. 项目规划

### 6.1 开发阶段
1. 需求分析和设计（1周）
   - 详细需求文档编写
   - 数据处理规则定义
   - 界面原型设计

2. 数据处理模块开发（2周）
   - 数据读取与验证
   - 数据标准化处理
   - 数据关联处理
   - 单元测试

3. 分析功能开发（3周）
   - 运动数据分析实现
   - 健康指标分析实现
   - 生活习惯分析实现
   - 功能测试

4. 可视化开发（2周）
   - 概览页面开发
   - 详细分析页面开发
   - 报告页面开发
   - 交互功能实现

5. 测试和优化（2周）
   - 功能测试
   - 性能优化
   - 问题修复
   - 文档完善

### 6.2 风险评估
- 数据处理准确性风险
- 分析算法准确性风险
- 系统稳定性风险

## 7. 评估指标
- 数据处理准确率
- 分析报告质量
- 系统响应速度
- 可视化交互体验 

## 8. 技术实现详细设计

### 8.1 数据库设计
#### 基础数据表
1. **用户信息表** (user_profile)
   ```sql
   CREATE TABLE user_profile (
       id INTEGER PRIMARY KEY,
       name TEXT NOT NULL,
       age INTEGER,
       gender TEXT,
       height REAL,
       target_weight REAL,
       created_at TIMESTAMP,
       updated_at TIMESTAMP
   );
   ```

2. **运动记录表** (exercise_records)
   ```sql
   CREATE TABLE exercise_records (
       id INTEGER PRIMARY KEY,
       date TIMESTAMP NOT NULL,
       distance REAL,
       duration INTEGER,  -- 秒数
       avg_pace REAL,    -- 分钟/公里
       max_pace REAL,
       calories REAL,
       created_at TIMESTAMP,
       source TEXT       -- 数据来源
   );
   ```

3. **心率数据表** (heart_rate_records)
   ```sql
   CREATE TABLE heart_rate_records (
       id INTEGER PRIMARY KEY,
       exercise_id INTEGER,
       timestamp TIMESTAMP NOT NULL,
       heart_rate INTEGER,
       zone TEXT,        -- 心率区间
       activity_type TEXT,  -- 活动类型：运动/日常/睡眠
       daily_routine_id INTEGER,  -- 关联作息记录
       FOREIGN KEY (exercise_id) REFERENCES exercise_records(id),
       FOREIGN KEY (daily_routine_id) REFERENCES daily_routine(id)
   );
   ```

4. **睡眠记录表** (sleep_records)
   ```sql
   CREATE TABLE sleep_records (
       id INTEGER PRIMARY KEY,
       date TIMESTAMP NOT NULL,
       start_time TIMESTAMP,
       end_time TIMESTAMP,
       quality_score INTEGER,
       deep_sleep_duration INTEGER,  -- 分钟
       light_sleep_duration INTEGER, -- 分钟
       created_at TIMESTAMP
   );
   ```

5. **体重记录表** (weight_records)
   ```sql
   CREATE TABLE weight_records (
       id INTEGER PRIMARY KEY,
       date TIMESTAMP NOT NULL,
       weight REAL,
       bmi REAL,
       created_at TIMESTAMP
   );
   ```

6. **饮食记录表** (diet_records)
   ```sql
   CREATE TABLE diet_records (
       id INTEGER PRIMARY KEY,
       date TIMESTAMP NOT NULL,
       meal_type TEXT,      -- 早餐/午餐/晚餐/加餐
       food_items JSON,     -- 食物项目及份量
       calories REAL,       -- 总热量
       protein REAL,        -- 蛋白质(克)
       carbs REAL,         -- 碳水(克)
       fat REAL,           -- 脂肪(克)
       created_at TIMESTAMP
   );
   ```

7. **作息记录表** (daily_routine)
   ```sql
   CREATE TABLE daily_routine (
       id INTEGER PRIMARY KEY,
       date TIMESTAMP NOT NULL,
       
       -- 睡眠作息
       wake_time TIMESTAMP,
       sleep_time TIMESTAMP,
       morning_routine JSON,  -- 晨间活动记录
       evening_routine JSON,  -- 晚间活动记录
       nap_duration INTEGER,  -- 午休时长（分钟）
       
       -- 心率指标
       resting_heart_rate INTEGER,  -- 静息心率
       avg_daily_heart_rate INTEGER,  -- 日均心率
       heart_rate_variability JSON,  -- 心率变异性数据
       
       -- 用餐作息
       breakfast_time TIMESTAMP,
       lunch_time TIMESTAMP,
       dinner_time TIMESTAMP,
       snack_times JSON,     -- 加餐时间记录
       meal_regularity INTEGER, -- 饮食规律性评分
       
       -- 活动作息
       work_hours JSON,      -- 工作时间段
       exercise_time TIMESTAMP, -- 运动时间
       screen_time INTEGER,  -- 屏幕使用时长（分钟）
       outdoor_time INTEGER, -- 户外活动时长（分钟）
       
       -- 评估指标
       routine_score INTEGER,    -- 作息规律性评分
       energy_level JSON,       -- 全天能量水平曲线
       stress_level INTEGER,    -- 压力水平评估(1-5)
       productivity_score INTEGER, -- 生产力评分
       
       notes TEXT,
       created_at TIMESTAMP,
       updated_at TIMESTAMP
   );
   ```

8. **营养计划表** (nutrition_plans)
   ```sql
   CREATE TABLE nutrition_plans (
       id INTEGER PRIMARY KEY,
       start_date TIMESTAMP NOT NULL,
       end_date TIMESTAMP,
       plan_type TEXT,          -- 日计划/周计划/月计划
       target_calories REAL,
       target_protein REAL,
       target_carbs REAL,
       target_fat REAL,
       meal_suggestions JSON,   -- 推荐食谱
       notes TEXT,
       created_at TIMESTAMP
   );
   ```

9. **营养建议表** (nutrition_recommendations)
   ```sql
   CREATE TABLE nutrition_recommendations (
       id INTEGER PRIMARY KEY,
       date TIMESTAMP NOT NULL,
       meal_type TEXT,
       food_suggestions JSON,   -- 推荐食物清单
       nutrition_tips TEXT,     -- 营养建议
       alternatives JSON,       -- 替代选项
       created_at TIMESTAMP
   );
   ```

#### 分析结果表
1. **运动分析结果表** (exercise_analysis)
   ```sql
   CREATE TABLE exercise_analysis (
       id INTEGER PRIMARY KEY,
       date TIMESTAMP NOT NULL,
       total_distance REAL,
       avg_heart_rate INTEGER,
       zone_distribution JSON,  -- 心率区间分布
       recovery_score INTEGER,
       created_at TIMESTAMP
   );
   ```

2. **月度报告表** (monthly_reports)
   ```sql
   CREATE TABLE monthly_reports (
       id INTEGER PRIMARY KEY,
       year INTEGER,
       month INTEGER,
       report_data JSON,    -- 存储报告详细数据
       created_at TIMESTAMP
   );
   ```

### 8.2 API设计
#### 数据同步API
```typescript
// 数据导入接口
POST /api/sync/import
- 功能：导入CSV文件数据
- 参数：file_type (运动/睡眠/心率等), file_content

// 数据验证接口
GET /api/sync/validate
- 功能：验证数据完整性
- 返回：验证结果及错误信息
```

#### 数据分析API
```typescript
// 运动数据分析
GET /api/analysis/exercise
- 参数：start_date, end_date
- 返回：运动统计数据，包括距离、配速、心率等

// 心率分析
GET /api/analysis/heart-rate
- 参数：exercise_id
- 返回：心率区间分布、恢复能力评估等

// 睡眠分析
GET /api/analysis/sleep
- 参数：start_date, end_date
- 返回：睡眠质量分析、趋势等

// 体重分析
GET /api/analysis/weight
- 参数：start_date, end_date
- 返回：体重变化趋势、BMI分析等
```

#### 饮食作息API
```typescript
// 饮食记录
POST /api/diet/record
- 功能：记录每日饮食数据
- 参数：meal_type, food_items, nutrition_info

GET /api/diet/analysis
- 参数：start_date, end_date
- 返回：饮食分析数据，包括营养摄入、规律性等

// 作息记录
POST /api/routine/record
- 功能：记录作息数据
- 参数：wake_time, sleep_time, meal_times

GET /api/routine/analysis
- 参数：start_date, end_date
- 返回：作息规律性分析、建议等
```

#### 营养计划API
```typescript
// 营养计划生成
POST /api/nutrition/plan/generate
- 功能：生成个性化营养计划
- 参数：plan_type, user_preferences, health_goals
- 返回：详细的营养计划

// 获取营养建议
GET /api/nutrition/recommendations
- 参数：date, meal_type
- 返回：针对性的营养建议和食物推荐

// 保存营养计划
POST /api/nutrition/plan/save
- 功能：保存或更新营养计划
- 参数：plan_details, start_date, end_date

// 获取计划执行情况
GET /api/nutrition/plan/progress
- 参数：plan_id, date
- 返回：计划执行进度和效果评估
```

#### 报告生成API
```typescript
// 生成月度报告
POST /api/reports/monthly
- 参数：year, month
- 返回：完整的月度分析报告

// 获取报告列表
GET /api/reports
- 参数：start_date, end_date
- 返回：报告列表及摘要

// 获取报告详情
GET /api/reports/{report_id}
- 返回：完整的报告内容
```

#### 心率作息关联分析API
```typescript
// 心率作息分析
GET /api/analysis/heart-rate-routine
- 参数：date, period(day/week/month)
- 返回：心率与作息的关联分析数据

// 压力水平评估
GET /api/analysis/stress-level
- 参数：date, period(day/week/month)
- 返回：基于心率变异性的压力水平评估

// 生理节律分析
GET /api/analysis/circadian-rhythm
- 参数：date, period(day/week/month)
- 返回：基于心率的生理节律分析
```

### 8.3 调整后的开发周期
1. **环境搭建和基础开发（2周）**
   - 前端项目初始化
     * Next.js项目搭建
     * TailwindCSS配置
     * TypeScript配置
   - 后端项目初始化
     * FastAPI环境搭建
     * 数据库初始化
     * Poetry依赖管理配置

2. **数据处理模块开发（3周）**
   - 数据库表结构实现
   - CSV导入功能实现
   - 数据验证和清洗
   - 数据标准化处理
   - 单元测试编写

3. **核心分析功能开发（4周）**
   - 运动数据分析实现
   - 心率分析实现
   - 睡眠分析实现
   - 体重分析实现
   - 饮食分析实现
   - 作息分析实现
   - 营养计划生成实现
   - API接口开发
   - 功能测试

4. **前端开发（3周）**
   - 页面框架搭建
   - 数据可视化组件开发
   - 饮食记录界面开发
   - 营养计划展示界面开发
   - 报告展示页面开发
   - 响应式布局适配
   - 交互功能实现

5. **系统集成和测试（2周）**
   - 前后端集成
   - 性能优化
   - 端到端测试
   - 问题修复

6. **部署和文档（1周）**
   - 本地部署脚本编写
   - 使用文档编写
   - 开发文档完善
   - 部署测试

总计开发周期：15周 

## 9. 开发规范和标准

### 9.1 代码规范
#### 前端开发规范
- TypeScript/React开发规范
  * 强制使用TypeScript进行开发
  * 使用函数式组件和Hooks
  * 遵循React最佳实践
  * 使用ESLint + Prettier进行代码格式化
  * 组件命名采用大驼峰命名法
  * Props和State类型必须明确定义

- 样式开发规范
  * 采用TailwindCSS工具类优先
  * 复杂样式使用CSS Modules
  * 遵循移动优先的响应式设计
  * 使用rem/em作为主要尺寸单位
  * 颜色使用Tailwind预设变量

- 状态管理规范
  * 使用React Context处理全局状态
  * 使用SWR管理服务器状态
  * 遵循单向数据流原则

#### 后端开发规范
- Python代码规范
  * 严格遵循PEP 8规范
  * 使用Black进行代码格式化
  * 使用Mypy进行类型检查
  * 使用Pylint进行代码质量检查
  * 函数和变量使用蛇形命名法

- FastAPI开发规范
  * 使用Pydantic进行数据验证
  * API路由采用RESTful设计
  * 统一错误处理机制
  * 请求响应模型明确定义
  * 适当使用依赖注入

- 数据库操作规范
  * 使用SQLAlchemy ORM
  * 事务管理规范
  * 数据库迁移使用Alembic
  * 查询优化指南

### 9.2 测试规范
#### 前端测试
- 单元测试
  * 使用Jest + React Testing Library
  * 组件测试覆盖率 > 80%
  * 工具函数测试覆盖率 > 90%
  * 快照测试规范

- 集成测试
  * 使用Cypress进行E2E测试
  * 关键流程测试用例
  * 跨浏览器兼容性测试

#### 后端测试
- 单元测试
  * 使用Pytest框架
  * 测试覆盖率 > 85%
  * 使用Pytest-cov检查覆盖率
  * Mock外部依赖

- 集成测试
  * API端到端测试
  * 数据库操作测试
  * 性能测试基准

### 9.3 文档规范
#### 代码文档
- 代码注释要求
  * 函数必须包含文档字符串
  * 复杂逻辑必须添加注释
  * 类型提示必须完整
  * 关键算法必须说明原理

- API文档
  * 使用FastAPI自动生成基础文档
  * 补充详细的接口说明
  * 请求响应示例
  * 错误码说明

#### 项目文档
- 开发文档
  * README.md项目说明
  * 环境搭建文档
  * 开发指南
  * 部署文档

- 维护文档
  * 更新日志
  * 问题修复记录
  * 性能优化记录

### 9.4 版本控制规范
#### Git使用规范
- 分支管理
  * main：主分支，用于生产环境
  * develop：开发分支
  * feature/*：功能分支
  * bugfix/*：问题修复分支
  * release/*：发布分支

- 提交规范
  * feat：新功能
  * fix：问题修复
  * docs：文档更新
  * style：代码格式调整
  * refactor：代码重构
  * test：测试用例
  * chore：构建过程或辅助工具的变动

- 代码审查
  * 提交前自审清单
  * 代码审查标准
  * 合并请求模板

### 9.5 持续集成规范
- 构建流程
  * 代码质量检查
  * 自动化测试
  * 构建产物
  * 部署流程

- 质量门禁
  * 代码规范检查必须通过
  * 测试覆盖率达标
  * 性能指标达标
  * 安全扫描通过