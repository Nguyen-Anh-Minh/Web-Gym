// SmartGym Elite - Web Application Logic

// 1. Data Definition: 25 Survey Questions
const quizQuestions = [
  {
    id: 1,
    category: "Thể trạng",
    question: "Tuổi của bạn là bao nhiêu?",
    type: "select",
    options: [
      { label: "Tuổi: 18-29", value: "18-29" },
      { label: "Tuổi: 30-39", value: "30-39" },
      { label: "Tuổi: 40-49", value: "40-49" },
      { label: "Tuổi: 50+", value: "50+" }
    ]
  },
  {
    id: 2,
    category: "Thể trạng",
    question: "Chọn giới tính sinh học của bạn",
    type: "select-card",
    options: [
      { 
        label: "Nam", 
        value: "Nam", 
        imgUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=300&auto=format&fit=crop" 
      },
      { 
        label: "Nữ", 
        value: "Nữ", 
        imgUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=300&auto=format&fit=crop" 
      }
    ]
  },
  {
    id: 3,
    category: "Thể trạng",
    question: "Chọn mục tiêu của bạn",
    type: "select-card",
    options: [
      { 
        label: "Giảm Cân", 
        value: "Giảm Cân", 
        imgUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=300&auto=format&fit=crop"
      },
      { 
        label: "Tăng Cơ Bắp", 
        value: "Tăng Cơ Bắp", 
        imgUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=300&auto=format&fit=crop" 
      },
      { 
        label: "Cắt Nét Cơ", 
        value: "Cắt Nét Cơ", 
        imgUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=300&auto=format&fit=crop" 
      },
      { 
        label: "Tăng Sức Bền", 
        value: "Tăng Sức Bền", 
        imgUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=300&auto=format&fit=crop" 
      },
      { 
        label: "Cải Thiện Tư Thế", 
        value: "Cải Thiện Tư Thế", 
        imgUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=300&auto=format&fit=crop" 
      },
      { 
        label: "Dẻo Dai", 
        value: "Dẻo Dai", 
        imgUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=300&auto=format&fit=crop" 
      }
    ]
  },
  {
    id: 4,
    category: "Thể trạng",
    question: "Chiều cao hiện tại của bạn (cm)?",
    type: "range",
    min: 130,
    max: 220,
    default: 170,
    unit: "cm"
  },
  {
    id: 5,
    category: "Thể trạng",
    question: "Cân nặng hiện tại của bạn (kg)?",
    type: "range",
    min: 30,
    max: 150,
    default: 65,
    unit: "kg"
  },
  {
    id: 6,
    category: "Thể trạng",
    question: "Cân nặng mục tiêu của bạn (kg)?",
    type: "range",
    min: 30,
    max: 150,
    default: 60,
    unit: "kg"
  },
  {
    id: 7,
    category: "Thể trạng",
    question: "Tỷ lệ mỡ cơ thể hiện tại của bạn?",
    type: "select",
    options: [
      { label: "Thấp (Cơ thể săn chắc, cơ bụng rõ)", value: "Thấp" },
      { label: "Trung bình (Bình thường, mỡ vừa phải)", value: "Trung bình" },
      { label: "Cao (Béo tròn, nhiều mỡ thừa ở bụng/đùi)", value: "Cao" }
    ]
  },
  {
    id: 8,
    category: "Thói quen tập",
    question: "Bạn đã từng tập gym/thể hình chưa?",
    type: "select",
    options: [
      { label: "Chưa bao giờ (Mới bắt đầu hoàn toàn)", value: "Chưa tập" },
      { label: "Đã tập một ít (Dưới 6 tháng và ngắt quãng)", value: "Đã tập ít" },
      { label: "Đã tập lâu năm (Trên 1 năm tập đều đặn)", value: "Đã tập nhiều" }
    ]
  },
  {
    id: 9,
    category: "Thói quen tập",
    question: "Tần suất tập luyện hiện tại của bạn?",
    type: "select",
    options: [
      { label: "Hoàn toàn không tập (Lười vận động)", value: "Không tập" },
      { label: "Tập nhẹ 1-2 buổi/tuần (Đạp xe, đi bộ)", value: "1-2 buổi/tuần" },
      { label: "Tập đều 3-5 buổi/tuần (Tập gym, đá bóng)", value: "3-5 buổi/tuần" },
      { label: "Cường độ cao trên 5 buổi/tuần (Vận động viên)", value: "Trên 5 buổi/tuần" }
    ]
  },
  {
    id: 10,
    category: "Thói quen tập",
    question: "Bạn muốn tập luyện ở đâu?",
    type: "select",
    options: [
      { label: "Tại phòng Gym chuyên nghiệp (Có máy móc)", value: "Phòng Gym" },
      { label: "Tại nhà hoặc Ngoài trời (Tập với tạ đơn/Bodyweight)", value: "Tại nhà" }
    ]
  },
  {
    id: 11,
    category: "Thói quen tập",
    question: "Thời gian tối đa bạn có thể dành cho mỗi buổi tập?",
    type: "select",
    options: [
      { label: "Dưới 30 phút (Tập nhanh/tranh thủ)", value: "<30 phút" },
      { label: "Từ 30 - 60 phút (Tiêu chuẩn tối ưu)", value: "30-60 phút" },
      { label: "Từ 60 - 90 phút (Tập chuyên sâu)", value: "60-90 phút" }
    ]
  },
  {
    id: 12,
    category: "Thói quen tập",
    question: "Đánh giá mức thể lực hiện tại của bạn?",
    type: "select",
    options: [
      { label: "Yếu (Dễ mệt mỏi, hụt hơi khi leo cầu thang)", value: "Yếu" },
      { label: "Trung bình (Có thể chạy chậm 1-2 km không nghỉ)", value: "Trung bình" },
      { label: "Tốt (Sức bền cao, chịu được áp lực thể lực lớn)", value: "Tốt" }
    ]
  },
  {
    id: 13,
    category: "Thói quen tập",
    question: "Khó khăn lớn nhất cản trở việc tập của bạn?",
    type: "select",
    options: [
      { label: "Thiếu thời gian (Bận công việc/học tập)", value: "Thiếu thời gian" },
      { label: "Thiếu động lực (Nhanh nản, hay bỏ dở)", value: "Thiếu động lực" },
      { label: "Không biết cách tập (Sợ chấn thương, tập sai)", value: "Không biết tập" },
      { label: "Chấn thương hoặc đau mỏi sẵn có trên cơ thể", value: "Đau mỏi chấn thương" }
    ]
  },
  {
    id: 14,
    category: "Dinh dưỡng",
    question: "Bạn ăn bao nhiêu bữa mỗi ngày?",
    type: "select",
    options: [
      { label: "1 - 2 bữa (Thường bỏ bữa sáng/tối)", value: "1-2 bữa" },
      { label: "3 bữa chính đầy đủ", value: "3 bữa" },
      { label: "4 - 5 bữa (Gồm các bữa phụ trước/sau tập)", value: "4-5 bữa" },
      { label: "Hơn 5 bữa mỗi ngày", value: "Trên 5 bữa" }
    ]
  },
  {
    id: 15,
    category: "Dinh dưỡng",
    question: "Chế độ ăn hiện tại của bạn thế nào?",
    type: "select",
    options: [
      { label: "Ăn tạp (Ăn bất cứ món gì có sẵn)", value: "Ăn tạp" },
      { label: "Ăn kiêng ít tinh bột (Low-Carb / Keto)", value: "Keto/Low-carb" },
      { label: "Ăn chay hoàn toàn hoặc ăn chay bán phần", value: "Ăn chay" },
      { label: "Chế độ giàu đạm (Ưu tiên ức gà, bò, trứng)", value: "Giàu đạm" }
    ]
  },
  {
    id: 16,
    category: "Dinh dưỡng",
    question: "Lượng nước bạn uống trung bình mỗi ngày?",
    type: "select",
    options: [
      { label: "Ít uống nước (Dưới 1.5 lít)", value: "Dưới 1.5L" },
      { label: "Uống vừa đủ (Từ 1.5 - 2.5 lít)", value: "1.5L-2.5L" },
      { label: "Uống nhiều (Trên 2.5 lít nước)", value: "Trên 2.5L" }
    ]
  },
  {
    id: 17,
    category: "Dinh dưỡng",
    question: "Nguồn đạm (Protein) chủ yếu bạn chọn là gì?",
    type: "select",
    options: [
      { label: "Thịt động vật (Gà, bò, heo)", value: "Thịt động vật" },
      { label: "Cá và hải sản các loại", value: "Hải sản" },
      { label: "Trứng và các chế phẩm từ sữa (Whey)", value: "Trứng sữa" },
      { label: "Đạm thực vật (Đậu hũ, hạt, ngũ cốc)", value: "Thực vật" }
    ]
  },
  {
    id: 18,
    category: "Dinh dưỡng",
    question: "Tần suất ăn đồ ăn nhanh, ngọt hoặc nhiều dầu mỡ?",
    type: "select",
    options: [
      { label: "Rất hiếm (Hầu như tự nấu ăn lành mạnh)", value: "Hiếm" },
      { label: "Khoảng 1 - 2 lần mỗi tuần (Cheat meal cuối tuần)", value: "1-2 lần/tuần" },
      { label: "Hơn 3 lần mỗi tuần (Thường xuyên ăn ngoài)", value: "Trên 3 lần/tuần" }
    ]
  },
  {
    id: 19,
    category: "Dinh dưỡng",
    question: "Thời gian ngủ mỗi đêm trung bình của bạn?",
    type: "select",
    options: [
      { label: "Dưới 6 tiếng (Thiếu ngủ, căng thẳng)", value: "Dưới 6 tiếng" },
      { label: "Từ 6 - 8 tiếng (Tiêu chuẩn hồi phục tốt)", value: "6-8 tiếng" },
      { label: "Hơn 8 tiếng mỗi ngày", value: "Trên 8 tiếng" }
    ]
  },
  {
    id: 20,
    category: "Sức khỏe",
    question: "Bạn có bị đau khớp gối hoặc cổ chân không?",
    type: "select",
    options: [
      { label: "Hoàn toàn khỏe mạnh", value: "Không bị" },
      { label: "Đau mỏi nhẹ khi tập nặng hoặc đi lại nhiều", value: "Đau nhẹ" },
      { label: "Đau nhức mãn tính / Có chấn thương cũ chưa lành", value: "Đau nặng" }
    ]
  },
  {
    id: 21,
    category: "Sức khỏe",
    question: "Bạn có vấn đề gì ở lưng dưới hoặc cột sống không?",
    type: "select",
    options: [
      { label: "Cột sống khỏe mạnh bình thường", value: "Không bị" },
      { label: "Đau mỏi nhẹ lưng dưới khi ngồi làm việc lâu", value: "Đau nhẹ" },
      { label: "Bị thoát vị đĩa đệm / Thoái hóa cột sống", value: "Đau nặng" }
    ]
  },
  {
    id: 22,
    category: "Sức khỏe",
    question: "Bạn có tiền sử bệnh tim mạch hoặc huyết áp không?",
    type: "select",
    options: [
      { label: "Không bị bệnh", value: "Không bị" },
      { label: "Bị huyết áp cao hoặc huyết áp thấp", value: "Huyết áp" },
      { label: "Có bệnh lý tim mạch (Hở van, suy tim...)", value: "Tim mạch" }
    ]
  },
  {
    id: 23,
    category: "Sức khỏe",
    question: "Bạn có bệnh mãn tính nào khác dưới đây không?",
    type: "select",
    options: [
      { label: "Không có bệnh mãn tính nào khác", value: "Không bị" },
      { label: "Bệnh tiểu đường (Type 1 hoặc Type 2)", value: "Tiểu đường" },
      { label: "Bệnh hen suyễn (Khó thở khi vận động mạnh)", value: "Hen suyễn" },
      { label: "Đau dạ dày / Rối loạn tiêu hóa mãn tính", value: "Dạ dày" }
    ]
  },
  {
    id: 24,
    category: "Sức khỏe",
    question: "Bạn có phẫu thuật hoặc chấn thương lớn nào trong 1 năm qua?",
    type: "select",
    options: [
      { label: "Chưa từng trải qua phẫu thuật lớn", value: "Chưa từng" },
      { label: "Có phẫu thuật phần mềm nhẹ (đã phục hồi)", value: "Phẫu thuật nhẹ" },
      { label: "Có phẫu thuật xương khớp lớn (đang tập phục hồi)", value: "Phẫu thuật lớn" }
    ]
  },
  {
    id: 25,
    category: "Mục tiêu",
    question: "Mức độ cam kết thực hiện lộ trình của bạn?",
    type: "select",
    options: [
      { label: "Thử tập xem sao (Đạt 50% mục tiêu)", value: "50% cam kết" },
      { label: "Quyết tâm thay đổi vóc dáng (Đạt 80% mục tiêu)", value: "80% cam kết" },
      { label: "Cam kết tuyệt đối 100% để biến đổi cơ thể", value: "100% cam kết" }
    ]
  }
];

// 2. Database Manager (LocalStorage - persistent across sessions)
const DB_KEY = "elite_gym_users_v2";

const DBManager = {
  isWebSQL: false, // Always false — we use LocalStorage only for reliability

  init() {
    return new Promise((resolve) => {
      this._migrate();
      this._seedDefaults();
      console.log("LocalStorage DB ready. Users:", this._getAll().length);
      resolve();
    });
  },

  // Internal: get raw array
  _getAll() {
    try {
      return JSON.parse(localStorage.getItem(DB_KEY) || "[]");
    } catch (e) {
      return [];
    }
  },

  // Internal: save raw array
  _saveAll(users) {
    localStorage.setItem(DB_KEY, JSON.stringify(users));
  },

  // Internal: migrate old key if exists, also patch missing fields on all users
  _migrate() {
    // Step 1: Try to carry over data from old keys
    const OLD_KEYS = ["elite_gym_users"];
    for (const oldKey of OLD_KEYS) {
      const raw = localStorage.getItem(oldKey);
      if (raw && !localStorage.getItem(DB_KEY)) {
        try {
          const old = JSON.parse(raw);
          if (Array.isArray(old) && old.length > 0) {
            localStorage.setItem(DB_KEY, raw);
            console.log(`Migrated ${old.length} users from ${oldKey}`);
          }
        } catch (e) { /* ignore */ }
      }
    }

    // Step 2: Patch any users missing new fields (non-destructive migration)
    const users = this._getAll();
    let changed = false;
    const defaultBodyStats = { weight: 65, fatPercent: 20, musclePercent: 35, cardioLevel: 30, flexibilityLevel: 30, armMuscle: 30, legMuscle: 30, shoulderMuscle: 30, chestMuscle: 30 };
    users.forEach(u => {
      if (u.duration === undefined) { u.duration = "3 tháng"; changed = true; }
      if (u.currentWeek === undefined) { u.currentWeek = 1; changed = true; }
      if (u.completedTasks === undefined) { u.completedTasks = "[]"; changed = true; }
      if (u.mealBreakfast === undefined) { u.mealBreakfast = ""; changed = true; }
      if (u.mealLunch === undefined) { u.mealLunch = ""; changed = true; }
      if (u.mealSnack === undefined) { u.mealSnack = ""; changed = true; }
      if (u.mealDinner === undefined) { u.mealDinner = ""; changed = true; }
      if (u.injury === undefined) { u.injury = ""; changed = true; }
      if (u.workoutLoc === undefined) { u.workoutLoc = ""; changed = true; }
      if (u.goal === undefined) { u.goal = ""; changed = true; }
      // V2: multi-goal fields
      if (u.goals === undefined) { u.goals = u.goal ? [u.goal] : ["Giảm Cân"]; changed = true; }
      if (u.activeGoal === undefined) { u.activeGoal = u.goals[0] || "Giảm Cân"; changed = true; }
      if (u.goalTasks === undefined) { u.goalTasks = "{}"; changed = true; }
      if (u.bodyStats === undefined) { u.bodyStats = JSON.stringify({ ...defaultBodyStats, weight: u.currentWeight || 65 }); changed = true; }
      if (u.gender === undefined) { u.gender = "Nam"; changed = true; }
    });
    if (changed) this._saveAll(users);
  },

  // Internal: add default accounts if not present
  _seedDefaults() {
    const users = this._getAll();
    const defaultBodyStats = JSON.stringify({ weight: 65, fatPercent: 20, musclePercent: 35, cardioLevel: 30, flexibilityLevel: 30, armMuscle: 30, legMuscle: 30, shoulderMuscle: 30, chestMuscle: 30 });
    const defaultSeeds = [
      {
        username: "member", email: "member@elite.com", password: "123456",
        name: "Minh Hoàng", role: "member", hasCompletedSurvey: 0,
        plan: "none", currentWeight: 0, targetWeight: 0, height: 0, age: 0,
        goal: "", injury: "", workoutLoc: "", completedTasks: "[]",
        mealBreakfast: "", mealLunch: "", mealSnack: "", mealDinner: "",
        duration: "3 tháng", currentWeek: 1,
        goals: ["Giảm Cân"], activeGoal: "Giảm Cân", goalTasks: "{}", bodyStats: defaultBodyStats,
        gender: "Nam"
      },
      {
        username: "pt_elite", email: "pt@elite.com", password: "123456",
        name: "HLV Marcus Vane", role: "pt", hasCompletedSurvey: 0,
        plan: "premium", currentWeight: 0, targetWeight: 0, height: 0, age: 0,
        goal: "", injury: "", workoutLoc: "", completedTasks: "[]",
        mealBreakfast: "", mealLunch: "", mealSnack: "", mealDinner: "",
        duration: "3 tháng", currentWeek: 1,
        goals: ["Giảm Cân"], activeGoal: "Giảm Cân", goalTasks: "{}", bodyStats: defaultBodyStats,
        gender: "Nam"
      },
      {
        username: "admin", email: "admin@smartgym.com", password: "admin@2024",
        name: "Quản Trị Viên", role: "admin", hasCompletedSurvey: 0,
        plan: "none", currentWeight: 0, targetWeight: 0, height: 0, age: 0,
        goal: "", injury: "", workoutLoc: "", completedTasks: "[]",
        mealBreakfast: "", mealLunch: "", mealSnack: "", mealDinner: "",
        duration: "3 tháng", currentWeek: 1,
        goals: [], activeGoal: "", goalTasks: "{}", bodyStats: defaultBodyStats,
        gender: "Nam"
      }
    ];
    let changed = false;
    defaultSeeds.forEach(seed => {
      const exists = users.some(u => u.username === seed.username);
      if (!exists) { users.push(seed); changed = true; }
    });
    if (changed) this._saveAll(users);
  },

  getUser(username) {
    return new Promise((resolve) => {
      const users = this._getAll();
      const u = users.find(u => u.username === username || u.email === username);
      if (u) {
        resolve({
          ...u,
          hasCompletedSurvey: u.hasCompletedSurvey === 1 || u.hasCompletedSurvey === true,
          duration: u.duration || "3 tháng",
          currentWeek: u.currentWeek || 1
        });
      } else {
        resolve(null);
      }
    });
  },

  getAllUsers() {
    return new Promise((resolve) => {
      const users = this._getAll();
      resolve(users.filter(u => u.role === "member"));
    });
  },

  registerUser(user) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      if (users.some(u => u.username === user.username)) {
        reject(new Error("Tên đăng nhập đã tồn tại"));
        return;
      }
      if (users.some(u => u.email === user.email)) {
        reject(new Error("Email đã được đăng ký"));
        return;
      }
      const initW = user.currentWeight || 65;
      users.push({
        username: user.username,
        email: user.email,
        password: user.password,
        name: user.name,
        role: user.role || "member",
        hasCompletedSurvey: 0,
        plan: user.plan || "none",
        currentWeight: initW,
        targetWeight: user.targetWeight || 0,
        height: user.height || 0,
        age: user.age || 0,
        goal: user.goal || "",
        injury: user.injury || "",
        workoutLoc: user.workoutLoc || "",
        completedTasks: user.completedTasks || "[]",
        mealBreakfast: user.mealBreakfast || "",
        mealLunch: user.mealLunch || "",
        mealSnack: user.mealSnack || "",
        mealDinner: user.mealDinner || "",
        duration: user.duration || "3 tháng",
        currentWeek: user.currentWeek || 1,
        goals: user.goals || ["Giảm Cân"],
        activeGoal: user.activeGoal || "Giảm Cân",
        goalTasks: user.goalTasks || "{}",
        bodyStats: user.bodyStats || JSON.stringify({ weight: initW, fatPercent: 20, musclePercent: 35, cardioLevel: 30, flexibilityLevel: 30, armMuscle: 30, legMuscle: 30, shoulderMuscle: 30, chestMuscle: 30 }),
        gender: user.gender || "Nam"
      });
      this._saveAll(users);
      resolve(true);
    });
  },

  updateUserSurvey(username, data) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      const idx = users.findIndex(u => u.username === username || u.email === username);
      if (idx !== -1) {
        users[idx].hasCompletedSurvey = 1;
        users[idx].plan = data.plan;
        users[idx].currentWeight = data.currentWeight;
        users[idx].targetWeight = data.targetWeight;
        users[idx].height = data.height;
        users[idx].age = data.age;
        users[idx].goal = data.goal;
        users[idx].injury = data.injury;
        users[idx].workoutLoc = data.workoutLoc;
        users[idx].duration = data.duration || "3 tháng";
        users[idx].currentWeek = data.currentWeek || 1;
        users[idx].completedTasks = "[]";
        // Save gender from survey
        if (data.gender) users[idx].gender = data.gender;
        // V2 multi-goal
        users[idx].goals = data.goals || [data.goal || "Giảm Cân"];
        users[idx].activeGoal = data.activeGoal || users[idx].goals[0];
        users[idx].goalTasks = "{}";
        users[idx].bodyStats = JSON.stringify({
          weight: data.currentWeight,
          fatPercent: data.fatPercent || 20,
          musclePercent: data.musclePercent || 35,
          cardioLevel: 30,
          flexibilityLevel: 30,
          armMuscle: 30, legMuscle: 30, shoulderMuscle: 30, chestMuscle: 30
        });
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Không tìm thấy người dùng"));
      }
    });
  },

  updateUserWeight(username, weight) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      const idx = users.findIndex(u => u.username === username || u.email === username);
      if (idx !== -1) {
        users[idx].currentWeight = weight;
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Không tìm thấy người dùng"));
      }
    });
  },

  updateUserGoal(username, goal) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      const idx = users.findIndex(u => u.username === username || u.email === username);
      if (idx !== -1) {
        users[idx].goal = goal;
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Không tìm thấy người dùng"));
      }
    });
  },

  updateUserTasks(username, tasksJSON) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      const idx = users.findIndex(u => u.username === username || u.email === username);
      if (idx !== -1) {
        users[idx].completedTasks = tasksJSON;
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Không tìm thấy người dùng"));
      }
    });
  },

  updateUserMeals(username, meals) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      const idx = users.findIndex(u => u.username === username || u.email === username);
      if (idx !== -1) {
        users[idx].mealBreakfast = meals.mealBreakfast;
        users[idx].mealLunch = meals.mealLunch;
        users[idx].mealSnack = meals.mealSnack;
        users[idx].mealDinner = meals.mealDinner;
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Không tìm thấy người dùng"));
      }
    });
  },

  updatePremiumStatus(username, plan) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      const idx = users.findIndex(u => u.username === username || u.email === username);
      if (idx !== -1) {
        users[idx].plan = plan;
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Không tìm thấy người dùng"));
      }
    });
  },

  updateUserWeek(username, week) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      const idx = users.findIndex(u => u.username === username || u.email === username);
      if (idx !== -1) {
        users[idx].currentWeek = week;
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Không tìm thấy người dùng"));
      }
    });
  },

  updateBodyStats(username, stats) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      const idx = users.findIndex(u => u.username === username || u.email === username);
      if (idx !== -1) {
        users[idx].bodyStats = JSON.stringify(stats);
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Không tìm thấy người dùng"));
      }
    });
  },

  updateGoalTasks(username, goalTasksObj) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      const idx = users.findIndex(u => u.username === username || u.email === username);
      if (idx !== -1) {
        users[idx].goalTasks = JSON.stringify(goalTasksObj);
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Không tìm thấy người dùng"));
      }
    });
  },

  updateActiveGoal(username, goals, activeGoal) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      const idx = users.findIndex(u => u.username === username || u.email === username);
      if (idx !== -1) {
        users[idx].goals = goals;
        users[idx].activeGoal = activeGoal;
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Đường link không đúng"));
      }
    });
  },

  // Admin: get ALL users (members + pts, no admin)
  getAllUsersAndPT() {
    return new Promise((resolve) => {
      const users = this._getAll();
      resolve(users.filter(u => u.role !== "admin"));
    });
  },

  // Admin: delete a user by username
  deleteUser(username) {
    return new Promise((resolve, reject) => {
      let users = this._getAll();
      const before = users.length;
      users = users.filter(u => u.username !== username);
      if (users.length < before) {
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Đường link không tìm thấy"));
      }
    });
  },

  // Admin: update any fields of a user
  updateUser(username, data) {
    return new Promise((resolve, reject) => {
      const users = this._getAll();
      const idx = users.findIndex(u => u.username === username);
      if (idx !== -1) {
        Object.assign(users[idx], data);
        this._saveAll(users);
        resolve(true);
      } else {
        reject(new Error("Đường link không tìm thấy"));
      }
    });
  },

  // Admin: promos stored in localStorage
  getPromos() {
    try { return JSON.parse(localStorage.getItem("admin_promos") || "[]"); } catch(e) { return []; }
  },
  savePromos(promos) {
    localStorage.setItem("admin_promos", JSON.stringify(promos));
  },

  // Admin: notifications
  getNotifications() {
    try { return JSON.parse(localStorage.getItem("admin_notifications") || "[]"); } catch(e) { return []; }
  },
  addNotification(notif) {
    const notifs = this.getNotifications();
    notifs.unshift({ ...notif, id: Date.now(), createdAt: new Date().toLocaleString("vi-VN") });
    localStorage.setItem("admin_notifications", JSON.stringify(notifs));
  }
};

