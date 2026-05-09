/* ==========================================================
   АСПЕКТ — общие скрипты и демо-данные
   ========================================================== */

// ----- Демо-данные сотрудников -----
// Сегодня (для демо): можно динамически вычислять на основе текущей даты
const TODAY = new Date();

function daysFromNow(days) {
  const d = new Date(TODAY);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

// Иностранные сотрудники для демо
const DEFAULT_EMPLOYEES = [
  {
    id: 1,
    fullName: "Бекмуратов Шерзод Анварович",
    citizenship: "Узбекистан",
    position: "Монтажник",
    department: "Стройка №3 (м. ЦСКА)",
    docType: "Патент на работу",
    docNumber: "77 22 1543210",
    issueDate: daysFromNow(-330),
    expiryDate: daysFromNow(-2),    // ПРОСРОЧЕН
    medicalCheckDate: daysFromNow(-330),
    mvdNotified: true,
  },
  {
    id: 2,
    fullName: "Каримов Дилшод Маратович",
    citizenship: "Таджикистан",
    position: "Сварщик",
    department: "Стройка №1 (Раменки)",
    docType: "Патент на работу",
    docNumber: "77 21 0987654",
    issueDate: daysFromNow(-340),
    expiryDate: daysFromNow(5),     // КРИТИЧЕСКАЯ ЗОНА
    medicalCheckDate: daysFromNow(-340),
    mvdNotified: true,
  },
  {
    id: 3,
    fullName: "Юсупов Равшан Бахтиёрович",
    citizenship: "Узбекистан",
    position: "Бетонщик",
    department: "Стройка №2 (Котельники)",
    docType: "Патент на работу",
    docNumber: "77 22 1122334",
    issueDate: daysFromNow(-300),
    expiryDate: daysFromNow(28),    // СКОРО
    medicalCheckDate: daysFromNow(-300),
    mvdNotified: true,
  },
  {
    id: 4,
    fullName: "Холиков Сардор Махмудович",
    citizenship: "Таджикистан",
    position: "Электромонтажник",
    department: "Стройка №3 (м. ЦСКА)",
    docType: "Патент на работу",
    docNumber: "77 22 0011223",
    issueDate: daysFromNow(-200),
    expiryDate: daysFromNow(165),   // OK
    medicalCheckDate: daysFromNow(-200),
    mvdNotified: true,
  },
  {
    id: 5,
    fullName: "Назаров Рустам Эркинович",
    citizenship: "Кыргызстан",
    position: "Прораб",
    department: "Управление",
    docType: "ВНЖ",
    docNumber: "82 6543210",
    issueDate: daysFromNow(-700),
    expiryDate: daysFromNow(1095),  // ВНЖ длинный срок
    medicalCheckDate: daysFromNow(-200),
    mvdNotified: true,
  },
  {
    id: 6,
    fullName: "Алиев Искандер Тагирович",
    citizenship: "Азербайджан",
    position: "Электрик",
    department: "Стройка №1 (Раменки)",
    docType: "РВП",
    docNumber: "77 5566778",
    issueDate: daysFromNow(-400),
    expiryDate: daysFromNow(700),
    medicalCheckDate: daysFromNow(-400),
    mvdNotified: true,
  },
  {
    id: 7,
    fullName: "Мансуров Жасур Олимович",
    citizenship: "Узбекистан",
    position: "Подсобный рабочий",
    department: "Склад (Подольск)",
    docType: "Патент на работу",
    docNumber: "77 23 4556677",
    issueDate: daysFromNow(-150),
    expiryDate: daysFromNow(75),    // OK
    medicalCheckDate: daysFromNow(-150),
    mvdNotified: true,
  },
  {
    id: 8,
    fullName: "Турсунов Бахтиёр Аликович",
    citizenship: "Узбекистан",
    position: "Грузчик",
    department: "Склад (Подольск)",
    docType: "Патент на работу",
    docNumber: "77 22 9988776",
    issueDate: daysFromNow(-310),
    expiryDate: daysFromNow(15),    // ЖЁЛТЫЙ
    medicalCheckDate: daysFromNow(-310),
    mvdNotified: false,             // нет уведомления!
  },
  {
    id: 9,
    fullName: "Орипов Фарход Бахромович",
    citizenship: "Таджикистан",
    position: "Каменщик",
    department: "Стройка №2 (Котельники)",
    docType: "Патент на работу",
    docNumber: "77 22 5544332",
    issueDate: daysFromNow(-355),
    expiryDate: daysFromNow(-15),   // ПРОСРОЧЕН
    medicalCheckDate: daysFromNow(-355),
    mvdNotified: true,
  },
  {
    id: 10,
    fullName: "Хайдаров Авазбек Асылбекович",
    citizenship: "Кыргызстан",
    position: "Водитель",
    department: "Логистика",
    docType: "Разрешение на работу",
    docNumber: "77 7766554",
    issueDate: daysFromNow(-180),
    expiryDate: daysFromNow(180),   // OK
    medicalCheckDate: daysFromNow(-180),
    mvdNotified: true,
  },
  {
    id: 11,
    fullName: "Эргашев Шахзод Камилович",
    citizenship: "Узбекистан",
    position: "Маляр",
    department: "Стройка №3 (м. ЦСКА)",
    docType: "Патент на работу",
    docNumber: "77 23 1234567",
    issueDate: daysFromNow(-100),
    expiryDate: daysFromNow(260),   // OK
    medicalCheckDate: daysFromNow(-100),
    mvdNotified: true,
  },
  {
    id: 12,
    fullName: "Сафаров Илхом Гайратович",
    citizenship: "Таджикистан",
    position: "Плотник",
    department: "Стройка №1 (Раменки)",
    docType: "Патент на работу",
    docNumber: "77 22 7766554",
    issueDate: daysFromNow(-280),
    expiryDate: daysFromNow(45),    // OK
    medicalCheckDate: daysFromNow(-280),
    mvdNotified: true,
  },
  {
    id: 13,
    fullName: "Кадыров Нурбек Темирович",
    citizenship: "Кыргызстан",
    position: "Кладовщик",
    department: "Склад (Подольск)",
    docType: "Разрешение на работу",
    docNumber: "77 8877665",
    issueDate: daysFromNow(-220),
    expiryDate: daysFromNow(140),
    medicalCheckDate: daysFromNow(-220),
    mvdNotified: true,
  },
  {
    id: 14,
    fullName: "Рахимов Алишер Музаффарович",
    citizenship: "Узбекистан",
    position: "Арматурщик",
    department: "Стройка №2 (Котельники)",
    docType: "Патент на работу",
    docNumber: "77 23 0099887",
    issueDate: daysFromNow(-50),
    expiryDate: daysFromNow(310),   // OK
    medicalCheckDate: daysFromNow(-50),
    mvdNotified: true,
  },
  {
    id: 15,
    fullName: "Махмудов Зафар Махмудович",
    citizenship: "Таджикистан",
    position: "Разнорабочий",
    department: "Стройка №3 (м. ЦСКА)",
    docType: "Патент на работу",
    docNumber: "77 22 3344556",
    issueDate: daysFromNow(-365),
    expiryDate: daysFromNow(-30),   // ПРОСРОЧЕН
    medicalCheckDate: daysFromNow(-365),
    mvdNotified: false,
  },
];

// ----- Хранилище в памяти / localStorage -----
const STORAGE_KEY = "aspect_employees_v1";

function loadEmployees() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (e) { /* ignore */ }
  return JSON.parse(JSON.stringify(DEFAULT_EMPLOYEES));
}