// 3. Class details data block
const classDetailsData = {
  lifting: {
    title: "Cử Tạ Sức Khỏe & Tăng Cơ",
    category: "SỨC MẠNH",
    duration: 60,
    calories: 550,
    desc: "Lớp học chuyên sâu thiết kế nhằm tối ưu hóa khả năng phì đại cơ bắp (Hypertrophy) và phát triển lực đẩy tối đa. Phù hợp cho những ai muốn xây dựng nền tảng cơ bắp vững chắc và nâng cao mức tạ 3 bài phối hợp: Squat, Bench Press, và Deadlift.",
    basic: "Làm quen kỹ thuật căn bản với đòn gánh không tạ. Tập trung vào tư thế giữ thẳng lưng, góc đầu gối và cách siết cơ core. Tập 3 hiệp từ 12-15 reps mức tạ nhẹ.",
    intermediate: "Tăng tải trọng tạ dần đều (Progressive Overload). Áp dụng các kỹ thuật phối hợp nhịp thở khi đẩy tạ nặng. Tập 4 hiệp x 8-10 reps với 70% sức mạnh tối đa.",
    advanced: "Chinh phục các mức tạ giới hạn mới (1RM). Thực hành các kỹ thuật nâng cao như Drop sets, Super sets để ép cơ bắp vượt ngưỡng phục hồi. Tập dưới sự quan sát của PT để tránh chấn thương.",
    dietPre: "Một bữa ăn giàu Carb hấp thụ chậm và ít xơ (khoai lang, yến mạch) + 20-30g protein (lòng trắng trứng, ức gà) trước khi tập 90 phút.",
    dietPost: "Nạp ngay 1 muỗng Whey Protein Isolate kết hợp với chuối hoặc tinh bột nhanh để phục hồi glycogen và tổng hợp protein cơ bắp nhanh nhất.",
    dietRecommend: "Đảm bảo nạp tối thiểu 1.8g - 2.2g Protein trên mỗi kg trọng lượng cơ thể mỗi ngày. Uống đủ 2.5 - 3 lít nước.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  hiit: {
    title: "Vòng Lặp HIIT Đốt Mỡ Siêu Tốc",
    category: "TIM MẠCH",
    duration: 45,
    calories: 700,
    desc: "Chương trình tập luyện cường độ cao ngắt quãng (High-Intensity Interval Training) giúp nâng nhịp tim lên vùng đốt mỡ tối ưu, kích hoạt trạng thái đốt calo tự động sau khi tập (hiệu ứng EPOC) kéo dài đến 24 giờ.",
    basic: "Thực hiện các chuỗi bài tập bodyweight cơ bản: Jumping Jacks, Squat nhảy nhẹ, Burpees cơ bản không hít đất. Tỷ lệ: 20 giây tập, 40 giây nghỉ.",
    intermediate: "Tích hợp tạ ấm (Kettlebell) hoặc dây kháng lực. Tăng cường độ chuyển động liên tục. Tỷ lệ: 30 giây tập, 30 giây nghỉ cường độ trung bình.",
    advanced: "Thực hiện chuỗi bài tập phức hợp cường độ cao tối đa (AMRAP, EMOM) với tạ ấm nặng và bóng tạ. Tỷ lệ: 45 giây tập kịch khung, 15 giây nghỉ.",
    dietPre: "Ăn nhẹ dễ tiêu hóa như một quả chuối hoặc lát bánh mì đen quét bơ đậu phộng trước tập 45-60 phút để tránh tụt đường huyết.",
    dietPost: "Bổ sung hỗn hợp đạm và carb theo tỷ lệ 1:2 để bù đắp năng lượng tiêu hao cực đại sau buổi HIIT.",
    dietRecommend: "Thêm chất béo tốt (hạnh nhân, quả bơ) và các chất chống oxy hóa từ rau xanh đậm để giảm thiểu tình trạng viêm cơ.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  },
  yoga: {
    title: "Yoga Dòng Chảy Vinyasa",
    category: "DẺO DAI",
    duration: 75,
    calories: 300,
    desc: "Lớp học kết nối hơi thở sâu với từng chuyển động liên hoàn mềm mại giúp kéo giãn toàn bộ các bó cơ bị co cứng, cải thiện sự linh hoạt của khớp và giảm tải áp lực cho hệ thần kinh.",
    basic: "Học cách hít thở bằng cơ hoành (Ujjayi pranayama) và thực hành các tư thế chào mặt trời căn bản, giữ vững thăng bằng trên 2 chân.",
    intermediate: "Chuyển tiếp nhịp nhàng giữa các chuỗi tư thế chiến binh, thế thăng bằng một chân (thế cái cây, vũ công) và uốn lưng nhẹ.",
    advanced: "Chinh phục các tư thế đảo ngược nâng cao (đứng bằng vai, bằng đầu) và các tư thế thăng bằng bằng tay khó như thế con quạ (Bakasana).",
    dietPre: "Nên để bụng rỗng hoặc chỉ ăn nhẹ một vài quả chà là hoặc sữa chua ít béo ít nhất 2 tiếng trước khi bắt đầu tập thiền/yoga.",
    dietPost: "Uống nước dừa bù điện giải và ăn một đĩa salad rau xanh kèm các loại hạt dinh dưỡng giúp thanh lọc cơ thể nhẹ nhàng.",
    dietRecommend: "Ăn uống thanh đạm, tăng cường thực phẩm gốc thực vật, uống đủ nước ấm để đào thải độc tố cơ thể tốt hơn.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  kickboxing: {
    title: "Kickboxing Đối Kháng Đốt Mỡ",
    category: "SỨC MẠNH / TIM MẠCH",
    duration: 60,
    calories: 650,
    desc: "Lớp học võ thuật đối kháng kết hợp Cardio cường độ cao giúp giải tỏa căng thẳng hiệu quả, định hình cơ vai, tay, bụng đồng thời đốt mỡ toàn thân mạnh mẽ thông qua các kỹ thuật đấm đá tiêu chuẩn.",
    basic: "Học thế đứng thủ chuẩn, cách di chuyển tiến lùi căn bản. Luyện tập các cú đấm thẳng (Jab, Cross) và cú đá tầm thấp vào đích đấm (Pad).",
    intermediate: "Phối hợp các chuỗi đòn liên hoàn (Combo đấm móc, đấm vòng, đá tầm trung). Tập luyện né tránh phản xạ và xoay hông phát lực.",
    advanced: "Tham gia các bài đấu tập giả định (Sparring) có bảo hộ dưới sự giám sát nghiêm ngặt của HLV, nâng cao khả năng phân tích chiến thuật.",
    dietPre: "Sinh tố chuối yến mạch kết hợp một ít whey protein giúp tăng cường năng lượng tức thời cho buổi tập ra nhiều mồ hôi.",
    dietPost: "Nạp nước và đạm động vật hấp thụ nhanh (cá, ức gà) cùng lượng tinh bột phức để khôi phục lượng cơ bắp chịu tác động mạnh.",
    dietRecommend: "Bổ sung thêm muối khoáng và chất điện giải trong quá trình tập do lượng mồ hôi đào thải cực lớn.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  },
  pilates: {
    title: "Pilates Săn Chắc Cơ Cốt Lõi",
    category: "DẺO DAI",
    duration: 50,
    calories: 350,
    desc: "Tập trung sâu vào vùng cơ lõi (Core/Powerhouse) bao gồm bụng, hông và lưng dưới. Giúp cải thiện tư thế đứng thẳng, giải tỏa chứng đau mỏi lưng dưới do ngồi lâu và kiến tạo vóc dáng mảnh mai, săn chắc.",
    basic: "Làm quen với hơi thở Pilates đặc trưng và thực hiện các động tác thăng bằng cơ bản trên thảm như The Hundred, Single Leg Stretch.",
    intermediate: "Sử dụng thêm dụng cụ phụ trợ như vòng Pilates, bóng nhỏ, hoặc dây kháng lực để tăng độ thách thức thăng bằng của cơ bụng.",
    advanced: "Thực hành chuỗi bài tập phức tạp yêu cầu sự kiểm soát cơ bắp tuyệt đối ở tốc độ chậm trên máy chuyên dụng (Reformer/Cadillac).",
    dietPre: "Tránh các thức ăn đầy hơi. Một cốc sinh tố nhẹ hoặc một lát táo ăn kèm bơ hạt trước buổi tập 60 phút là lựa chọn lý tưởng.",
    dietPost: "Bữa ăn giàu đạm thực vật, lòng trắng trứng hoặc cá trắng áp chảo giúp hồi phục cơ core săn chắc mà không gây nặng bụng.",
    dietRecommend: "Ưu tiên thực phẩm giàu canxi và magie để củng cố độ dẻo dai của hệ xương khớp chịu lực nâng cơ lõi.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  cycling: {
    title: "Đạp Xe Indoor Cycling Siêu Tốc",
    category: "TIM MẠCH",
    duration: 45,
    calories: 600,
    desc: "Trải nghiệm đạp xe trong phòng tối theo nhịp điệu âm nhạc sôi động và ánh sáng cảm xúc. Mô phỏng hành trình leo dốc thực tế giúp săn chắc cơ đùi, mông và tối ưu hệ thống tuần hoàn.",
    basic: "Căn chỉnh độ cao yên và tay lái xe đạp cho phù hợp khớp gối. Tập đạp duy trì nhịp độ đều đặn theo nhịp nhạc chậm từ 80-90 RPM.",
    intermediate: "Thực hiện bài tập leo dốc giả định (tăng kháng lực bánh đà) kết hợp đứng đạp nhún người nhịp nhàng không mỏi gối.",
    advanced: "Các hiệp nước rút tốc độ cao (Interval Sprints) đan xen dốc đứng gắt, rèn luyện hệ tim mạch hoạt động ở công suất tối đa.",
    dietPre: "Nạp tinh bột phức dễ tiêu hóa (khoai lang, bánh mì nguyên cám) trước tập 1 tiếng để duy trì sức đạp bền bỉ.",
    dietPost: "Bổ sung thật nhiều nước lọc, chất điện giải cùng bữa ăn phục hồi có đủ tinh bột và đạm chất lượng cao.",
    dietRecommend: "Thực hiện giãn cơ đùi trước, đùi sau và bắp chân thật kỹ sau tập để tránh tình trạng chuột rút hoặc căng cơ.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  }
};

// App States
let currentUser = null; // Holds user object when logged in

// DOM Elements
const sections = {
  home: document.getElementById("home-section"),
  roadmap: document.getElementById("roadmap-section"),
  trainers: document.getElementById("trainers-section"),
  membership: document.getElementById("membership-section"),
  auth: document.getElementById("auth-section"),
  ptPortal: document.getElementById("pt-portal-section"),
  admin: document.getElementById("admin-section")
};

const navLinks = {
  home: document.getElementById("nav-home"),
  trainers: document.getElementById("nav-trainers"),
  membership: document.getElementById("nav-membership"),
  roadmap: document.getElementById("nav-roadmap"),
  ptPortal: document.getElementById("nav-pt-portal"),
  authBtn: document.getElementById("nav-auth-btn")
};

// User dropdown profile elements
const profileDropdown = document.getElementById("user-profile-menu");
const profileAvatarChar = document.getElementById("user-avatar-char");
const profileName = document.getElementById("user-profile-name");
const profileRole = document.getElementById("user-profile-role");
const dropdownActionBtn = document.getElementById("dropdown-action-btn");
const dropdownLogoutBtn = document.getElementById("dropdown-logout-btn");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved theme immediately on load
  const savedTheme = localStorage.getItem("elite_gym_theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }

  DBManager.init().then(() => {
    setupThemeToggle();
    setupNavigation();
    setupAuthHandlers();
    setupSurveyHandler();
    setupRoadmapHandlers();
    setupMobileMenuToggle();
    setupPTPortalHandlers();
    setupAdminHandlers();
  });
});

// Theme Toggle Logic
function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  // Sync icon to current state
  const isLight = document.body.classList.contains("light-theme");
  toggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  toggleBtn.style.color = isLight ? "#f59e0b" : "var(--text-primary)";

  toggleBtn.addEventListener("click", () => {
    const nowLight = document.body.classList.toggle("light-theme");
    if (nowLight) {
      localStorage.setItem("elite_gym_theme", "light");
      toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      toggleBtn.style.color = "#f59e0b";
    } else {
      localStorage.setItem("elite_gym_theme", "dark");
      toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      toggleBtn.style.color = "var(--text-primary)";
    }
  });
}

// 4. Navigation Flow & Locks Control
function setupNavigation() {
  navLinks.home.addEventListener("click", (e) => { e.preventDefault(); showSection("home"); });
  navLinks.trainers.addEventListener("click", (e) => { e.preventDefault(); showSection("trainers"); });
  
  navLinks.membership.addEventListener("click", (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert("Mục Hội Viên yêu cầu đăng nhập. Bạn đang được chuyển tới trang đăng nhập.");
      showSection("auth");
      switchAuthTab("login");
    } else if (currentUser.role === "pt") {
      alert("Tài khoản của bạn là Huấn Luyện Viên. Vui lòng vào mục PT Portal.");
      showSection("ptPortal");
    } else {
      showSection("membership");
    }
  });

  navLinks.roadmap.addEventListener("click", (e) => {
    e.preventDefault();
    if (!currentUser) {
      alert("Lộ trình yêu cầu đăng nhập. Bạn đang được chuyển tới trang đăng nhập.");
      showSection("auth");
      switchAuthTab("login");
    } else if (currentUser.role === "pt") {
      alert("Tài khoản của bạn là Huấn Luyện Viên. Vui lòng vào mục PT Portal.");
      showSection("ptPortal");
    } else {
      showSection("roadmap");
    }
  });
  
  if (navLinks.ptPortal) {
    navLinks.ptPortal.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentUser && currentUser.role === "pt") {
        showSection("ptPortal");
      }
    });
  }

  const navAdmin = document.getElementById("nav-admin");
  if (navAdmin) {
    navAdmin.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentUser && currentUser.role === "admin") {
        adminRefreshAll();
        showSection("admin");
      }
    });
  }

  // Action buttons
  navLinks.authBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSection("auth");
    switchAuthTab("login");
  });

  const btnHeroJoin = document.getElementById("btn-hero-join");
  if (btnHeroJoin) {
    btnHeroJoin.addEventListener("click", () => {
      if (currentUser) {
        showSection("membership");
      } else {
        showSection("auth");
        switchAuthTab("register");
      }
    });
  }

  const btnHeroClasses = document.getElementById("btn-hero-classes");
  if (btnHeroClasses) {
    btnHeroClasses.addEventListener("click", () => {
      showSection("trainers");
    });
  }

  const btnViewPrograms = document.getElementById("btn-view-programs");
  if (btnViewPrograms) {
    btnViewPrograms.addEventListener("click", (e) => {
      e.preventDefault();
      showSection("trainers");
    });
  }

  // Logo back home
  const btnLogo = document.getElementById("btn-logo");
  if (btnLogo) {
    btnLogo.addEventListener("click", () => showSection("home"));
  }

  // CTA button on lock overlay
  const btnRoadmapUnlock = document.getElementById("btn-roadmap-unlock-cta");
  if (btnRoadmapUnlock) {
    btnRoadmapUnlock.addEventListener("click", () => {
      showSection("membership");
    });
  }
}

function showSection(sectionKey) {
  // Hide all sections
  for (const key in sections) {
    if (sections[key]) {
      sections[key].classList.remove("active-section");
      sections[key].classList.add("hidden-section");
    }
  }
  
  // Show target section
  let targetSection = sections[sectionKey];
  
  if (sectionKey === "roadmap") {
    renderRoadmap();
  }

  if (targetSection) {
    targetSection.classList.remove("hidden-section");
    targetSection.classList.add("active-section");
  }

  // Update navigation active highlight
  for (const key in navLinks) {
    if (navLinks[key]) {
      navLinks[key].classList.remove("active");
    }
  }

  if (navLinks[sectionKey]) {
    navLinks[sectionKey].classList.add("active");
  }

  // Close mobile menu when shifting pages
  const headerNav = document.getElementById("header-nav");
  if (headerNav) headerNav.classList.remove("open");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 5. User Authentication handlers (Register/Login split screens)
function setupAuthHandlers() {
  const btnLoginSubmit = document.getElementById("btn-login-submit");
  const btnRegisterSubmit = document.getElementById("btn-register-submit");

  if (btnLoginSubmit) {
    btnLoginSubmit.addEventListener("click", () => {
      const username = document.getElementById("login-username").value.trim();
      const pass = document.getElementById("login-password").value;
      const errorMsg = document.getElementById("login-error-msg");

      if (!username || !pass) {
        alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
        return;
      }

      DBManager.getUser(username).then(user => {
        if (user && user.password === pass) {
          if (errorMsg) errorMsg.classList.add("hidden");
          loginUser(user);
        } else {
          if (errorMsg) errorMsg.classList.remove("hidden");
        }
      }).catch(err => {
        console.error(err);
        alert("Đã xảy ra lỗi trong quá trình xử lý đăng nhập.");
      });
    });
  }

  if (btnRegisterSubmit) {
    btnRegisterSubmit.addEventListener("click", () => {
      const name = document.getElementById("reg-fullname").value.trim();
      const username = document.getElementById("reg-username").value.trim();
      const pass = document.getElementById("reg-password").value;
      const email = document.getElementById("reg-email").value.trim();
      const genderEl = document.getElementById("reg-gender");
      const gender = genderEl ? genderEl.value : "Nam";
      const errorMsg = document.getElementById("reg-error-msg");
      const successMsg = document.getElementById("reg-success-msg");

      if (!name || !username || !pass || !email) {
        alert("Vui lòng nhập đầy đủ tất cả các trường!");
        return;
      }

      DBManager.getUser(username).then(existingUser => {
        if (existingUser) {
          if (errorMsg) errorMsg.classList.remove("hidden");
          if (successMsg) successMsg.classList.add("hidden");
          return;
        }

        const newUser = {
          username,
          email,
          password: pass,
          name,
          role: "member",
          hasCompletedSurvey: false,
          plan: "none",
          currentWeight: 0,
          targetWeight: 0,
          height: 0,
          age: 0,
          goal: "",
          injury: "",
          workoutLoc: "",
          completedTasks: "[]",
          mealBreakfast: "",
          mealLunch: "",
          mealSnack: "",
          mealDinner: "",
          gender: gender
        };

        DBManager.registerUser(newUser).then(() => {
          if (errorMsg) errorMsg.classList.add("hidden");
          if (successMsg) successMsg.classList.remove("hidden");
          setTimeout(() => {
            loginUser(newUser);
          }, 1500);
        });
      }).catch(err => {
        console.error(err);
        alert("Đã xảy ra lỗi trong qufunction logoutUser() {
  currentUser = null;
  
  // Restore Header UI
  profileDropdown.classList.add("hidden");
  navLinks.authBtn.classList.remove("hidden");
  if (navLinks.ptPortal) navLinks.ptPortal.classList.add("hidden");
  const navAdmin = document.getElementById("nav-admin");
  if (navAdmin) navAdmin.classList.add("hidden");
  
  // Re-lock icons
  document.getElementById("icon-membership-lock").className = "fa-solid fa-lock nav-lock-icon";
  document.getElementById("icon-membership-lock").style.color = "var(--primary-red)";
  document.getElementById("icon-roadmap-lock").className = "fa-solid fa-lock nav-lock-icon";
  document.getElementById("icon-roadmap-lock").style.color = "var(--primary-red)";

  // Reset inputs
  document.getElementById("login-username").value = "";
  document.getElementById("login-password").value = "";
  document.getElementById("reg-fullname").value = "";
  document.getElementById("reg-username").value = "";
  document.getElementById("reg-password").value = "";
  document.getElementById("reg-email").value = "";
  
  const loginError = document.getElementById("login-error-msg");
  if (loginError) loginError.classList.add("hidden");
  const regError = document.getElementById("reg-error-msg");
  if (regError) regError.classList.add("hidden");
  const regSuccess = document.getElementById("reg-success-msg");
  if (regSuccess) regSuccess.classList.add("hidden");

  // Redirect home
  showSection("home");
  alert("Đạ đăng xuất khỏi hệ thống.");
}
chAuthTab = switchAuthTab;

function loginUser(user) {
  currentUser = user;
  
  // UI header updates
  navLinks.authBtn.classList.add("hidden");
  profileDropdown.classList.remove("hidden");
  
  // Fill avatar first character and info
  profileAvatarChar.textContent = user.name.charAt(0).toUpperCase();
  profileName.textContent = user.name;
  profileRole.textContent = user.role === "pt" ? "Huấn Luyện Viên" : (user.plan === "premium" ? "Hội Viên Premium ⭐" : (user.plan === "basic" ? "Hội Viên Thường" : "Hội Viên"));

  // Lock status icon updates
  if (user.role === "member") {
    document.getElementById("icon-membership-lock").className = "fa-solid fa-unlock-keyhole nav-lock-icon";
    document.getElementById("icon-membership-lock").style.color = "var(--accent-green)";
    
    // Unlock roadmap icon
    if (user.plan !== "none") {
      document.getElementById("icon-roadmap-lock").className = "fa-solid fa-unlock-keyhole nav-lock-icon";
      document.getElementById("icon-roadmap-lock").style.color = "var(--accent-green)";
    } else {
      document.getElementById("icon-roadmap-lock").className = "fa-solid fa-lock nav-lock-icon";
      document.getElementById("icon-roadmap-lock").style.color = "var(--primary-red)";
    }

    if (navLinks.ptPortal) navLinks.ptPortal.classList.add("hidden");
    
    if (user.hasCompletedSurvey) {
      dropdownActionBtn.innerHTML = `<i class="fa-solid fa-map-location-dot"></i> Vào Lộ Trình`;
      showSection("roadmap");
    } else {
      dropdownActionBtn.innerHTML = `<i class="fa-solid fa-dumbbell"></i> Vào Khảo Sát`;
      showSection("membership");
    }
  } else if (user.role === "pt") {
    document.getElementById("icon-membership-lock").className = "fa-solid fa-lock nav-lock-icon";
    document.getElementById("icon-membership-lock").style.color = "var(--primary-red)";
    document.getElementById("icon-roadmap-lock").className = "fa-solid fa-lock nav-lock-icon";
    document.getElementById("icon-roadmap-lock").style.color = "var(--primary-red)";
    
    if (navLinks.ptPortal) navLinks.ptPortal.classList.remove("hidden");
    dropdownActionBtn.innerHTML = `<i class="fa-solid fa-chart-line"></i> Vào PT Portal`;
    
    showSection("ptPortal");
  } else if (user.role === "admin") {
    // Hide normal nav items, show admin nav
    document.getElementById("icon-membership-lock").className = "fa-solid fa-lock nav-lock-icon";
    document.getElementById("icon-membership-lock").style.color = "var(--primary-red)";
    document.getElementById("icon-roadmap-lock").className = "fa-solid fa-lock nav-lock-icon";
    document.getElementById("icon-roadmap-lock").style.color = "var(--primary-red)";
    if (navLinks.ptPortal) navLinks.ptPortal.classList.add("hidden");
    const navAdmin = document.getElementById("nav-admin");
    if (navAdmin) navAdmin.classList.remove("hidden");
    profileRole.textContent = "⭐ Quản Trị Viên";
    dropdownActionBtn.innerHTML = `<i class="fa-solid fa-shield-halved"></i> Vào Admin Panel`;
    adminRefreshAll();
    showSection("admin");
  }
}

function logoutUser() {
  currentUser = null;
  
  // Restore Header UI
  profileDropdown.classList.add("hidden");
  navLinks.authBtn.classList.remove("hidden");
  if (navLinks.ptPortal) navLinks.ptPortal.classList.add("hidden");
  
  // Re-lock icons
  document.getElementById("icon-membership-lock").className = "fa-solid fa-lock nav-lock-icon";
  document.getElementById("icon-membership-lock").style.color = "var(--primary-red)";
  document.getElementById("icon-roadmap-lock").className = "fa-solid fa-lock nav-lock-icon";
  document.getElementById("icon-roadmap-lock").style.color = "var(--primary-red)";

  // Reset inputs
  document.getElementById("login-username").value = "";
  document.getElementById("login-password").value = "";
  document.getElementById("reg-fullname").value = "";
  document.getElementById("reg-username").value = "";
  document.getElementById("reg-password").value = "";
  document.getElementById("reg-email").value = "";
  
  const loginError = document.getElementById("login-error-msg");
  if (loginError) loginError.classList.add("hidden");
  const regError = document.getElementById("reg-error-msg");
  if (regError) regError.classList.add("hidden");
  const regSuccess = document.getElementById("reg-success-msg");
  if (regSuccess) regSuccess.classList.add("hidden");

  // Redirect home
  showSection("home");
  alert("Bạn đã đăng xuất khỏi hệ thống.");
}

// 6. Survey Submit Handler
function setupSurveyHandler() {
  const surveyForm = document.getElementById("survey-form");
  if (!surveyForm) return;

  // --- Dynamic Progress Bar ---
  const TOTAL_SURVEY_QUESTIONS = 30;
  function updateSurveyProgress() {
    // Count answered question groups (each radio/checkbox group = 1 question)
    const answeredNames = new Set();
    // Number inputs (q1-q4)
    ['q1','q2','q3','q4'].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.value.trim() !== '') answeredNames.add(id);
    });
    // Radio/Checkbox inputs (q5 to q30)
    surveyForm.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked').forEach(el => {
      answeredNames.add(el.name);
    });
    const answered = answeredNames.size;
    const pct = Math.min(100, Math.round((answered / TOTAL_SURVEY_QUESTIONS) * 100));
    const bar = document.getElementById('survey-progress-bar');
    const txt = document.getElementById('survey-progress-text');
    if (bar) bar.style.width = pct + '%';
    if (txt) txt.textContent = answered + ' / ' + TOTAL_SURVEY_QUESTIONS + ' câu';
  }
  surveyForm.addEventListener('change', updateSurveyProgress);
  surveyForm.addEventListener('input', updateSurveyProgress);

  surveyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("Vui lòng đăng nhập trước khi hoàn thành khảo sát!");
      showSection("auth");
      return;
    }

    const q1 = parseInt(document.getElementById("q1").value); // Height
    const q2 = parseInt(document.getElementById("q2").value); // Weight
    const q3 = parseInt(document.getElementById("q3").value); // Age
    const q4 = parseInt(document.getElementById("q4").value); // Target weight

    // Q5: Gender (radio)
    const q5El = document.querySelector('input[name="q5"]:checked');
    const q5Gender = q5El ? q5El.value : "Nam";

    // Q6: Goals (checkboxes) — was q5 before
    const q6Els = document.querySelectorAll('input[name="q6"]:checked');
    const q6Goals = q6Els.length > 0 ? Array.from(q6Els).map(el => el.value) : ["Giảm Cân"];
    const primaryGoal = q6Goals[0];

    // Q8: Injury (radio) — was q7
    const q8El = document.querySelector('input[name="q8"]:checked');
    const q8Injury = q8El ? q8El.value : "Không";

    // Q22: Daily activity / workout location hint — was q21
    const q22El = document.querySelector('input[name="q22"]:checked');
    const q22 = q22El ? q22El.value : "Đi lại nhẹ";

    // Q24: Goal duration — was q23
    const q24El = document.querySelector('input[name="q24"]:checked');
    const q24Duration = q24El ? q24El.value : "3 tháng";

    // Q25: Service plan — was q24
    const q25El = document.querySelector('input[name="q25"]:checked');
    const q25Plan = q25El ? q25El.value : "Gói Thường";

    if (isNaN(q1) || isNaN(q2) || isNaN(q3) || isNaN(q4)) {
      alert("Vui lòng điền đầy đủ các thông tin số đo cơ bản (Chiều cao, Cân nặng, Tuổi, Cân nặng mục tiêu)!");
      return;
    }

    // Determine plan from Q25
    const plan = q25Plan === "Gói Premium" ? "premium" : "basic";

    // Determine workout location from Q13 (frequency) — was q12
    const q13El = document.querySelector('input[name="q13"]:checked');
    const workoutLoc = q13El && q13El.value === "Không tập" ? "Tại nhà" : "Phòng Gym";

    const surveyData = {
      plan: plan,
      currentWeight: q2,
      targetWeight: q4,
      height: q1,
      age: q3,
      gender: q5Gender,
      goal: primaryGoal,
      goals: q6Goals,
      activeGoal: q6Goals[0],
      injury: q8Injury,
      workoutLoc: workoutLoc,
      duration: q24Duration,
      currentWeek: 1
    };

    DBManager.updateUserSurvey(currentUser.username, surveyData).then(() => {
      // Sync local object
      currentUser.hasCompletedSurvey = true;
      currentUser.plan = plan;
      currentUser.currentWeight = q2;
      currentUser.targetWeight = q4;
      currentUser.height = q1;
      currentUser.age = q3;
      currentUser.gender = q5Gender;
      currentUser.goal = primaryGoal;
      currentUser.goals = q6Goals;
      currentUser.activeGoal = q6Goals[0];
      currentUser.goalTasks = "{}";
      currentUser.bodyStats = JSON.stringify({ weight: q2, fatPercent: 20, musclePercent: 35, cardioLevel: 30, flexibilityLevel: 30, armMuscle: 30, legMuscle: 30, shoulderMuscle: 30, chestMuscle: 30 });
      currentUser.injury = q8Injury;
      currentUser.workoutLoc = workoutLoc;
      currentUser.duration = q24Duration;
      currentUser.currentWeek = 1;
      currentUser.completedTasks = "[]";

      alert("✅ Khảo sát hoàn tất! Lộ trình cá nhân hóa cho " + q6Goals.join(", ") + " đã sẵn sàng.");
      
      // Update locks on UI
      document.getElementById("icon-roadmap-lock").className = "fa-solid fa-unlock-keyhole nav-lock-icon";
      document.getElementById("icon-roadmap-lock").style.color = "var(--accent-green)";
      profileRole.textContent = plan === "premium" ? "Hội Viên Premium ⭐" : "Hội Viên Thường";

      showSection("roadmap");
    }).catch(err => {
      console.error(err);
      alert("Đã xảy ra lỗi khi lưu kết quả khảo sát.");
    });
  });
}

// 7. Roadmap Interactivity logic
function setupRoadmapHandlers() {
  // btn-evolve-body (full program complete)
  const btnEvolve = document.getElementById("btn-evolve-body");
  if (btnEvolve) {
    btnEvolve.addEventListener("click", () => {
      if (btnEvolve.classList.contains("disabled") || !currentUser) return;
      const bs = JSON.parse(currentUser.bodyStats || "{}");
      let cWeight = bs.weight || currentUser.currentWeight;
      const tWeight = currentUser.targetWeight;
      if (cWeight < tWeight) cWeight = parseFloat((cWeight + 0.5).toFixed(1));
      else if (cWeight > tWeight) cWeight = parseFloat((cWeight - 0.5).toFixed(1));
      bs.weight = cWeight;
      currentUser.bodyStats = JSON.stringify(bs);
      currentUser.currentWeight = cWeight;
      currentUser.goalTasks = "{}";
      Promise.all([
        DBManager.updateUserWeight(currentUser.username, cWeight),
        DBManager.updateBodyStats(currentUser.username, bs),
        DBManager.updateGoalTasks(currentUser.username, {})
      ]).then(() => {
        alert(`Được rồi! Tất cả lộ trình đã hoàn tất. Cân nặng cập nhật: ${cWeight}kg. Lộ trình mới bắt đầu!`);
        renderRoadmap();
      }).catch(err => { console.error(err); alert("Lỗi khi cập nhật"); });
    });
  }
}