function saveEmployees(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) { /* ignore */ }
}

function resetEmployees() {
  localStorage.removeItem(STORAGE_KEY);
}

// ----- Расчёт статуса документа -----
// Возвращает один из: 'expired' | 'critical' | 'soon' | 'ok'
function docStatus(emp) {
  const exp = new Date(emp.expiryDate);
  const today = new Date(TODAY.toDateString());
  const diff = Math.round((exp - today) / (1000 * 60 * 60 * 24));
  if (diff < 0) return { code: "expired", label: "Просрочен", days: diff, color: "red" };
  if (diff <= 7) return { code: "critical", label: "Критично", days: diff, color: "red" };
  if (diff <= 30) return { code: "soon", label: "Скоро истекает", days: diff, color: "yellow" };
  return { code: "ok", label: "Действует", days: diff, color: "green" };
}

function statusBadge(emp) {
  const s = docStatus(emp);
  const cls = s.color === "red" ? "badge-red"
            : s.color === "yellow" ? "badge-yellow" : "badge-green";
  let extra = "";
  if (s.code === "expired") extra = ` (${Math.abs(s.days)} дн.)`;
  else if (s.code !== "ok") extra = ` (${s.days} дн.)`;
  return `<span class="badge ${cls}">${s.label}${extra}</span>`;
}

// ----- Юр. долг (потенциальный штраф) -----
// ст. 18.15 КоАП РФ: до 1 000 000 ₽ за каждого нелегально занятого
const FINE_PER_EMPLOYEE = 800000; // консервативная средняя оценка для демо

function legalDebt(employees) {
  let count = 0;
  employees.forEach(e => {
    const s = docStatus(e);
    if (s.code === "expired") count++;
    if (!e.mvdNotified) count += 0; // можно учесть отдельно
  });
  return { count, total: count * FINE_PER_EMPLOYEE };
}

// ----- Группировка по статусам -----
function groupByStatus(employees) {
  const groups = { expired: [], critical: [], soon: [], ok: [] };
  employees.forEach(e => {
    groups[docStatus(e).code].push(e);
  });
  return groups;
}

// ----- Утилиты форматирования -----
function fmtDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
}
function fmtMoney(n) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(n)) + " ₽";
}
function initials(fullName) {
  return fullName.trim().split(/\s+/).slice(0, 2).map(s => s[0] || "").join("").toUpperCase();
}

// ----- Глобальный экспорт -----
window.Aspect = {
  TODAY,
  loadEmployees,
  saveEmployees,
  resetEmployees,
  docStatus,
  statusBadge,
  legalDebt,
  groupByStatus,
  fmtDate,
  fmtMoney,
  initials,
  FINE_PER_EMPLOYEE,
};