function renderRoadmap() {
  const lockOverlay = document.getElementById("roadmap-lock-overlay");
  const unlockedContainer = document.getElementById("roadmap-unlocked-container");

  if (!currentUser || currentUser.plan === "none") {
    if (lockOverlay) lockOverlay.classList.remove("hidden");
    if (unlockedContainer) unlockedContainer.classList.add("hidden");
    return;
  }

  if (lockOverlay) lockOverlay.classList.add("hidden");
  if (unlockedContainer) unlockedContainer.classList.remove("hidden");

  // Load User Stats & Body Stats
  const height = currentUser.height || 170;
  const targetWeight = currentUser.targetWeight || 60;
  const age = currentUser.age || 25;
  const injury = currentUser.injury || "Không";
  const workoutLoc = currentUser.workoutLoc || "Phòng Gym";

  // Parse body stats
  let bs = { weight: currentUser.currentWeight || 65, fatPercent: 20, musclePercent: 35, cardioLevel: 30, flexibilityLevel: 30, armMuscle: 30, legMuscle: 30, shoulderMuscle: 30, chestMuscle: 30 };
  try {
    if (currentUser.bodyStats) {
      bs = { ...bs, ...JSON.parse(currentUser.bodyStats) };
    }
  } catch (e) {
    console.error("Error parsing body stats", e);
  }

  const currentWeight = bs.weight;
  currentUser.currentWeight = currentWeight; // Sync back

  // Render Basic Stats
  document.getElementById("roadmap-summary-height").textContent = `${height} cm`;
  document.getElementById("roadmap-summary-weight").textContent = `${currentWeight} kg`;
  document.getElementById("roadmap-summary-target-weight").textContent = `${targetWeight} kg`;

  // Render Multi-Goal Tabs
  const tabsWrapper = document.getElementById("goal-tabs-wrapper");
  if (tabsWrapper) {
    tabsWrapper.innerHTML = "";
    const userGoals = currentUser.goals || ["Giảm Cân"];
    
    // Ensure activeGoal is valid
    if (!userGoals.includes(currentUser.activeGoal)) {
      currentUser.activeGoal = userGoals[0] || "Giảm Cân";
    }

    userGoals.forEach(g => {
      const btn = document.createElement("button");
      btn.className = `goal-tab-btn ${g === currentUser.activeGoal ? 'active' : ''}`;
      btn.innerHTML = `<i class="fa-solid fa-bullseye"></i> ${g}`;
      btn.addEventListener("click", () => {
        currentUser.activeGoal = g;
        DBManager.updateActiveGoal(currentUser.username, currentUser.goals, g).then(() => {
          renderRoadmap();
        });
      });
      tabsWrapper.appendChild(btn);
    });
  }

  const activeGoal = currentUser.activeGoal || "Giảm Cân";

  // Calculate BMI
  const heightM = height / 100;
  const bmi = (currentWeight / (heightM * heightM)).toFixed(1);
  document.getElementById("roadmap-bmi-value").textContent = bmi;
  
  let bmiClass = "";
  let pointerLeft = 0;
  if (bmi < 18.5) {
    bmiClass = "Thiếu Cân (Dưới chuẩn)";
    pointerLeft = 15;
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiClass = "Bình Thường (Chuẩn thể lực)";
    pointerLeft = 45;
  } else if (bmi >= 25 && bmi < 30) {
    bmiClass = "Thừa Cân (Cần vận động)";
    pointerLeft = 72;
  } else {
    bmiClass = "Béo Phì (Cần tập giảm mỡ)";
    pointerLeft = 90;
  }
  document.getElementById("roadmap-bmi-status").textContent = bmiClass;
  document.getElementById("roadmap-bmi-pointer").style.left = `${pointerLeft}%`;

  // Update Body Stats Indicators & Meters
  const updateMeter = (valId, fillId, val) => {
    const valEl = document.getElementById(valId);
    const fillEl = document.getElementById(fillId);
    if (valEl) valEl.textContent = typeof val === 'number' ? `${val}%` : val;
    if (fillEl) fillEl.style.width = typeof val === 'number' ? `${val}%` : `${val}`;
  };

  updateMeter("roadmap-val-fat", "roadmap-fill-fat", bs.fatPercent);
  updateMeter("roadmap-val-muscle", "roadmap-fill-muscle", bs.musclePercent);
  updateMeter("roadmap-val-cardio", "roadmap-fill-cardio", bs.cardioLevel);
  updateMeter("roadmap-val-flex", "roadmap-fill-flex", bs.flexibilityLevel);

  updateMeter("roadmap-val-arm", "roadmap-fill-arm", bs.armMuscle);
  updateMeter("roadmap-val-leg", "roadmap-fill-leg", bs.legMuscle);
  updateMeter("roadmap-val-shoulder", "roadmap-fill-shoulder", bs.shoulderMuscle);
  updateMeter("roadmap-val-chest", "roadmap-fill-chest", bs.chestMuscle);

  // Render Body Avatar SVG
  updateBodyAvatar(bs);

  // Calories (TDEE) calculation
  const bmr = 10 * currentWeight + 6.25 * height - 5 * age + 5;
  let multiplier = 1.375; // Active lifestyle
  let targetCalories = Math.round(bmr * multiplier);
  if (activeGoal === "Giảm Cân" || activeGoal === "Cắt Nét Cơ") {
    targetCalories -= 400;
  } else if (activeGoal === "Tăng Cơ Bắp" || activeGoal === "Tăng Cơ Ngực" || activeGoal === "Tăng Cơ Tay" || activeGoal === "Tăng Cơ Chân" || activeGoal === "Tăng Cơ Vai") {
    targetCalories += 300;
  }
  document.getElementById("roadmap-nutri-calories").textContent = `${targetCalories.toLocaleString()} kcal`;
  
  // Water target
  const water = (currentWeight * 0.035 + 0.5).toFixed(1);
  document.getElementById("roadmap-nutri-water").textContent = `${water} Lít`;

  // Macros Calculation
  let pRatio = 0.3, cRatio = 0.5, fRatio = 0.2;
  if (activeGoal.startsWith("Tăng Cơ")) {
    pRatio = 0.35; cRatio = 0.45;
  } else if (activeGoal === "Giảm Cân" || activeGoal === "Cắt Nét Cơ") {
    pRatio = 0.4; cRatio = 0.35; fRatio = 0.25;
  }

  document.getElementById("roadmap-macro-protein").textContent = `${Math.round((targetCalories * pRatio) / 4)}g`;
  document.getElementById("roadmap-macro-carbs").textContent = `${Math.round((targetCalories * cRatio) / 4)}g`;
  document.getElementById("roadmap-macro-fats").textContent = `${Math.round((targetCalories * fRatio) / 9)}g`;

  document.getElementById("roadmap-fill-protein").style.width = `${pRatio * 100}%`;
  document.getElementById("roadmap-fill-carbs").style.width = `${cRatio * 100}%`;
  document.getElementById("roadmap-fill-fats").style.width = `${fRatio * 100}%`;

  // Health warnings
  const warningList = document.getElementById("roadmap-warning-list");
  warningList.innerHTML = "";
  if (injury === "Đầu gối" || injury === "Lưng" || injury === "Vai" || injury === "Khác") {
    warningList.innerHTML = `<li><strong class="text-red">Lưu ý chấn thương (${injury}):</strong> Các bài tập liên quan đã được HLV tinh chỉnh giảm áp lực và tránh các động tác gây quá tải cơ xương khớp.</li>`;
  } else {
    warningList.innerHTML = `<li><strong class="text-blue"><i class="fa-solid fa-circle-check"></i> An toàn tuyệt đối:</strong> Không ghi nhận tiền sử chấn thương hạn chế. Hãy tập trung tăng tối đa cường độ!</li>`;
  }

  // Generate Workout & Nutrition Adaptations
  generateAdaptedRoadmapTasks(workoutLoc, activeGoal, injury);
}

// Render dynamic human silhouette with muscle heatmap colors
function updateBodyAvatar(bs) {
  const container = document.getElementById("body-avatar-container");
  if (!container) return;

  // Color helper based on stat level
  const getColor = (val) => {
    if (val < 45) return "#ff4d4d"; // Red / Underdeveloped
    if (val < 70) return "#ffc83b"; // Yellow / Average
    return "#00cc66"; // Green / Developed
  };

  const chestCol = getColor(bs.chestMuscle);
  const armCol = getColor(bs.armMuscle);
  const legCol = getColor(bs.legMuscle);
  const shoulderCol = getColor(bs.shoulderMuscle);
  const coreCol = getColor(bs.musclePercent); // Use overall muscle for core

  const isFemale = currentUser && currentUser.gender === "Nữ";

  if (isFemale) {
    // Detailed female SVG silhouette (slimmer waist, wider hips, smaller shoulders)
    container.innerHTML = `
      <svg viewBox="0 0 200 400" width="100%" height="100%" style="max-height: 380px;">
        <!-- Body Background Silhouette shadow -->
        <path d="M100 40 C78 40, 78 75, 100 75 C122 75, 122 40, 100 40 Z" fill="#2d2d2d" opacity="0.5"/>
        <path d="M80 82 L120 82 L124 112 L118 160 L126 180 L122 230 L130 355 L117 355 L102 245 L87 355 L74 355 L82 230 L78 180 L86 160 L80 112 Z" fill="#1e1e1e" />

        <!-- Head (gray, not trained directly) -->
        <circle cx="100" cy="55" r="16" fill="#555" stroke="#333" stroke-width="1.5"/>

        <!-- Shoulders (Traps & Delts) - narrower -->
        <path id="svg-shoulders" d="M82 82 C74 85, 70 95, 73 108 L78 108 L80 92 L88 85 Z M118 82 C126 85, 130 95, 127 108 L122 108 L120 92 L112 85 Z" 
          fill="${shoulderCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ vai: ${bs.shoulderMuscle}%"/>

        <!-- Chest - feminine contour -->
        <path id="svg-chest" d="M85 87 L115 87 L118 112 C108 117, 92 117, 82 112 Z" 
          fill="${chestCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ ngực: ${bs.chestMuscle}%"/>

        <!-- Arms (Bicep / Tricep) - slimmer -->
        <path id="svg-left-arm" d="M72 110 L58 160 L62 195 L68 195 L65 160 L76 115 Z" 
          fill="${armCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ tay: ${bs.armMuscle}%"/>
        <path id="svg-right-arm" d="M128 110 L142 160 L138 195 L132 195 L135 160 L124 115 Z" 
          fill="${armCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ tay: ${bs.armMuscle}%"/>

        <!-- Core (slimmer waist, wider hips) -->
        <path id="svg-core" d="M82 114 C88 122, 112 122, 118 114 L124 178 L76 178 Z" 
          fill="${coreCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ bụng / Core: ${bs.musclePercent}%"/>

        <!-- Legs (curvier hips to legs) -->
        <path id="svg-left-leg" d="M76 180 L98 180 L96 260 L83 355 L70 355 L82 260 Z" 
          fill="${legCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ chân: ${bs.legMuscle}%"/>
        <path id="svg-right-leg" d="M102 180 L124 180 L122 260 L130 355 L117 355 L118 260 Z" 
          fill="${legCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ chân: ${bs.legMuscle}%"/>
      </svg>
    `;
  } else {
    // Detailed male SVG silhouette (wider shoulders, V-taper)
    container.innerHTML = `
      <svg viewBox="0 0 200 400" width="100%" height="100%" style="max-height: 380px;">
        <!-- Body Background Silhouette shadow -->
        <path d="M100 40 C75 40, 75 75, 100 75 C125 75, 125 40, 100 40 Z" fill="#2d2d2d" opacity="0.5"/>
        <path d="M75 80 L125 80 L135 120 L125 180 L120 230 L135 360 L120 360 L100 240 L80 360 L65 360 L80 230 L75 180 L65 120 Z" fill="#1e1e1e" />

        <!-- Head (gray, not trained directly) -->
        <circle cx="100" cy="55" r="18" fill="#555" stroke="#333" stroke-width="1.5"/>

        <!-- Shoulders (Traps & Delts) -->
        <path id="svg-shoulders" d="M78 80 C68 83, 62 95, 66 108 L72 108 L75 90 L85 83 Z M122 80 C132 83, 138 95, 134 108 L128 108 L125 90 L115 83 Z" 
          fill="${shoulderCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ vai: ${bs.shoulderMuscle}%"/>

        <!-- Chest -->
        <path id="svg-chest" d="M82 85 L118 85 L121 115 C110 120, 90 120, 79 115 Z" 
          fill="${chestCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ ngực: ${bs.chestMuscle}%"/>

        <!-- Arms (Bicep / Tricep) -->
        <path id="svg-left-arm" d="M65 110 L50 160 L55 200 L62 200 L58 160 L70 115 Z" 
          fill="${armCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ tay: ${bs.armMuscle}%"/>
        <path id="svg-right-arm" d="M135 110 L150 160 L145 200 L138 200 L142 160 L130 115 Z" 
          fill="${armCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ tay: ${bs.armMuscle}%"/>

        <!-- Core / Abs -->
        <path id="svg-core" d="M80 118 C85 125, 115 125, 120 118 L123 180 L77 180 Z" 
          fill="${coreCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ bụng / Core: ${bs.musclePercent}%"/>

        <!-- Legs (Thighs / Quads / Calves) -->
        <path id="svg-left-leg" d="M78 182 L98 182 L98 260 L85 360 L70 360 L85 260 Z" 
          fill="${legCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ chân: ${bs.legMuscle}%"/>
        <path id="svg-right-leg" d="M102 182 L122 182 L115 260 L130 360 L115 360 L102 260 Z" 
          fill="${legCol}" stroke="#222" stroke-width="1.5" style="transition: fill 0.5s ease; cursor: pointer;" title="Cơ chân: ${bs.legMuscle}%"/>
      </svg>
    `;
  }
}

const roadmapDatabase = {
  "Giảm Cân": {
    "Phòng Gym": {
      session1: {
        workout: "Chạy dốc Treadmill 30 phút + Đẩy ngực máy Chest Press (3x15)",
        workoutEffect: "Tăng nhịp tim tối ưu hóa vùng đốt mỡ, săn chắc cơ ngực trước và tăng cường trao đổi chất.",
        workoutExtra: "Plank liên sườn (Side Plank) 3 hiệp x 30 giây để thắt chặt vòng eo.",
        nutrition: "Yến mạch nguyên cám trộn hạt chia + 3 lòng trắng trứng luộc.",
        nutritionReason: "Yến mạch giải phóng năng lượng chậm giúp duy trì thể lực dai dẳng. Lòng trắng trứng bổ sung đạm tinh khiết, phục hồi sợi cơ mà không gây dư thừa mỡ.",
        nutritionLimit: "Hạn chế tinh bột trắng (bánh mì, xôi), sữa đặc, đường tinh luyện. Lý do: Làm tăng nhanh đường huyết, dễ tích mỡ bụng.",
        rest: "Ngủ sâu trước 22:30, tối thiểu 7.5 tiếng để giảm cortisol, kích hoạt đốt mỡ ban đêm."
      },
      session2: {
        workout: "Đạp xe Indoor Cycling 20 phút + Leg Press đùi trước (3x12)",
        workoutEffect: "Đốt cháy calo cao, kích thích các nhóm cơ lớn nhất cơ thể (mông, đùi) phát triển và tiêu thụ mỡ thừa.",
        workoutExtra: "Gập bụng đạp xe (Bicycle Crunches) 3 hiệp x 20 reps để thon gọn eo.",
        nutrition: "150g ức gà áp chảo + 1 bát gạo lứt + đĩa súp lơ luộc xanh mát.",
        nutritionReason: "Ức gà dồi dào đạm nạc thúc đẩy chuyển hóa. Gạo lứt giàu chất xơ giúp no lâu, giảm cảm giác thèm ăn.",
        nutritionLimit: "Hạn chế đồ ăn chiên xào nhiều dầu mỡ và nước ngọt. Lý do: Chứa chất béo chuyển hóa có hại và calo rỗng cản trở việc thâm hụt calo.",
        rest: "Giãn cơ đùi trước, đùi sau và bắp chân thật kỹ 10 phút trước ngủ để giải phóng căng cơ."
      },
      session3: {
        workout: "HIIT với tạ ấm Kettlebell Swing & Burpee liên hoàn (5 vòng)",
        workoutEffect: "Gia tăng áp lực trao đổi chất, kích hoạt hiệu ứng EPOC để tiếp tục đốt cháy calo trong 24 giờ sau tập.",
        workoutExtra: "Nhảy dây tốc độ cao 3 hiệp x 1 phút.",
        nutrition: "150g cá hồi áp chảo + măng tây luộc + 1 quả táo nhỏ trước tập.",
        nutritionReason: "Cá hồi cung cấp Omega-3 giảm viêm cơ khớp. Măng tây hỗ trợ đào thải độc tố và nước thừa ra ngoài.",
        nutritionLimit: "Hạn chế thức ăn nhanh chứa nhiều natri (muối), ăn khuya sau 20:00. Lý do: Natri cao gây trữ nước cơ thể; ăn khuya làm chậm hormone tăng trưởng.",
        rest: "Xông hơi phục hồi 15 phút hoặc ngâm chân nước ấm giúp thư giãn sâu cơ khớp."
      }
    },
    "Tại nhà": {
      session1: {
        workout: "Bài tập Cardio nhảy Jumping Jacks liên hoàn (4 hiệp x 3 phút)",
        workoutEffect: "Đốt cháy calo tức thì, cải thiện độ dẻo dai toàn diện và khả năng hô hấp.",
        workoutExtra: "Hít đất tỳ gối (Knee Push-ups) 3 hiệp x 10 cái giúp săn chắc thân trên.",
        nutrition: "Khoai lang luộc + 2 quả trứng ốp la (ít dầu) + súp lơ luộc.",
        nutritionReason: "Khoai lang cung cấp carbs chất lượng cao, trứng dồi dào protein và chất béo tốt phục hồi cơ.",
        nutritionLimit: "Hạn chế đồ ăn đóng hộp và mứt trái cây nhiều đường. Lý do: Đường đơn làm tụt năng lượng nhanh và gây tích mỡ thừa.",
        rest: "Ngủ đủ giấc, uống đủ 2.5 lít nước dàn trải đều cả ngày để cơ thể thanh lọc mỡ."
      },
      session2: {
        workout: "Bài tập Bodyweight Squat & Plank liên sườn (3x15 reps)",
        workoutEffect: "Củng cố sức mạnh nhóm cơ trung tâm, săn chắc vùng đùi mông và giảm mỡ hông sườn.",
        workoutExtra: "Nhấc mông sàn (Glute Bridge) 3 hiệp x 15 reps.",
        nutrition: "150g thịt heo thăn nạc luộc + salad rau củ dầu giấm + cơm lứt.",
        nutritionReason: "Thịt heo nạc cung cấp đạm lành mạnh thiết yếu. Salad hỗ trợ chất xơ và vitamin tối ưu trao đổi chất.",
        nutritionLimit: "Hạn chế nước sốt kem béo, mayonaise nhiều muối. Lý do: Chứa chất béo bão hòa cao làm tăng hàm lượng mỡ xấu.",
        rest: "Nghỉ ngơi tích cực, thực hiện bài thở sâu bằng bụng 5 phút trước ngủ giúp giảm áp lực cột sống."
      },
      session3: {
        workout: "HIIT nhịp tim cao Jumping Lunges & leo núi Mountain Climber",
        workoutEffect: "Đốt mỡ cường độ cao tại nhà, thử thách sức chịu đựng tim mạch và cơ đùi.",
        workoutExtra: "Plank tĩnh (Forearm Plank) giữ trong 60 giây.",
        nutrition: "150g cá ngừ hấp + đĩa rau củ luộc + 1 quả chuối sứ.",
        nutritionReason: "Cá ngừ dồi dào protein nạc tinh khiết hỗ trợ cắt nét. Chuối cung cấp kali chống chuột rút cơ bắp.",
        nutritionLimit: "Hạn chế đồ ăn vặt đóng gói (bánh tráng, snack) và rượu bia. Lý do: Rượu bia ngăn chặn quá trình oxy hóa chất béo.",
        rest: "Tắm nước ấm trước khi đi ngủ 1 tiếng để cơ bắp được thư giãn và ngủ ngon sâu giấc hơn."
      }
    }
  },
  "Tăng Cơ Bắp": {
    "Phòng Gym": {
      session1: {
        workout: "Đẩy tạ đòn Bench Press nằm ghế ngang (4 hiệp x 8 reps)",
        workoutEffect: "Kích thích tối đa các sợi cơ ngực, cơ vai trước phát triển độ dày và lực đẩy bộc phát.",
        workoutExtra: "Đẩy ngực trên với tạ đơn (Incline Dumbbell Press) 3 hiệp x 10 reps.",
        nutrition: "Sinh tố yến mạch + bơ đậu phộng + chuối + 1 muỗng Whey Protein.",
        nutritionReason: "Yến mạch và bơ đậu phộng dồi dào năng lượng phục vụ nâng tạ nặng. Whey cung cấp đạm nhanh xây cơ.",
        nutritionLimit: "Hạn chế các loại thức uống chứa nhiều đường đơn trước tập. Lý do: Gây sụt giảm insulin đột ngột trong buổi tập.",
        rest: "Nghỉ ngơi giữa các hiệp tập nặng từ 2-3 phút để phục hồi ATP (năng lượng cơ bắp)."
      },
      session2: {
        workout: "Gánh tạ đòn Barbell Squat sau gáy (4 hiệp x 8 reps)",
        workoutEffect: "Bài tập vua giúp giải phóng testosterone tự nhiên, phát triển đùi trước, đùi sau và cơ mông khỏe mạnh.",
        workoutExtra: "Gập chân máy đùi sau (Lying Leg Curl) 3 hiệp x 12 reps.",
        nutrition: "200g thịt bò áp chảo + cơm trắng chín dẻo + bông cải xanh xào tỏi.",
        nutritionReason: "Thịt bò giàu sắt, kẽm và creatine tự nhiên giúp phát triển lực nâng. Cơm trắng bù glycogen tức thì.",
        nutritionLimit: "Hạn chế đồ ăn đóng hộp nhiều chất bảo quản. Lý do: Giảm khả năng tổng hợp đạm và phục hồi sợi cơ bị rách.",
        rest: "Ngủ sâu từ 8 tiếng mỗi ngày để tạo điều kiện tối đa cho hoóc-môn tăng trưởng tái cấu trúc cơ bắp."
      },
      session3: {
        workout: "Deadlift nhấc thanh đòn nặng từ sàn (3 hiệp x 6 reps)",
        workoutEffect: "Tác động toàn bộ chuỗi cơ phía sau (lưng, mông, đùi sau), tăng cường sức mạnh cốt lõi vượt trội.",
        workoutExtra: "Kéo xà đơn bám rộng tay (Wide-grip Pull-ups) 3 hiệp x tối đa reps.",
        nutrition: "200g ức gà nướng mật ong + khoai lang mật + salad trộn dầu olive.",
        nutritionReason: "Ức gà cung cấp lượng đạm khổng lồ xây dựng tế bào cơ mới. Khoai lang bù tinh bột phục hồi.",
        nutritionLimit: "Hạn chế bia rượu hoàn toàn. Lý do: Cồn ngăn chặn sự tổng hợp protein cơ bắp (MPS) lên tới 30%.",
        rest: "Nghỉ ngơi hoàn toàn, xông hơi nóng/lạnh xen kẽ hỗ trợ lưu thông máu phục hồi cơ bắp."
      }
    },
    "Tại nhà": {
      session1: {
        workout: "Standard Push-ups hít đất chuẩn tỳ cơ vai (4 hiệp x 15 reps)",
        workoutEffect: "Phát triển ngực, vai và bắp tay sau tại nhà, cải thiện sức bền cơ bắp vùng trên cơ thể.",
        workoutExtra: "Chống đẩy tỳ tay sau ghế (Tricep Dips) 3 hiệp x 12 reps.",
        nutrition: "Bánh mì đen quét bơ hạt + 3 quả trứng ốp la + 1 cốc sữa tươi.",
        nutritionReason: "Bánh mì đen cung cấp carb phức hợp lâu dài, trứng là nguồn protein sinh học cao nhất.",
        nutritionLimit: "Hạn chế cà phê sữa đá lề đường nhiều sữa đặc. Lý do: Gây tăng mỡ nhanh và làm quá tải đường tiêu hóa.",
        rest: "Ngủ sớm trước 23:00 để duy trì mức Testosterone cao giúp tăng tổng hợp cơ bắp."
      },
      session2: {
        workout: "Bulgarian Split Squat chân đơn tựa ghế cao (3 hiệp x 12 reps)",
        workoutEffect: "Tăng áp lực tập trung lên từng bên đùi trước và mông, cải thiện sự thăng bằng cột sống.",
        workoutExtra: "Nhón gót kiễng chân (Calf Raises) 3 hiệp x 25 reps săn chắc bắp chân.",
        nutrition: "200g ức gà áp chảo + cơm trắng + rau muống luộc chấm nước tương.",
        nutritionReason: "Cơm trắng hấp thu nhanh giúp cơ bắp căng phồng năng lượng sau buổi tập mệt mỏi.",
        nutritionLimit: "Hạn chế đồ ăn quá cay nóng và nước ngọt công nghiệp. Lý do: Chứa chất phụ gia cản trở lưu thông máu nuôi cơ.",
        rest: "Dành 15 phút giãn cơ lưng xô toàn thân, dùng con lăn foam roller nếu có để thư giãn cân cơ."
      },
      session3: {
        workout: "Xà đơn Pull-ups hoặc chèo lưng chống đẩy tỳ tay (4 hiệp x 8)",
        workoutEffect: "Tăng chiều rộng cơ lưng cánh dơi (latissimus dorsi) và sức kéo mạnh mẽ cho cánh tay.",
        workoutExtra: "Chống đẩy dốc đầu (Decline Push-ups) 3 hiệp x 12 reps.",
        nutrition: "150g cá hồi áp chảo + 2 củ khoai tây luộc nghiền + salad.",
        nutritionReason: "Cá hồi giàu chất béo tốt không bão hòa đơn bảo vệ tim mạch và đẩy nhanh tiến trình hồi phục.",
        nutritionLimit: "Hạn chế bỏ bữa tối hoặc ăn quá ít tinh bột. Lý do: Cơ thể thiếu năng lượng sẽ tự tiêu hủy cơ bắp (dị hóa).",
        rest: "Không làm việc nặng hay tập thêm bài cường độ cao khác, để cơ bắp phục hồi 48 giờ."
      }
    }
  },
  "Cắt Nét Cơ": {
    "Phòng Gym": {
      session1: {
        workout: "Ép cáp ngực Cable Crossover cảm nhận cơ (4 hiệp x 15 reps)",
        workoutEffect: "Cung cấp áp lực căng liên tục lên sợi cơ ngực trong, giúp cơ ngực dày, sâu và sắc nét hơn.",
        workoutExtra: "Bay tạ đơn sang bên (Dumbbell Lateral Raise) 3 hiệp x 15 reps để bo tròn cơ vai.",
        nutrition: "3 quả trứng luộc + 1 quả chuối chín + 1 tách cà phê đen không đường.",
        nutritionReason: "Trứng cung cấp đạm nạc cao. Cà phê đen hỗ trợ sinh nhiệt tự nhiên tăng tốc độ đốt mỡ.",
        nutritionLimit: "Hạn chế sữa tươi có đường, sữa chua nhiều đường. Lý do: Chứa đường lactose dễ gây tích nước dưới da làm mờ cơ.",
        rest: "Ngủ đủ 8 tiếng sâu để phục hồi hệ thần kinh trung ương sau những hiệp tập tạ cao độ."
      },
      session2: {
        workout: "Đạp đùi máy nghiêng 45 độ Leg Press tốc độ cao (4 hiệp x 12 reps)",
        workoutEffect: "Tác động sâu vào bốn đầu đùi (quadriceps), tăng độ sâu thớ cơ và đốt cháy nhiều calo dư thừa.",
        workoutExtra: "Đá đùi máy trước (Leg Extension) 3 hiệp x 15 reps cắt nét đùi trước.",
        nutrition: "150g cá áp chảo + cơm gạo lứt + đĩa măng tây xào dầu olive nhẹ.",
        nutritionReason: "Cá là nguồn đạm dễ tiêu hóa nhất. Dầu olive bổ sung chất béo tốt bảo vệ màng tế bào cơ.",
        nutritionLimit: "Hạn chế nước mắm mặn, muối chấm. Lý do: Muối (Natri) cao gây giữ nước dưới da làm mất độ nét cơ bắp.",
        rest: "Thực hiện massage nhẹ nhàng chân đùi để giảm acid lactic tích tụ gây đau mỏi cơ."
      },
      session3: {
        workout: "Gập bụng treo người bám xà Hanging Leg Raise (3 hiệp x 15)",
        workoutEffect: "Bài tập đỉnh cao rèn luyện cơ bụng dưới và cơ lõi săn chắc, tạo rãnh bụng sắc sảo.",
        workoutExtra: "Plank tĩnh chống khủy tay trên bóng gym 3 hiệp x 45 giây.",
        nutrition: "150g ức gà luộc + bông cải xanh + nửa quả bơ tươi chấm muối tiêu nhẹ.",
        nutritionReason: "Ức gà cung cấp protein tinh sạch. Bơ bổ sung axit béo không bão hòa tốt cho sức khỏe tổng thể.",
        nutritionLimit: "Hạn chế tuyệt đối nước ngọt, bánh kẹo ngọt và rượu bia. Lý do: Gây sụt giảm insulin làm mờ các thớ cơ đã tập.",
        rest: "Dành thời gian xông hơi khô (sauna) giúp giảm nước muối dư thừa dưới da, cơ thể săn chắc hơn."
      }
    },
    "Tại nhà": {
      session1: {
        workout: "Hít đất dốc đầu Decline Push-ups cắt nét vai dưới (4x12)",
        workoutEffect: "Tăng áp lực vào ngực trên và vai trước, giúp kiến tạo form vai ngực vuông vức sắc nét.",
        workoutExtra: "Hít đất hẹp tay hình kim cương (Diamond Push-ups) 3 hiệp x 10 reps.",
        nutrition: "Salad ức gà xé phay với cà chua bi + 1 lát bánh mì đen quét bơ lạt.",
        nutritionReason: "Ức gà xé cung cấp đạm, bánh mì đen giải phóng năng lượng chậm duy trì hoạt động bền vững.",
        nutritionLimit: "Hạn chế tinh bột GI cao như xôi nếp hay bánh mì gối trắng. Lý do: Kích hoạt mỡ sườn sụn tích tụ.",
        rest: "Uống đủ 3 lít nước lọc trong ngày, chia nhỏ liều lượng giúp da đàn hồi tốt hơn và nét cơ rõ hơn."
      },
      session2: {
        workout: "Bật nhảy tỳ gối Jump Squats phát lực nhịp tim lớn (4x15)",
        workoutEffect: "Tăng công suất bùng nổ của đùi mông, thúc đẩy nhịp tim vào vùng đốt mỡ nhanh chóng.",
        workoutExtra: "Đá chân sau quỳ gối (Donkey Kicks) 3 hiệp x 20 cái.",
        nutrition: "150g tôm hấp sả + salad xà lách dưa leo + khoai lang luộc.",
        nutritionReason: "Tôm chứa lượng đạm cao vượt trội và gần như không có chất béo, cực tốt cho giai đoạn siết nét cơ.",
        nutritionLimit: "Hạn chế các loại đồ chiên xào nhiều mỡ động vật. Lý do: Chất béo bão hòa làm chậm trao đổi chất lipid.",
        rest: "Giãn cơ toàn diện cơ thể 15 phút sau tập tập trung vào vùng đùi và lưng dưới để phục hồi khớp."
      },
      session3: {
        workout: "Plank xoay hông ngang Side Plank xoắn cơ sườn (3x45 giây)",
        workoutEffect: "Tạo các vết cắt xiên sắc sảo tại nhóm cơ liên sườn, cho cơ bụng săn gọn hình chữ V quyến rũ.",
        workoutExtra: "Gập bụng sâu nâng chân (Leg Raises) 3 hiệp x 15 reps.",
        nutrition: "150g thịt thăn bò nạc luộc/áp chảo + canh rau cải xanh nấu gừng.",
        nutritionReason: "Thịt bò cung cấp đạm dồi dào củng cố cơ bắp. Canh rau cung cấp nhiều chất xơ hòa tan hỗ trợ tiêu hóa.",
        nutritionLimit: "Hạn chế ăn carbs (tinh bột) sau 19:30 tối. Lý do: Giảm tích trữ glycogen dư thừa thành mỡ khi ngủ.",
        rest: "Ngâm chân nước ấm với muối Epsom để thư giãn cơ bắp hoàn toàn trước khi đi ngủ."
      }
    }
  },
  "Tăng Sức Bền": {
    "Phòng Gym": {
      session1: {
        workout: "Chạy Interval Run trên máy Treadmill (30 phút, luân phiên nhanh-chậm)",
        workoutEffect: "Kích thích dung tích phổi, tối ưu hóa khả năng hấp thụ oxy (VO2 Max) và gia tăng độ bền cơ tim.",
        workoutExtra: "Nhảy dây tốc độ cao liên tục 3 hiệp x 1.5 phút.",
        nutrition: "1 bát phở bò nạc + 1 cốc nước ép củ dền đỏ tươi.",
        nutritionReason: "Carb từ bánh phở tích lũy glycogen bền bỉ. Nước củ dền chứa nitrat giúp giãn mạch, tăng sức oxy cơ bắp.",
        nutritionLimit: "Hạn chế bánh ngọt béo, đồ uống nhiều ga. Lý do: Gây trướng bụng, đầy hơi khó thở khi chạy bền.",
        rest: "Tập trung hít thở sâu phục hồi 5-10 phút sau chạy bền để ổn định lại nhịp tim."
      },
      session2: {
        workout: "Assault Bike 15 phút + Rowing Machine kéo thuyền (3x10 phút)",
        workoutEffect: "Tập luyện sức bền phối hợp toàn thân thân trên lẫn thân dưới mà không gây áp lực va đập lên khớp gối.",
        workoutExtra: "Plank liên tục giữ thăng bằng trong 90 giây.",
        nutrition: "150g ức gà + 1 bát cơm trắng + đĩa salad cải xoăn (kale) trộn dầu dừa.",
        nutritionReason: "Cơm trắng hồi năng lượng tức thì. Cải xoăn dồi dào chất chống oxy hóa đẩy nhanh phục hồi cơ tim.",
        nutritionLimit: "Hạn chế thức ăn nhanh chiên ngập dầu. Lý do: Khiến máu đặc hơn do cholesterol cao, giảm hiệu suất vận chuyển oxy.",
        rest: "Giãn cơ bắp chuối, cơ đùi và cơ lưng xô thật kỹ để tránh chuột rút hoặc co thắt cơ sau buổi tập."
      },
      session3: {
        workout: "Tập phối hợp liên hoàn Kettlebell Swing, Box Jump và nhảy dây (4 vòng)",
        workoutEffect: "Xây dựng sức bền cơ bắp và tim mạch bùng nổ, rèn luyện hệ cơ xương khớp thích nghi áp lực liên tục.",
        workoutExtra: "Chạy bước nhỏ nâng cao đùi tại chỗ 3 hiệp x 1 phút.",
        nutrition: "150g cá hồi nướng + khoai lang mật + canh súp rau củ thập cẩm.",
        nutritionReason: "Omega-3 trong cá hồi giảm sưng viêm cơ khớp do tập bền bỉ. Khoai lang mật giúp tái bổ sung glycogen dự trữ.",
        nutritionLimit: "Hạn chế đồ uống cồn và cà phê sau 17:00 tối. Lý do: Làm gián đoạn giấc ngủ sâu hồi phục thể lực.",
        rest: "Ngủ tối thiểu 8 tiếng trong phòng thoáng mát, tối hoàn toàn để tối ưu chất lượng giấc ngủ."
      }
    },
    "Tại nhà": {
      session1: {
        workout: "Bài tập Cardio Burpees liên tiếp & Jumping Jacks (4 hiệp x 3 phút)",
        workoutEffect: "Huy động toàn bộ nhóm cơ chính trên cơ thể hoạt động đồng thời, đốt calo tối đa và tăng thể lực nhanh.",
        workoutExtra: "Hít đất chuẩn (Push-ups) 3 hiệp x 12 reps.",
        nutrition: "2 lát bánh mì đen + 2 quả trứng ốp la + 1 cốc nước ấm chanh mật ong.",
        nutritionReason: "Bánh mì đen duy trì mức đường huyết ổn định dài lâu. Mật ong cung cấp đường fructose tự nhiên hấp thu nhanh.",
        nutritionLimit: "Hạn chế bánh mì trắng chà bông muối. Lý do: Chứa natri cao cản trở tuần hoàn nước tối ưu.",
        rest: "Nghỉ ngơi giãn cơ thư giãn đầu cổ vai gáy để tránh căng thẳng hệ thần kinh vận động."
      },
      session2: {
        workout: "Leo núi Mountain Climbers nhịp nhanh phối hợp Jumping Lunges bật nhảy chân (3x1.5 phút)",
        workoutEffect: "Tăng nhịp tim đột ngột cải thiện khả năng hồi phục tim mạch giữa các quãng nghỉ ngắn, tăng dẻo dai cơ đùi.",
        workoutExtra: "Bài tập Plank hít đất (Plank Jacks) 3 hiệp x 45 giây.",
        nutrition: "150g ức gà xào nấm dầu olive + gạo lứt + rau cải luộc xanh.",
        nutritionReason: "Nấm chứa nhiều vitamin B hỗ trợ chuyển hóa tinh bột thành năng lượng hiệu quả.",
        nutritionLimit: "Hạn chế thức ăn ướp quá nhiều muối hoặc tương ớt cay nồng. Lý do: Gây khát nước liên tục, giảm hiệu quả tim mạch.",
        rest: "Dành 10 phút nằm ngửa gác chân lên tường (Legs-up-the-wall pose) để máu lưu thông ngược lại hồi phục đùi."
      },
      session3: {
        workout: "Bài tập nhảy dây Cardio nhịp điệu (10 phút liên tục không dừng chân)",
        workoutEffect: "Cải thiện sự phối hợp tay mắt khớp, tăng độ bền bắp chân, cổ chân và cơ lõi trung tâm.",
        workoutExtra: "Bodyweight Squats 3 hiệp x 25 cái tốc độ vừa phải.",
        nutrition: "150g fillet cá basa hấp + súp lơ + 1 quả chuối tiêu chín.",
        nutritionReason: "Cá basa cung cấp chất béo có lợi và protein nạc. Chuối dồi dào kali ngăn ngừa hiện tượng chuột rút bắp chân.",
        nutritionLimit: "Hạn chế ăn các loại snack khoai tây sấy khô nhiều muối. Lý do: Gây mất nước tế bào vào ban đêm.",
        rest: "Ngâm chân nước ấm pha gừng tươi và muối hạt giúp thư giãn cơ thể hoàn toàn cho giấc ngủ ngon."
      }
    }
  },
  "Cải Thiện Tư Thế": {
    "Phòng Gym": {
      session1: {
        workout: "Bay cáp sau Face Pull mở vai (4 hiệp x 15 reps) + Lat Pulldown lưng xô (3x12)",
        workoutEffect: "Tăng cường cơ vai sau, cơ trám giữa lưng để kéo bả vai ra sau, chữa chứng gù lưng và rụt cổ hiệu ứng văn phòng.",
        workoutExtra: "Kéo cáp cơ xô một tay (Single-arm Lat Pulldown) 3 hiệp x 10 reps.",
        nutrition: "Sữa chua Hy Lạp trộn hạt chia + quả mọng (dâu tây, việt quất) + hạt điều.",
        nutritionReason: "Sữa chua giàu canxi củng cố cấu trúc xương. Quả mọng giàu chất chống oxy hóa giảm viêm khớp lưng cột sống.",
        nutritionLimit: "Hạn chế nước ép đóng chai sẵn nhiều đường ngọt. Lý do: Gây phản ứng viêm âm thầm làm cứng các khớp vai gáy.",
        rest: "Thực hiện xoay cổ và mở ngực với con lăn foam roller ở lưng ngực 10 phút."
      },
      session2: {
        workout: "Đẩy hông tạ đòn Hip Thrust (4 hiệp x 10 reps)",
        workoutEffect: "Kích hoạt cơ mông lớn khỏe mạnh, giúp cân bằng lại khung chậu, giảm áp lực uốn cong cột sống thắt lưng dưới.",
        workoutExtra: "Giữ tư thế cây cầu một chân nâng cao (Single-leg Glute Bridge) 3 hiệp x 10 reps mỗi bên.",
        nutrition: "150g tôm nướng muối ớt tỏi nhẹ + bông cải xanh hấp + khoai lang luộc.",
        nutritionReason: "Tôm chứa lượng kẽm và protein cao giúp củng cố tế bào dây chằng khớp khỏe mạnh.",
        nutritionLimit: "Hạn chế thịt mỡ nhiều chất béo bão hòa. Lý do: Kích thích phản ứng sưng viêm xung quanh đĩa đệm lưng cột sống.",
        rest: "Tránh ngồi liên tục quá 45 phút, đứng dậy đi lại nhẹ nhàng mở rộng lồng ngực."
      },
      session3: {
        workout: "Tựa tường giãn vai Wall Angels (3 hiệp x 12 reps) + Nằm ghế duỗi lưng Hyperextension (3x12)",
        workoutEffect: "Rèn luyện thần kinh kiểm soát tư thế vai ngực thẳng, tăng cường sức duỗi cơ dựng gai sống ngăn đau thắt lưng.",
        workoutExtra: "Tư thế Plank tĩnh giữ 60 giây tập trung khóa chặt khung xương chậu thẳng hàng lưng.",
        nutrition: "150g cá tuyết hoặc cá basa hấp hành gừng + măng tây luộc + salad rau diếp dầu dừa.",
        nutritionReason: "Omega-3 từ cá biển giúp bôi trơn các khớp đĩa đệm. Gừng tươi có đặc tính kháng viêm tự nhiên cực mạnh.",
        nutritionLimit: "Hạn chế đồ uống chứa caffeine quá muộn như trà đặc. Lý do: Caffeine rút canxi từ xương và gây mất ngủ cơ khớp.",
        rest: "Sử dụng gối ôm nâng cao đầu gối khi nằm ngửa ngủ để giữ độ cong sinh lý tự nhiên của cột sống."
      }
    },
    "Tại nhà": {
      session1: {
        workout: "Tư thế bò chó chim Bird-Dog duỗi chân tay chéo & Tư thế mèo bò Cat-Cow (4 hiệp x 15 reps)",
        workoutEffect: "Tập luyện khả năng thăng bằng cơ lõi liên sườn, gia tăng độ linh hoạt khớp đốt sống lưng ngực một cách an toàn nhất.",
        workoutExtra: "Ép vai cánh bướm dựa tường (Wall Sliders) 3 hiệp x 12 cái.",
        nutrition: "2 quả trứng luộc + đĩa rau chân vịt (cải bó xôi) xào tỏi nhẹ + chuối.",
        nutritionReason: "Rau chân vịt chứa magiê dồi dào, cần thiết cho sự dẫn truyền thần kinh cơ cột sống linh hoạt.",
        nutritionLimit: "Hạn chế bánh mì bơ sữa ngọt béo cao. Lý do: Đường tinh luyện làm cứng collagen bao bọc các khớp đốt sống.",
        rest: "Ngồi ghế làm việc có tựa lưng chắc chắn, giữ màn hình máy tính ngang tầm mắt."
      },
      session2: {
        workout: "Nhấc mông sàn nằm Glute Bridge nâng mông đùi sau + Tư thế rắn hổ mang Cobra Pose duỗi lưng ngực",
        workoutEffect: "Mở rộng góc hông bị gập do ngồi nhiều văn phòng, giãn căng cơ ngực và củng cố cơ lưng trên thẳng tự nhiên.",
        workoutExtra: "Plank nghiêng sườn (Side Plank) 3 hiệp x 30 giây.",
        nutrition: "150g ức gà áp chảo + 1 bát gạo lứt + đĩa rau luộc thập cẩm xanh sạch.",
        nutritionReason: "Ức gà cung cấp protein dồi dào xây dựng nhóm cơ lưng kéo thẳng cột sống vai gáy.",
        nutritionLimit: "Hạn chế xúc xích, thịt xông khói nhiều chất bảo quản gốc nitrit. Lý do: Kích thích mệt mỏi toàn thân và co cứng cơ.",
        rest: "Dành 10 phút nằm ngửa thư giãn trên thảm phẳng, không kê gối quá cao dưới cổ gáy."
      },
      session3: {
        workout: "Tabletop Reverse Plank + Tư thế siêu nhân nằm sấp Superman duỗi (3x12)",
        workoutEffect: "Tác động thẳng vào cơ vai sau, cơ lưng giữa, mông đùi tạo lực giữ tư thế cơ thể mở rộng cân đối đứng thẳng.",
        workoutExtra: "Xoay khớp vai mở rộng cánh tay tròn 3 hiệp x 30 giây.",
        nutrition: "150g cá hồi áp chảo + súp bí đỏ hạt sen ấm nóng dịu lòng.",
        nutritionReason: "Hạt sen và bí đỏ giúp an thần, ngủ sâu thư thái cho các bó cơ phục hồi sinh lý tự nhiên.",
        nutritionLimit: "Hạn chế đồ uống cồn và ăn muộn. Lý do: Cản trở lưu thông tuần hoàn máu nuôi cơ cột sống lưng gáy ban đêm.",
        rest: "Tắm nước ấm hoa cúc hoặc xoa dầu tràm lên vùng cổ vai gáy để thả lỏng hoàn toàn trước ngủ."
      }
    }
  },
  "Dẻo Dai & Yoga": {
    "Phòng Gym": {
      session1: {
        workout: "Giãn cơ toàn diện hỗ trợ dây cáp Cable Assisted Hamstring Stretch & Lying Chest Opener",
        workoutEffect: "Tận dụng lực phản hồi ổn định từ cáp máy gym để kéo giãn sâu dải cơ đùi sau căng thẳng và mở rộng cơ ngực tối đa.",
        workoutExtra: "Xoay khớp hông háng trên thảm yoga 3 hiệp x 15 reps.",
        nutrition: "Hạt diêm mạch (quinoa) nấu sữa hạnh nhân + dâu tây cắt lát ngọt ngào.",
        nutritionReason: "Quinoa là protein thực vật hoàn hảo giàu lysine hỗ trợ đàn hồi sợi cơ đàn cốt và dây chằng dẻo dai.",
        nutritionLimit: "Hạn chế đồ chiên ngập dầu nhiều trans fat. Lý do: Làm xơ cứng các mạch máu nuôi dưỡng bao hoạt dịch khớp xương.",
        rest: "Hít thở đều đặn bằng mũi suốt buổi tập giãn cơ để kích hoạt hệ thần kinh phó giao cảm thư giãn."
      },
      session2: {
        workout: "Tư thế Warrior I & II với bục kê tạ + Đẩy hông giãn hông sâu Cable Hip Flexor Stretch (3x10 reps)",
        workoutEffect: "Mở rộng khớp hông háng chậu, kéo giãn cơ thắt lưng chậu (psoas) bị co rút, cải thiện rõ rệt biên độ vận động khớp.",
        workoutExtra: "Giữ thăng bằng trên bóng bosu 3 hiệp x 45 giây.",
        nutrition: "150g ức gà áp chảo chín tới nhẹ dầu + 1 đĩa bông cải xanh hấp + khoai lang tím.",
        nutritionReason: "Bông cải xanh chứa vitamin C dồi dào, đóng vai trò then chốt trong tổng hợp collagen đàn hồi dây chằng.",
        nutritionLimit: "Hạn chế các loại gia vị nêm muối quá nhiều. Lý do: Lượng natri dư thừa làm giảm độ đàn hồi linh động của tế bào cơ.",
        rest: "Dành 5 phút thiền tĩnh tâm sau giãn cơ sâu để cơ khớp ghi nhớ trạng thái kéo giãn thư giãn."
      },
      session3: {
        workout: "Tư thế chó cúi mặt Downward Facing Dog + Giãn cơ đùi sau đứng thẳng Seated Forward Fold (3x15 hơi thở sâu)",
        workoutEffect: "Kéo giãn hoàn toàn chuỗi cơ mặt sau cơ thể từ gân gót chân, bắp chân đùi sau lên tới toàn bộ vùng thắt lưng cột sống cổ gáy.",
        workoutExtra: "Tư thế em bé Child's Pose thư giãn lưng dưới 3 hiệp x 1 phút.",
        nutrition: "150g fillet cá chẽm hấp nấm hành + canh cải thìa đậu hũ non thanh đạm.",
        nutritionReason: "Đậu hũ non chứa protein thực vật nhẹ bụng dễ tiêu. Cá chẽm giàu Omega-3 bôi trơn ổ sụn khớp dẻo dai.",
        nutritionLimit: "Hạn chế đồ uống cồn và ăn ngọt nhiều đường tinh luyện. Lý do: Đường phá hủy cấu trúc collagen đàn hồi của dây chằng cơ.",
        rest: "Ngâm mình trong bồn nước ấm pha tinh dầu oải hương sả chanh giúp giãn nở mạch máu tối đa."
      }
    },
    "Tại nhà": {
      session1: {
        workout: "Chuỗi bài chào mặt trời Sun Salutation A & B (5 chu kỳ chậm rãi)",
        workoutEffect: "Lưu thông khí huyết toàn cơ thể, kéo giãn nhẹ nhàng cơ khớp cột sống vào buổi sáng rạng rỡ đầy năng lượng.",
        workoutExtra: "Tư thế chiến binh Warrior I giữ 5 nhịp thở sâu mỗi chân.",
        nutrition: "1 cốc sữa đậu nành ấm + khoai lang mật luộc + 1 quả chuối sứ chín.",
        nutritionReason: "Chuối cung cấp magie xoa dịu hệ thần kinh vận động. Sữa đậu nành giàu đạm lành mạnh bảo vệ cơ bắp.",
        nutritionLimit: "Hạn chế bánh mì gối trắng quét bơ đường sữa ngọt béo. Lý do: Gây sưng viêm khớp và làm cơ co rút cứng nhắc.",
        rest: "Dành 10 phút ngồi thiền thở đều sâu bằng mũi, thả lỏng toàn bộ cơ mặt và bờ vai gáy chùng xuống."
      },
      session2: {
        workout: "Tư thế bồ câu Pigeon Pose mở hông chậu + Tư thế tam giác Triangle Pose kéo sườn (3x10 hơi thở)",
        workoutEffect: "Kéo giãn cơ mông sâu piriformis chữa chứng tê thần kinh tọa, làm dịu hông chậu sườn liên sườn dẻo dai.",
        workoutExtra: "Tư thế nhân sư Sphinx Pose kéo cong nhẹ lưng ngực 3 hiệp x 45 giây.",
        nutrition: "Salad 120g ức gà cắt hạt lựu + cà chua, dưa leo, ớt chuông dầu olive nhẹ nhàng + cơm lứt.",
        nutritionReason: "Ớt chuông đỏ giàu vitamin C kích hoạt tái tạo liên kết collagen khớp xương chậu cột sống khỏe.",
        nutritionLimit: "Hạn chế thịt trâu bò chế biến sẵn hun khói nhiều muối mặn. Lý do: Natri cao làm khô các khớp ổ sụn dẻo dai.",
        rest: "Uống nước ép rau cần tây dưa leo để bù khoáng chất tự nhiên tăng độ mềm mại dẻo dai cho cơ thể."
      },
      session3: {
        workout: "Tư thế em bé Child's Pose + Tư thế vặn mình quỳ gối Thread-the-needle mở rộng bả vai lưng ngực",
        workoutEffect: "Thả lỏng toàn bộ áp lực đè nặng lên lưng gáy cột sống sau ngày làm việc mệt mỏi, xoa dịu vai gáy sườn lưng dưới.",
        workoutExtra: "Tư thế xác chết Savasana nằm thõng buông bỏ tâm trí toàn cơ thể giữ trong 5 phút cuối.",
        nutrition: "Canh rau ngót nấu tôm bằm + đậu hũ hấp xì dầu hành hoa nồng ấm.",
        nutritionReason: "Bữa tối thanh đạm giúp hệ tiêu hóa nghỉ ngơi nhẹ nhàng cho giấc ngủ sâu phục hồi xương khớp cơ khớp dẻo dai.",
        nutritionLimit: "Hạn chế ăn thức ăn cay nóng dầu mỡ nhiều gia vị gây ợ chua khó ngủ sâu cơ thể cứng nhắc.",
        rest: "Tắt thiết bị điện tử trước khi ngủ 45 phút, xông phòng với tinh dầu sả chanh dịu êm bồng bềnh."
      }
    }
  },
  "Tăng Cơ Tay": {
    "Phòng Gym": {
      session1: {
        workout: "Curl tạ đơn Dumbbell Bicep Curl đứng thẳng (4 hiệp x 12 reps) + Curl búa Hammer Curl (3x10)",
        workoutEffect: "Kích thích tối đa cơ nhị đầu (bicep) và cơ cánh tay trước (brachialis) phát triển kích thước và đỉnh cơ.",
        workoutExtra: "Concentration Curl ngồi ghế tập trung 1 tay (3x12) để tạo đỉnh cơ rõ nét.",
        nutrition: "3 quả trứng luộc + ức gà áp chảo 150g + gạo lứt + bơ đậu phộng nguyên chất.",
        nutritionReason: "Trứng và ức gà cung cấp đạm sinh học cao nhất, kết hợp bơ đậu phộng bổ sung chất béo tốt tổng hợp cơ bắp tay.",
        nutritionLimit: "Hạn chế đồ uống có đường và rượu bia. Lý do: Cản trở quá trình tổng hợp protein cơ bắp (MPS) sau tập.",
        rest: "Nghỉ 60-90 giây giữa các hiệp. Sau buổi tập, duỗi thẳng tay hoàn toàn 30 giây để kéo giãn cơ nhị đầu."
      },
      session2: {
        workout: "Chống đẩy tay hẹp Narrow Push-up (3x15) + Tricep Dip tỳ tay sau ghế (4x12) + Overhead Dumbbell Extension (3x12)",
        workoutEffect: "Phát triển toàn diện cơ tam đầu (tricep) chiếm 2/3 kích thước cánh tay, tạo cánh tay to tròn đều.",
        workoutExtra: "Cable Rope Pushdown kéo cáp xuống (3x15 reps) để siết nét cơ tam đầu.",
        nutrition: "Sinh tố protein: 1 muỗng whey + chuối + sữa hạnh nhân + bột yến mạch.",
        nutritionReason: "Whey protein hấp thụ nhanh trong 30 phút sau tập, kích hoạt quá trình xây dựng cơ bắp tay tối ưu.",
        nutritionLimit: "Hạn chế chiên xào nhiều dầu mỡ. Lý do: Chất béo bão hòa làm chậm lưu thông máu nuôi cơ bắp tay.",
        rest: "Thực hiện duỗi cơ tam đầu qua đầu 30 giây mỗi tay. Ngủ đủ 8 tiếng để hormone tăng trưởng xây cơ."
      },
      session3: {
        workout: "Barbell Curl tạ đòn đứng thẳng (4x8 reps nặng) + Preacher Curl máy tựa (3x12) + Tricep Kickback (3x15)",
        workoutEffect: "Tăng cường lực cơ tay tổng thể, đặc biệt phát triển phần dưới bicep và đầu dài tricep cho cánh tay đầy đặn.",
        workoutExtra: "21s Curl (7 nửa dưới + 7 nửa trên + 7 đầy đủ) để đốt cháy toàn bộ sợi cơ bicep.",
        nutrition: "200g thịt bò nạc áp chảo + khoai lang mật + rau xanh hấp + 1 cốc sữa tươi không đường.",
        nutritionReason: "Thịt bò giàu creatine tự nhiên và sắt, cực kỳ hiệu quả để tăng sức mạnh và kích thước cơ tay.",
        nutritionLimit: "Hạn chế ăn khuya sau 21:00. Lý do: Buổi tối ăn no cản trở tiết GH (hormone tăng trưởng) khi ngủ.",
        rest: "Dùng con lăn foam roller lăn nhẹ dọc cơ tay trước và sau 5 phút để tăng lưu thông máu phục hồi."
      }
    },
    "Tại nhà": {
      session1: {
        workout: "Hít đất tay rộng Wide Push-up (4x15) + Curl tạ nhỏ hoặc chai nước nặng Improvised Curl (4x12)",
        workoutEffect: "Kích thích cơ ngực và bicep phát triển ngay tại nhà không cần thiết bị chuyên dụng đắt tiền.",
        workoutExtra: "Isometric Curl giữ tạ ở góc 90° trong 10 giây (3 lần) để tăng căng cơ tĩnh.",
        nutrition: "2 quả trứng + chuối + bơ đậu phộng nguyên chất bôi bánh mì đen.",
        nutritionReason: "Bơ đậu phộng chứa protein và chất béo tốt phối hợp xây dựng cơ tay từ từ và bền vững.",
        nutritionLimit: "Hạn chế đồ ngọt và snack. Lý do: Đường đơn làm tăng mỡ cánh tay thay vì tăng cơ.",
        rest: "Giữ tư thế duỗi thẳng tay hoàn toàn 30 giây. Uống đủ 2.5 lít nước để cơ bắp tay phục hồi."
      },
      session2: {
        workout: "Chống đẩy tay hẹp Narrow Push-up (4x15) + Dip tỳ tay sau ghế (4x12) + Pike Push-up (3x10)",
        workoutEffect: "Phát triển cơ tam đầu và cơ vai tại nhà, tạo cánh tay gọn đẹp và khỏe mạnh không cần gym.",
        workoutExtra: "Pseudo Planche Lean chịu lực cơ tay (3x20 giây) tăng sức bền cơ tay đặc biệt.",
        nutrition: "Sữa chua Hy Lạp + hạt mixed nuts + 1 quả táo xanh + 1 quả trứng luộc.",
        nutritionReason: "Sữa chua Hy Lạp chứa casein protein hấp thụ chậm, nuôi cơ bắp tay suốt nhiều giờ sau tập.",
        nutritionLimit: "Hạn chế trà sữa và cà phê pha sẵn nhiều đường sữa đặc. Lý do: Lượng calo rỗng gây tích mỡ cánh tay.",
        rest: "Cross-body arm stretch kéo giãn cơ tay ngang ngực 30 giây mỗi bên. Ngủ đủ giấc trước 23h."
      },
      session3: {
        workout: "Diamond Push-up hít đất tay kim cương (3x12) + Towel Row kéo khăn mô phỏng rowing (3x15) + Chair Dip (3x15)",
        workoutEffect: "Kích thích đồng thời cơ tam đầu, cơ nhị đầu và cơ lưng phối hợp xây dựng cánh tay cân đối đẹp.",
        workoutExtra: "Fingertip Push-up hít đất đầu ngón tay (nếu đủ mạnh) tăng sức bền cơ bàn tay và cẳng tay.",
        nutrition: "150g ức gà luộc + bát cơm gạo lứt + rau muống xào tỏi ít dầu.",
        nutritionReason: "Ức gà là nguồn đạm tinh khiết và hoàn chỉnh nhất, hấp thụ nhanh phục hồi cơ bắp tay sau buổi tập.",
        nutritionLimit: "Hạn chế uống rượu bia. Lý do: Cồn ức chế hoàn toàn quá trình tổng hợp protein cơ bắp trong 24h.",
        rest: "Ngâm tay trong nước ấm pha muối hồng Himalaya 10 phút để giảm mỏi cơ và phục hồi nhanh hơn."
      }
    }
  },
  "Tăng Cơ Chân": {
    "Phòng Gym": {
      session1: {
        workout: "Barbell Back Squat gánh tạ đòn sau gáy (4x8 reps) + Leg Extension duỗi chân máy (3x12)",
        workoutEffect: "Phát triển toàn diện nhóm cơ tứ đầu (quadriceps) và cơ mông lớn, tạo đùi to tròn và chắc khỏe.",
        workoutExtra: "Goblet Squat tạ ấm tay cầm (3x15) để cải thiện kỹ thuật squat và tăng phạm vi vận động.",
        nutrition: "200g thịt bò áp chảo + cơm trắng + bông cải xanh hấp + nước ép dưa hấu.",
        nutritionReason: "Thịt bò giàu creatine và beta-alanine tự nhiên, tăng mạnh sức mạnh và khả năng chịu đựng cơ chân.",
        nutritionLimit: "Hạn chế đồ ăn chế biến sẵn nhiều muối. Lý do: Natri cao gây phù nề cơ chân, cản trở phục hồi.",
        rest: "Lăn foam roller dọc cơ đùi trước 5 phút, giữ tư thế ngồi xổm thư giãn 1 phút trước ngủ."
      },
      session2: {
        workout: "Romanian Deadlift tạ đòn kéo chết chân thẳng (4x8) + Lying Leg Curl gập chân máy (3x12)",
        workoutEffect: "Kích thích tối đa nhóm cơ đùi sau (hamstrings) và cơ mông, cân bằng phát triển cơ chân toàn diện.",
        workoutExtra: "Single-leg Romanian Deadlift thực hiện 1 chân (3x10 mỗi bên) tăng thăng bằng và sức mạnh cơ đùi sau.",
        nutrition: "150g cá hồi áp chảo + khoai lang mật + đậu edamame luộc + salad xanh.",
        nutritionReason: "Omega-3 từ cá hồi giảm viêm cơ đùi sau tập nặng. Khoai lang bù glycogen phục hồi năng lượng cơ chân.",
        nutritionLimit: "Hạn chế thức ăn cay nóng quá mức. Lý do: Gây kích ứng dạ dày, hấp thụ kém dinh dưỡng xây cơ chân.",
        rest: "Kéo giãn cơ đùi sau đứng thẳng cúi người 30 giây. Massage bắp chân tay không sau tập để giảm đau."
      },
      session3: {
        workout: "Bulgarian Split Squat chân đơn (4x10 mỗi chân) + Calf Raises máy ngồi (4x20 reps)",
        workoutEffect: "Phát triển đùi trước và bắp chân (calf) riêng biệt từng bên, khắc phục mất cân bằng cơ chân hai bên.",
        workoutExtra: "Leg Press đơn chân (3x12 mỗi chân) tăng tải trọng cơ đùi mà không áp lực cột sống.",
        nutrition: "2 miếng đùi gà nướng + gạo lứt + canh rau củ nóng + 1 cốc sữa tươi không đường.",
        nutritionReason: "Đùi gà chứa nhiều sắt và myoglobin hơn ức gà, cung cấp oxy tốt hơn cho cơ chân hoạt động.",
        nutritionLimit: "Hạn chế đồ uống có cồn và carbonated. Lý do: Cồn phân giải glycogen cơ chân nhanh, gây yếu sức.",
        rest: "Ngồi nâng cao chân lên ghế 15 phút giảm sưng phù mỏi chân. Ngủ đủ 8 tiếng cho cơ chân phát triển."
      }
    },
    "Tại nhà": {
      session1: {
        workout: "Bodyweight Squat (5x20) + Lunge bước dài luân phiên (4x12 mỗi chân) + Sumo Squat rộng (3x15)",
        workoutEffect: "Tập đùi trước và cơ mông toàn diện không cần thiết bị, kích thích phát triển cơ chân với khối lượng luyện tập cao.",
        workoutExtra: "Jump Squat bật nhảy (3x10) tăng sức mạnh bùng nổ cơ chân và đốt calo.",
        nutrition: "Khoai lang luộc 200g + 2 quả trứng + đậu phụ sốt cà chua + rau xanh.",
        nutritionReason: "Khoai lang là nguồn carb phức hợp lý tưởng cung cấp năng lượng bền bỉ cho cơ chân suốt buổi tập.",
        nutritionLimit: "Hạn chế bánh mì trắng và cơm trắng nhiều. Lý do: Đường đơn tốc độ cao không đủ duy trì năng lượng tập chân lâu.",
        rest: "Kéo giãn cơ đùi trước đứng 1 chân 30 giây mỗi bên. Tắm nước ấm giúp cơ chân thư giãn."
      },
      session2: {
        workout: "Glute Bridge nâng mông (4x20) + Donkey Kicks đá chân ra sau (4x15 mỗi chân) + Hamstring Curl dùng dây thun",
        workoutEffect: "Phát triển cơ mông và đùi sau tại nhà, tạo hình dáng cơ chân cân đối mà không cần máy móc.",
        workoutExtra: "Single-leg Glute Bridge 1 chân (3x12 mỗi bên) tăng cường cơ mông và sự thăng bằng.",
        nutrition: "150g ức gà áp chảo + bắp luộc + salad bơ dầu olive + sữa chua không đường.",
        nutritionReason: "Bơ trong salad cung cấp chất béo lành mạnh hỗ trợ hấp thụ vitamin tan trong chất béo tái tạo cơ chân.",
        nutritionLimit: "Hạn chế ăn khuya sau 20h. Lý do: Ăn khuya tích mỡ vùng đùi mông và cản trở hormone tăng cơ đêm.",
        rest: "Pigeon Pose yoga ngồi xổm kéo giãn cơ mông sâu 30 giây mỗi bên. Uống đủ nước."
      },
      session3: {
        workout: "Wall Sit ngồi tường (3x60 giây) + Calf Raises kiễng chân trên bậc cầu thang (4x25) + Step-up lên ghế (3x15 mỗi chân)",
        workoutEffect: "Tăng sức bền cơ đùi tĩnh, phát triển bắp chân đều và kích thích cơ đùi trước từ góc độ chức năng.",
        workoutExtra: "Jumping Lunge bật nhảy chân đơn (3x8 mỗi chân) thách thức sức mạnh bùng nổ tối đa.",
        nutrition: "200g cá ngừ áp chảo + cơm gạo lứt + bông cải xanh luộc + 1 quả chuối.",
        nutritionReason: "Chuối cung cấp kali ngăn chặn chuột rút cơ chân hiệu quả. Cá ngừ bổ sung đạm tinh khiết xây cơ bắp.",
        nutritionLimit: "Hạn chế muối quá nhiều. Lý do: Muối nhiều gây mất nước cơ tế bào, cơ chân dễ bị chuột rút đau nhức.",
        rest: "Lăn chai nước đông đặc lăn dọc bắp chân 5 phút mỗi bên. Nâng cao chân khi nằm nghỉ để giảm phù."
      }
    }
  },
  "Tăng Cơ Vai": {
    "Phòng Gym": {
      session1: {
        workout: "Barbell Overhead Press đẩy tạ đòn trên đầu (4x8) + Dumbbell Lateral Raise nâng vai ngang (4x15)",
        workoutEffect: "Phát triển đầu vai giữa (lateral deltoid) tạo vai rộng và đẹp như vai lực sĩ chuyên nghiệp.",
        workoutExtra: "Cable Lateral Raise kéo cáp nâng vai ngang (3x15) để tập góc hoàn toàn khác tăng thêm kích thước.",
        nutrition: "Sinh tố: 1 muỗng whey protein + chuối + sữa tươi + yến mạch + 1 muỗng bơ đậu phộng.",
        nutritionReason: "Whey protein sau tập ngay lập tức cung cấp amino acid cho cơ vai phục hồi và tăng trưởng tối đa.",
        nutritionLimit: "Hạn chế đồ uống lạnh nhiều đá sau tập. Lý do: Làm giảm lưu thông máu đến cơ vai đang cần phục hồi.",
        rest: "Kéo giãn cơ vai chéo ngang ngực 30 giây mỗi bên. Nghỉ ngơi đầy đủ để tránh chấn thương cơ vai dễ bị tổn thương."
      },
      session2: {
        workout: "Dumbbell Arnold Press xoay tạ đơn (4x10) + Dumbbell Front Raise nâng vai trước (3x12) + Face Pull kéo cáp mặt (4x15)",
        workoutEffect: "Phát triển toàn bộ 3 đầu cơ vai (trước, giữa, sau) tạo hình vai tròn đều và ngực mở rộng đẹp.",
        workoutExtra: "Band Pull-Apart kéo dây kháng lực ngang (4x20) tăng cường cơ vai sau thường bị bỏ qua.",
        nutrition: "200g ức gà nướng + khoai lang + salad rau chân vịt + hạt điều không muối.",
        nutritionReason: "Hạt điều giàu magie, cần thiết cho sự co bóp cơ vai hiệu quả và giảm đau cơ sau tập.",
        nutritionLimit: "Hạn chế thức ăn mặn nhiều natri. Lý do: Natri cao gây viêm và ảnh hưởng xấu đến bao hoạt dịch khớp vai.",
        rest: "Shoulder Pendulum swing xoay vai thả lỏng 2 phút. Chườm đá vai 15 phút nếu cảm thấy đau nhức."
      },
      session3: {
        workout: "Seated Dumbbell Press đẩy tạ đơn ngồi (4x10) + Bent-over Dumbbell Raise cúi người nâng vai sau (4x15)",
        workoutEffect: "Cân bằng phát triển cơ vai sau thường yếu hơn hai đầu kia, tạo hình dạng vai 3D ấn tượng toàn diện.",
        workoutExtra: "Upright Row barbell kéo đứng thẳng (3x12) kết hợp cơ vai giữa và cơ thang lên.",
        nutrition: "150g cá basa hấp + cơm gạo lứt + đĩa rau củ luộc thập cẩm + sữa chua.",
        nutritionReason: "Cá basa nhẹ và dễ tiêu, phù hợp sau buổi tập vai nặng. Sữa chua casein nuôi cơ vai suốt đêm.",
        nutritionLimit: "Hạn chế rượu bia và thuốc lá. Lý do: Các chất này làm thu hẹp mạch máu nuôi dưỡng cơ vai, chậm phát triển.",
        rest: "Thread-the-needle yoga xoay vai sau (30 giây mỗi bên). Ngủ 8 tiếng để cơ vai phát triển tối đa khi ngủ."
      }
    },
    "Tại nhà": {
      session1: {
        workout: "Pike Push-up hít đất chổng mông (4x10) + Dumbbell/chai nước Lateral Raise nâng ngang (4x15)",
        workoutEffect: "Phát triển đầu vai trước và giữa tại nhà, cải thiện rõ rệt sự rộng vai và độ đầy đặn cơ vai.",
        workoutExtra: "Wall Handstand Hold đứng tay tựa tường (3x20 giây) tăng sức mạnh cơ vai toàn diện.",
        nutrition: "2 quả trứng + bánh mì đen + bơ đậu phộng + chuối + sữa tươi không đường.",
        nutritionReason: "Kết hợp protein từ trứng và carb từ bánh mì cho năng lượng bền bỉ để tập vai đủ khối lượng.",
        nutritionLimit: "Hạn chế cà phê quá nhiều. Lý do: Caffeine liều cao gây mất ngủ, cơ vai không có thời gian phục hồi.",
        rest: "Cross body shoulder stretch kéo vai ngang ngực 30 giây mỗi bên. Uống đủ nước để cơ vai phục hồi."
      },
      session2: {
        workout: "Push-up vai rộng Wide Push-up (4x15) + Arm Circles xoay vòng tròn cánh tay (3x30 giây) + Band Y-T-W (3x12)",
        workoutEffect: "Kích hoạt cơ chóp xoay (rotator cuff) và cơ vai sau, phòng ngừa chấn thương và phát triển vai toàn diện.",
        workoutExtra: "Plank to Downward Dog (3x10) kết hợp core và cơ vai ổn định tốt hơn.",
        nutrition: "Salad 150g ức gà + rau củ + đậu phộng rang ít muối + dầu olive + cơm gạo lứt.",
        nutritionReason: "Đậu phộng giàu niacin (vitamin B3) hỗ trợ sửa chữa DNA và phục hồi sợi cơ vai sau tập.",
        nutritionLimit: "Hạn chế thức ăn cay nóng nhiều. Lý do: Gây ợ chua và viêm nhẹ ảnh hưởng đến phục hồi cơ bắp vai.",
        rest: "Doorway chest/shoulder stretch kéo giãn vai ngực trong khung cửa 30 giây. Massage nhẹ cơ vai với dầu."
      },
      session3: {
        workout: "Pseudo Planche Push-up (3x8) + Rear Delt Fly dùng dây thun hoặc tạ chai (4x15) + Overhead Tricep Extension (3x12)",
        workoutEffect: "Thách thức cơ vai ở nhiều góc độ khác nhau, tạo kích thích đa dạng cho sự phát triển toàn diện cơ vai.",
        workoutExtra: "Invert Row dùng bàn hoặc ghế kéo ngược (3x12) tăng cơ vai sau và lưng phối hợp.",
        nutrition: "150g đậu phụ rán + cơm gạo lứt + canh rau cải + 1 cốc sữa đậu nành ấm.",
        nutritionReason: "Đậu phụ chứa protein thực vật hoàn chỉnh và isoflavone giúp giảm viêm cơ vai sau buổi tập nặng.",
        nutritionLimit: "Hạn chế ăn đêm sau 21h. Lý do: Gây tích mỡ vai và ức chế hoocmon tăng trưởng cơ vai ban đêm.",
        rest: "Sleeper stretch nằm nghiêng kéo giãn cơ vai sau 30 giây mỗi bên. Ngủ đủ giấc trước 23h."
      }
    }
  },
  "Tăng Cơ Ngực": {
    "Phòng Gym": {
      session1: {
        workout: "Barbell Bench Press đẩy tạ đòn nằm ngang (4x8 reps nặng) + Incline Dumbbell Press đẩy dốc lên (3x10)",
        workoutEffect: "Phát triển tối đa cơ ngực dày và rộng, đặc biệt kích thích phần ngực trên và ngực giữa phát triển ấn tượng.",
        workoutExtra: "Cable Fly crossover kéo cáp bướm (3x15) để căng cơ ngực ở vị trí stretch tối đa.",
        nutrition: "200g ức gà nướng + yến mạch nấu sữa + chuối + 1 muỗng whey protein.",
        nutritionReason: "Whey + ức gà cung cấp đầy đủ amino acid thiết yếu (EAA) để tái tạo sợi cơ ngực bị rách sau tập nặng.",
        nutritionLimit: "Hạn chế đồ uống có cồn hoàn toàn. Lý do: Cồn làm giảm testosterone và ức chế tổng hợp protein cơ ngực.",
        rest: "Kéo giãn cơ ngực trong khung cửa (doorway stretch) 30 giây. Ngủ đủ 8 tiếng cho hormone tăng trưởng hoạt động."
      },
      session2: {
        workout: "Dips xà song song đẩy ngực (4x10) + Decline Dumbbell Press đẩy dốc xuống (3x12) + Push-up tay hẹp (3x15)",
        workoutEffect: "Kích thích phần ngực dưới phát triển tạo đường viền cơ ngực rõ nét và độ đầy đặn tổng thể.",
        workoutExtra: "Chest Squeeze Press ép tạ hai bên giữa ngực (3x15) để tăng khả năng adduction cơ ngực.",
        nutrition: "150g thịt bò nạc + cơm trắng + bông cải xanh + đậu edamame + nước ép cam tươi.",
        nutritionReason: "Vitamin C từ cam giúp tổng hợp collagen, củng cố gân và dây chằng cơ ngực bị căng thẳng sau tập.",
        nutritionLimit: "Hạn chế thức ăn chiên nhiều dầu. Lý do: Chất béo trans cản trở hấp thụ amino acid xây cơ ngực.",
        rest: "Child's pose biến thể duỗi thẳng cánh tay kéo giãn cơ ngực 1 phút. Massage nhẹ cơ ngực với dầu ấm."
      },
      session3: {
        workout: "Dumbbell Fly nằm ngang mở cánh tay (4x12) + Pec Deck máy cánh bướm (3x15) + Push-up nâng chân cao (3x12)",
        workoutEffect: "Tăng biên độ co giãn cơ ngực tối đa, tạo độ căng và nét cơ ngực định nghĩa rõ ràng từ mọi góc nhìn.",
        workoutExtra: "1-Arm Cable Fly kéo cáp 1 tay (3x12 mỗi bên) tập trung kích thích từng bên ngực riêng biệt.",
        nutrition: "Shake: 2 muỗng whey + sữa tươi 200ml + chuối + mật ong + đá xay.",
        nutritionReason: "Protein shake sau tập cung cấp tốc độ hấp thụ nhanh nhất, kích hoạt tổng hợp cơ ngực trong 30 phút vàng.",
        nutritionLimit: "Hạn chế natri và muối cao. Lý do: Natri gây giữ nước dưới cơ ngực che khuất đường cơ đã phát triển.",
        rest: "Foam roll lăn cơ ngực lớn nằm úp 3 phút. Chườm túi nước ấm lên ngực 10 phút trước khi ngủ."
      }
    },
    "Tại nhà": {
      session1: {
        workout: "Standard Push-up hít đất chuẩn (5x15) + Wide Push-up (4x12) + Diamond Push-up (3x10)",
        workoutEffect: "3 biến thể hít đất kích thích cơ ngực ở 3 góc độ khác nhau, tạo phát triển toàn diện không cần tạ.",
        workoutExtra: "Clap Push-up hít đất vỗ tay (3x5) tăng sức mạnh bùng nổ cơ ngực.",
        nutrition: "3 quả trứng + sữa tươi + bánh mì đen + bơ đậu phộng + 1 quả chuối.",
        nutritionReason: "Kết hợp trứng và sữa tươi cung cấp đủ protein và canxi để phục hồi và tăng trưởng cơ ngực.",
        nutritionLimit: "Hạn chế thức ăn nhiều muối đường. Lý do: Làm cơ thể giữ nước và mỡ che khuất cơ ngực phát triển.",
        rest: "Doorway chest stretch kéo ngực trong khung cửa 45 giây. Uống đủ nước và ngủ sớm."
      },
      session2: {
        workout: "Decline Push-up chân kê cao ghế (4x12) + Incline Push-up tay kê cao (4x15) + Chest Dip tỳ tay ghế (3x12)",
        workoutEffect: "Tập ngực ở các góc dốc lên và dốc xuống, phát triển cân đối phần ngực trên và ngực dưới tại nhà.",
        workoutExtra: "Archer Push-up cung tên (3x8 mỗi bên) tăng cường cơ ngực 1 bên và sức mạnh unilateral.",
        nutrition: "150g cá ngừ hộp xả nước muối + cơm gạo lứt + dưa chuột + cà chua + dầu olive.",
        nutritionReason: "Cá ngừ hộp tiện lợi, giàu protein nạc và omega-3 phục hồi viêm cơ ngực sau buổi tập nhiều hít đất.",
        nutritionLimit: "Hạn chế bia rượu và thuốc lá. Lý do: Hai loại này trực tiếp giảm mức testosterone, hormone chính xây cơ ngực.",
        rest: "Thread-the-needle xoay cột sống mở ngực (30 giây mỗi bên). Massage bóng tennis lên cơ ngực lớn."
      },
      session3: {
        workout: "Pseudo Planche Hold chịu lực nghiêng (3x20 giây) + Hindu Push-up hít đất ấn độ (3x10) + Wall Push-up (4x20)",
        workoutEffect: "Kết hợp tập ngực theo phong cách calisthenics nâng cao, tăng sức mạnh cơ ngực từ mọi góc độ.",
        workoutExtra: "Slow Push-up 5 giây xuống 5 giây lên (3x8) tăng căng cơ ngực thời gian dài tối đa.",
        nutrition: "Sữa chua Hy Lạp + granola nguyên cám + quả mọng tươi + hạt hướng dương.",
        nutritionReason: "Casein protein trong sữa chua Hy Lạp hấp thụ chậm qua đêm, nuôi cơ ngực liên tục trong giấc ngủ.",
        nutritionLimit: "Hạn chế ăn khuya nhiều tinh bột. Lý do: Insulin cao ban đêm ức chế tiết GH hormone xây cơ ngực.",
        rest: "Savasana nằm thả lỏng hoàn toàn 5 phút sau tập. Ngủ tư thế nằm ngửa để cơ ngực phục hồi tốt nhất."
      }
    }
  }
};

function getWeeksByDuration(duration) {
  if (duration === "1 tháng") return 4;
  if (duration === "3 tháng") return 12;
  if (duration === "6 tháng") return 24;
  if (duration === "1 năm") return 52;
  return 12;
}

window.changeWeek = function(offset) {
  if (!currentUser) return;
  const totalWeeks = getWeeksByDuration(currentUser.duration);
  let newWeek = (currentUser.currentWeek || 1) + offset;
  if (newWeek < 1) newWeek = 1;
  if (newWeek > totalWeeks) newWeek = totalWeeks;
  
  currentUser.currentWeek = newWeek;
  DBManager.updateUserWeek(currentUser.username, newWeek).then(() => {
    renderRoadmap();
  });
};

window.sessionEvolve = function(week, session) {
  if (!currentUser) return;
  
  const activeGoal = currentUser.activeGoal || "Giảm Cân";
  
  // Load goal-specific tasks
  let goalTasksObj = {};
  try {
    if (currentUser.goalTasks) {
      goalTasksObj = JSON.parse(currentUser.goalTasks);
    }
  } catch (e) {
    console.error("Error parsing goalTasks", e);
  }
  
  const completedList = goalTasksObj[activeGoal] || [];
  const evolvedKey = `w${week}-s${session}-evolved`;
  
  if (completedList.includes(evolvedKey)) {
    return;
  }
  
  // Load bodyStats
  let bs = { weight: currentUser.currentWeight || 65, fatPercent: 20, musclePercent: 35, cardioLevel: 30, flexibilityLevel: 30, armMuscle: 30, legMuscle: 30, shoulderMuscle: 30, chestMuscle: 30 };
  try {
    if (currentUser.bodyStats) {
      bs = { ...bs, ...JSON.parse(currentUser.bodyStats) };
    }
  } catch (e) {
    console.error("Error parsing bodyStats", e);
  }

  let alertMsg = `🎉 Chúc mừng bạn đã hoàn thành Buổi ${session} của Lộ trình ${activeGoal}!\n\n`;
  let statChanges = [];

  // Shift weight towards target
  let cWeight = bs.weight;
  const tWeight = currentUser.targetWeight || 60;
  if (cWeight !== tWeight) {
    if (cWeight < tWeight) {
      cWeight = parseFloat((cWeight + 0.2).toFixed(1));
    } else {
      cWeight = parseFloat((cWeight - 0.2).toFixed(1));
    }
    bs.weight = cWeight;
    currentUser.currentWeight = cWeight;
    statChanges.push(`Cân nặng: ${cWeight}kg`);
  }

  // Evolve specific stats based on activeGoal
  if (activeGoal === "Giảm Cân" || activeGoal === "Cắt Nét Cơ") {
    bs.fatPercent = parseFloat(Math.max(5, bs.fatPercent - 0.3).toFixed(1));
    bs.musclePercent = parseFloat(Math.min(70, bs.musclePercent + 0.1).toFixed(1));
    statChanges.push(`Tỉ lệ mỡ: -0.3% (${bs.fatPercent}%)`);
  } else if (activeGoal === "Tăng Cơ Bắp") {
    bs.musclePercent = parseFloat(Math.min(70, bs.musclePercent + 0.3).toFixed(1));
    bs.chestMuscle = Math.min(100, bs.chestMuscle + 1);
    bs.armMuscle = Math.min(100, bs.armMuscle + 1);
    bs.legMuscle = Math.min(100, bs.legMuscle + 1);
    bs.shoulderMuscle = Math.min(100, bs.shoulderMuscle + 1);
    statChanges.push(`Khối lượng cơ: +0.3% (${bs.musclePercent}%)`);
    statChanges.push(`Các nhóm cơ toàn thân săn chắc hơn!`);
  } else if (activeGoal === "Tăng Cơ Tay") {
    bs.armMuscle = Math.min(100, bs.armMuscle + 2);
    statChanges.push(`Cơ bắp tay: +2 điểm (${bs.armMuscle}/100)`);
  } else if (activeGoal === "Tăng Cơ Chân") {
    bs.legMuscle = Math.min(100, bs.legMuscle + 2);
    statChanges.push(`Cơ chân / đùi: +2 điểm (${bs.legMuscle}/100)`);
  } else if (activeGoal === "Tăng Cơ Vai") {
    bs.shoulderMuscle = Math.min(100, bs.shoulderMuscle + 2);
    statChanges.push(`Cơ vai: +2 điểm (${bs.shoulderMuscle}/100)`);
  } else if (activeGoal === "Tăng Cơ Ngực") {
    bs.chestMuscle = Math.min(100, bs.chestMuscle + 2);
    statChanges.push(`Cơ ngực: +2 điểm (${bs.chestMuscle}/100)`);
  } else if (activeGoal === "Tăng Sức Bền" || activeGoal === "Tăng Sức Bền Tim Mạch") {
    bs.cardioLevel = Math.min(100, bs.cardioLevel + 2);
    statChanges.push(`Thể lực tim mạch: +2 điểm (${bs.cardioLevel}/100)`);
  } else if (activeGoal === "Dẻo Dai & Yoga" || activeGoal === "Dẻo Dai, Thăng Bằng & Yoga") {
    bs.flexibilityLevel = Math.min(100, bs.flexibilityLevel + 2);
    statChanges.push(`Độ dẻo dai khớp: +2 điểm (${bs.flexibilityLevel}/100)`);
  }

  alertMsg += `⚡ Thể chất của bạn đã phát triển:\n` + statChanges.map(s => `• ${s}`).join("\n");

  // Save changes
  completedList.push(evolvedKey);
  goalTasksObj[activeGoal] = completedList;
  
  currentUser.completedTasks = JSON.stringify(completedList); // Sync fallback
  currentUser.goalTasks = JSON.stringify(goalTasksObj);
  currentUser.bodyStats = JSON.stringify(bs);

  Promise.all([
    DBManager.updateUserWeight(currentUser.username, cWeight),
    DBManager.updateBodyStats(currentUser.username, bs),
    DBManager.updateGoalTasks(currentUser.username, goalTasksObj)
  ]).then(() => {
    alert(alertMsg);
    renderRoadmap();
  }).catch(err => {
    console.error(err);
    alert("Đã xảy ra lỗi khi cập nhật thể trạng.");
  });
};

function generateAdaptedRoadmapTasks(location, goal, injury) {
  let goalKey = goal;
  if (!roadmapDatabase[goalKey]) {
    goalKey = "Giảm Cân"; // fallback
  }
  const locKey = location === "Tại nhà" ? "Tại nhà" : "Phòng Gym";
  const w = currentUser.currentWeek || 1;
  const totalWeeks = getWeeksByDuration(currentUser.duration);

  // Sync duration UI
  document.getElementById("roadmap-duration-label").textContent = `${currentUser.duration || "3 tháng"} (${totalWeeks} Tuần)`;
  document.getElementById("week-indicator-text").textContent = `TUẦN ${w}`;

  // Disable/enable week nav buttons
  const prevBtn = document.getElementById("btn-prev-week");
  const nextBtn = document.getElementById("btn-next-week");
  if (prevBtn) prevBtn.disabled = w <= 1;
  if (nextBtn) nextBtn.disabled = w >= totalWeeks;

  // Parse goal-specific tasks
  let goalTasksObj = {};
  try {
    if (currentUser.goalTasks) {
      goalTasksObj = JSON.parse(currentUser.goalTasks);
    }
  } catch (e) {
    console.error("Error parsing goalTasks", e);
  }

  const completedList = goalTasksObj[goalKey] || [];
  const daysGrid = document.getElementById("roadmap-days-grid");
  daysGrid.innerHTML = "";

  // Render 3 sessions for this week
  for (let s = 1; s <= 3; s++) {
    let sessionData = JSON.parse(JSON.stringify(roadmapDatabase[goalKey][locKey][`session${s}`]));

    // Custom injury alterations
    if (injury === "Đầu gối") {
      if (goalKey === "Giảm Cân" && s === 2) {
        sessionData.workout = "Glute Bridges nâng mông sàn 4 hiệp x 15 reps + Đẩy ngực máy (Tránh áp lực đầu gối)";
        sessionData.workoutEffect = "Săn chắc cơ mông và thân trên mà không dồn trọng lực hay gây mài mòn sụn khớp gối.";
      } else if (goalKey === "Tăng Cơ Bắp" && s === 2) {
        sessionData.workout = "Glute Bridges nâng mông sàn tựa lưng 4 hiệp x 12 reps (Tránh gánh tạ đòn Squat)";
        sessionData.workoutEffect = "Kích thích nhóm cơ mông lớn và đùi sau phát triển lực tối ưu mà không gây đau gối.";
      }
    } else if (injury === "Lưng") {
      if (goalKey === "Tăng Cơ Bắp" && s === 3) {
        sessionData.workout = "Hyperextension tựa ghế duỗi cơ dựng gai lưng (Tránh Deadlift tạ nặng từ sàn)";
        sessionData.workoutEffect = "Củng cố cơ lưng dưới an toàn bằng chuyển động thân trên có điểm tựa vững chãi.";
      } else if (goalKey === "Giảm Cân" && s === 3) {
        sessionData.workout = "Hyperextension duỗi lưng nhẹ nhàng 3 hiệp + Bật nhảy tỳ gối (Tránh gập lưng đột ngột)";
        sessionData.workoutEffect = "Rèn luyện sức bền tim mạch và nhóm cơ lưng chịu lực mà không làm căng đĩa đệm.";
      }
    }

    // Dynamic progressive overload weights suggestion based on current week
    if (w > 1) {
      const overloadPercent = Math.min(25, (w - 1) * 2); // maximum 25% progression
      sessionData.workout += ` (Tuần ${w}: Nâng cường độ tạ/số lần +${overloadPercent}%)`;
    }

    const taskWorkoutKey = `w${w}-s${s}-workout`;
    const taskNutritionKey = `w${w}-s${s}-nutrition`;
    const taskRestKey = `w${w}-s${s}-rest`;
    const evolvedKey = `w${w}-s${s}-evolved`;

    const isWorkoutChecked = completedList.includes(taskWorkoutKey);
    const isNutritionChecked = completedList.includes(taskNutritionKey);
    const isRestChecked = completedList.includes(taskRestKey);
    const isEvolved = completedList.includes(evolvedKey);

    const allTasksDone = isWorkoutChecked && isNutritionChecked && isRestChecked;

    let evolveBtnClass = "";
    let evolveBtnText = "";
    let evolveBtnDisabled = true;

    if (isEvolved) {
      evolveBtnClass = "completed";
      evolveBtnText = '<i class="fa-solid fa-circle-check"></i> Đã Cập Nhật Thể Trạng';
      evolveBtnDisabled = true;
    } else if (allTasksDone) {
      evolveBtnClass = "active";
      evolveBtnText = '<i class="fa-solid fa-circle-arrow-up"></i> Cập Nhật Thể Trạng';
      evolveBtnDisabled = false;
    } else {
      evolveBtnClass = "";
      evolveBtnText = "Hoàn thành 3 việc để cập nhật";
      evolveBtnDisabled = true;
    }

    // Render Card
    const card = document.createElement("div");
    card.className = "roadmap-day-card";
    card.innerHTML = `
      <div class="day-card-header">BUỔI TẬP ${s}</div>
      <div class="day-tasks-list">
        <!-- Task 1: Workout -->
        <label class="task-checkbox-item">
          <input type="checkbox" class="task-checkbox-input" data-week="${w}" data-session="${s}" data-type="workout" ${isWorkoutChecked ? 'checked' : ''}>
          <div class="task-checkbox-custom"></div>
          <div class="task-details">
            <span class="task-type-badge type-workout">LUYỆN TẬP</span>
            <p class="task-desc">
              <strong>Luyện tập: </strong>${sessionData.workout}
              <i class="fa-solid fa-circle-play text-red video-play-btn" style="margin-left: 8px; cursor: pointer;" title="Xem video hướng dẫn"></i>
              <span style="display:block; font-size:0.75rem; color:var(--text-muted); margin-top:4px; line-height: 1.4;">
                <i class="fa-solid fa-circle-info"></i> Tác dụng: ${sessionData.workoutEffect}
              </span>
              <span style="display:block; font-size:0.75rem; color:var(--primary-yellow); margin-top:2px; line-height: 1.4;">
                <i class="fa-solid fa-circle-plus"></i> Bổ sung (không bắt buộc): ${sessionData.workoutExtra}
              </span>
            </p>
          </div>
        </label>

        <!-- Task 2: Nutrition -->
        <label class="task-checkbox-item">
          <input type="checkbox" class="task-checkbox-input" data-week="${w}" data-session="${s}" data-type="nutrition" ${isNutritionChecked ? 'checked' : ''}>
          <div class="task-checkbox-custom"></div>
          <div class="task-details">
            <span class="task-type-badge type-diet">DINH DƯỠNG</span>
            <p class="task-desc">
              <strong>Dinh dưỡng hàng ngày: </strong>${sessionData.nutrition}<br>
              <span style="display:block; font-size:0.75rem; color:var(--accent-green); margin-top:4px; line-height: 1.4;">
                <i class="fa-solid fa-heart"></i> Lý do khoa học: ${sessionData.nutritionReason}
              </span>
              <span style="display:block; font-size:0.75rem; color:var(--primary-red); margin-top:2px; line-height: 1.4;">
                <i class="fa-solid fa-ban"></i> Hạn chế: ${sessionData.nutritionLimit}
              </span>
            </p>
          </div>
        </label>

        <!-- Task 3: Rest -->
        <label class="task-checkbox-item">
          <input type="checkbox" class="task-checkbox-input" data-week="${w}" data-session="${s}" data-type="rest" ${isRestChecked ? 'checked' : ''}>
          <div class="task-checkbox-custom"></div>
          <div class="task-details">
            <span class="task-type-badge type-rest">NGHỈ NGƠI</span>
            <p class="task-desc">
              <strong>Thời gian nghỉ ngơi: </strong>${sessionData.rest}
            </p>
          </div>
        </label>

        <button class="btn-session-update ${evolveBtnClass}" onclick="sessionEvolve(${w}, ${s})" ${evolveBtnDisabled ? 'disabled' : ''}>
          ${evolveBtnText}
        </button>
      </div>
    `;

    daysGrid.appendChild(card);
  }

  // Bind video play events
  const videoBtns = daysGrid.querySelectorAll(".video-play-btn");
  videoBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (currentUser.plan === "basic") {
        alert("Tính năng video hướng dẫn chuyển động chi tiết chỉ dành cho Hội Viên Premium. Vui lòng nâng cấp gói tập để xem!");
        return;
      }
      playPremiumExerciseVideo();
    });
  });

  // Bind checkbox events
  const checkboxes = daysGrid.querySelectorAll(".task-checkbox-input");
  checkboxes.forEach(box => {
    box.addEventListener("change", () => {
      const weekVal = box.getAttribute("data-week");
      const sessionVal = box.getAttribute("data-session");
      const typeVal = box.getAttribute("data-type");
      const key = `w${weekVal}-s${sessionVal}-${typeVal}`;

      let newGoalTasks = {};
      try {
        if (currentUser.goalTasks) {
          newGoalTasks = JSON.parse(currentUser.goalTasks);
        }
      } catch (e) {}

      let currentList = [...(newGoalTasks[goalKey] || [])];
      if (box.checked) {
        if (!currentList.includes(key)) currentList.push(key);
      } else {
        currentList = currentList.filter(k => k !== key);
      }

      newGoalTasks[goalKey] = currentList;
      currentUser.goalTasks = JSON.stringify(newGoalTasks);
      currentUser.completedTasks = JSON.stringify(currentList); // Sync fallback

      DBManager.updateGoalTasks(currentUser.username, newGoalTasks).then(() => {
        // Redraw this week's checklist to immediately update button status
        generateAdaptedRoadmapTasks(location, goal, injury);
        updateRoadmapProgress(goalKey);
      });
    });
  });

  // Render final bottom progress bar
  updateRoadmapProgress(goalKey);
}

function updateRoadmapProgress(goalKey) {
  let goalTasksObj = {};
  try {
    if (currentUser.goalTasks) {
      goalTasksObj = JSON.parse(currentUser.goalTasks);
    }
  } catch (e) {}

  const completedList = goalTasksObj[goalKey] || [];
  const totalWeeks = getWeeksByDuration(currentUser.duration);
  const totalTasks = totalWeeks * 3 * 3; // total sessions * 3 tasks/session
  
  // Calculate completed count by filtering keys matching w<W>-s<S>-<Type> (excluding -evolved)
  let checkedCount = 0;
  completedList.forEach(key => {
    if (key.includes("-workout") || key.includes("-nutrition") || key.includes("-rest")) {
      checkedCount++;
    }
  });

  const progressPercent = totalTasks > 0 ? Math.round((checkedCount / totalTasks) * 100) : 0;
  
  const textCompleted = document.getElementById("roadmap-tasks-completed-text");
  const textPercent = document.getElementById("roadmap-tasks-percent-text");
  const barFill = document.getElementById("roadmap-tasks-progress-bar");
  
  if (textCompleted) textCompleted.textContent = `Tổng tiến trình lộ trình (${goalKey}): Đã hoàn thành ${checkedCount} / ${totalTasks} nhiệm vụ`;
  if (textPercent) textPercent.textContent = `${progressPercent}%`;
  if (barFill) barFill.style.width = `${progressPercent}%`;

  const btnEvolve = document.getElementById("btn-evolve-body");
  if (btnEvolve) {
    if (progressPercent === 100) {
      btnEvolve.classList.remove("disabled");
      btnEvolve.removeAttribute("disabled");
    } else {
      btnEvolve.classList.add("disabled");
      btnEvolve.setAttribute("disabled", "true");
    }
  }
}


function playPremiumExerciseVideo() {
  // Create video modal dynamically
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100vw";
  modal.style.height = "100vh";
  modal.style.backgroundColor = "rgba(0,0,0,0.85)";
  modal.style.zIndex = "2000";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modal.style.backdropFilter = "blur(10px)";
  
  const content = document.createElement("div");
  content.style.position = "relative";
  content.style.width = "90%";
  content.style.maxWidth = "700px";
  content.style.backgroundColor = "var(--bg-card)";
  content.style.border = "1px solid var(--border-color)";
  content.style.borderRadius = "16px";
  content.style.padding = "24px";
  content.style.textAlign = "center";
  
  content.innerHTML = `
    <h3 style="font-family: var(--font-title); color: var(--text-primary); margin-bottom: 16px;"><i class="fa-solid fa-circle-play text-red"></i> VIDEO HƯỚNG DẪN ĐỘNG PT</h3>
    <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls autoplay style="width: 100%; border-radius: 8px; border: 1px solid var(--border-color);"></video>
    <button id="close-video-modal-btn" class="btn-primary" style="margin-top: 16px; padding: 8px 24px;">ĐÓNG VIDEO</button>
  `;
  
  modal.appendChild(content);
  document.body.appendChild(modal);

  document.getElementById("close-video-modal-btn").addEventListener("click", () => {
    modal.remove();
  });
}

// 8. PT Portal Handler
function setupPTPortalHandlers() {
  const ptSelect = document.getElementById("pt-select-member");
  if (ptSelect) {
    ptSelect.addEventListener("change", (e) => {
      const selectedUsername = e.target.value;
      if (!selectedUsername) return;

      DBManager.getUser(selectedUsername).then(user => {
                if (user) {
          document.getElementById("pt-meal-breakfast").value = user.mealBreakfast || "4 lòng trắng trứng + yến mạch + chuối";
          document.getElementById("pt-meal-lunch").value = user.mealLunch || "200g ức gà luộc + gạo lứt + salad rau xanh";
          document.getElementById("pt-meal-snack").value = user.mealSnack || "1 muỗng Whey Protein Isolate + 1 quả chuối sứ";
          document.getElementById("pt-meal-dinner").value = user.mealDinner || "150g cá hồi áp chảo + măng tây nướng tỏi";
        }
      });
    });
  }

  // Override window alert sync
  window.updateMealsByPT = function() {
    const ptSelect = document.getElementById("pt-select-member");
    const selectedUsername = ptSelect ? ptSelect.value : "";
    if (!selectedUsername) {
      alert("Vui lòng chọn học viên Premium trước!");
      return;
    }

    const meals = {
      mealBreakfast: document.getElementById("pt-meal-breakfast").value.trim(),
      mealLunch: document.getElementById("pt-meal-lunch").value.trim(),
      mealSnack: document.getElementById("pt-meal-snack").value.trim(),
      mealDinner: document.getElementById("pt-meal-dinner").value.trim()
    };

    DBManager.updateUserMeals(selectedUsername, meals).then(() => {
      alert("Thực đơn dinh dưỡng đã được cập nhật thành công và đồng bộ tức thì lên Lộ trình của Hội Viên!");
      renderPTPortal();
    }).catch(err => {
      console.error(err);
      alert("Lỗi khi cập nhật dinh dưỡng.");
    });
  };
}

function renderPTPortal() {
  if (!currentUser || currentUser.role !== "pt") return;

  DBManager.getAllUsers().then(users => {
    // Thống kê số lượng
    const total = users.length;
    const premium = users.filter(u => u.plan === "premium").length;
    const regular = users.filter(u => u.plan === "basic").length;

    document.getElementById("pt-total-members").textContent = total;
    document.getElementById("pt-premium-members").textContent = premium;
    document.getElementById("pt-regular-members").textContent = regular;

    // Render danh sách học viên
    const tbody = document.getElementById("pt-members-tbody");
    tbody.innerHTML = "";

    if (total === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 24px; color: #888;">Chưa có học viên nào làm khảo sát.</td></tr>`;
    } else {
      users.forEach(u => {
        // Calculate BMI
        const heightM = u.height / 100;
        const bmi = heightM > 0 ? (u.currentWeight / (heightM * heightM)).toFixed(1) : "0";
        
        // Count tasks completed
        let tasksDone = 0;
        let totalT = 9;
        try {
          const arr = JSON.parse(u.completedTasks || "[]");
          tasksDone = arr.filter(key => key.includes("-workout") || key.includes("-nutrition") || key.includes("-rest")).length;
          const weeks = getWeeksByDuration(u.duration);
          totalT = weeks * 3 * 3;
        } catch(e) {}

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><strong>${u.name}</strong><br><small style="color:var(--text-muted)">@${u.username}</small></td>
          <td><span class="${u.plan === 'premium' ? 'badge-red' : 'badge-regular'}" style="font-size:10px; padding:2px 8px; border-radius:10px; background:${u.plan === 'premium' ? 'var(--primary-red)' : 'var(--border-color)'}">${u.plan === 'premium' ? 'Premium ⭐' : 'Thường'}</span></td>
          <td>${u.goal || 'Chưa lập'}</td>
          <td><strong class="text-yellow">${bmi}</strong></td>
          <td><strong>${tasksDone}/${totalT}</strong> (${Math.round((tasksDone/totalT)*100)}%)</td>
        `;
        tbody.appendChild(tr);
      });
    }

    // Nạp học viên Premium vào dropdown select
    const ptSelect = document.getElementById("pt-select-member");
    if (ptSelect) {
      ptSelect.innerHTML = `<option value="">-- Chọn học viên --</option>`;
      const premiumUsers = users.filter(u => u.plan === "premium");
      premiumUsers.forEach(u => {
        const opt = document.createElement("option");
        opt.value = u.username;
        opt.textContent = `${u.name} (@${u.username})`;
        ptSelect.appendChild(opt);
      });
    }
  });
}

// 9. Mobile responsive menu toggle
function setupMobileMenuToggle() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const headerNav = document.getElementById("header-nav");
  if (mobileMenuToggle && headerNav) {
    mobileMenuToggle.addEventListener("click", () => {
      headerNav.classList.toggle("open");
    });
  }
}
