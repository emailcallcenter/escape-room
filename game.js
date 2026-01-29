// game.js

// -----------------------------
// Rooms (story + clues)
// -----------------------------
const rooms = [
  {
    id: "welcome",
    render: () => `
      <span class="kicker">San Diego 2026 • Escape Room</span>
      <h1>Welcome!</h1>

      <p>Hello, my name is <strong>Ima Del Gate</strong> — and I really need your help.</p>

      <p>
        I was so excited to arrive in San Diego that my brain completely short-circuited.
        I have a terrible memory. I lose things. I forget passwords.
        Sometimes I forget why I walked into a room.
      </p>

      <p>
        Unfortunately… I forgot several important things on this trip.
        If I don’t figure this out soon, I’m going to be in serious trouble.
      </p>

      <div class="divider"></div>

      <p class="small">
        You’ll have <strong>1 hour</strong> once you begin.<br />
        <strong>Answers are not case sensitive.</strong> Work with your team and use your training to find the answers. Have fun!
      </p>

      <div class="row">
        <button class="primary" id="startBtn">Help Ima Now! →</button>
      </div>
    `
  },

  {
    id: "clue1",
    answer: "san lost and found",
    render: () => `
      <h2>Clue 1 — Missing Bag</h2>

      <p>
        The friends greeting me at my arrival was joyful — maybe too joyful.
        Somewhere between the airport and my excitement, my phone (and the bag holding it) vanished.
      </p>

      <p>
        Airports have a place for forgotten things.
        What is it called?
      </p>

      <div class="row">
        <input id="answerInput" type="text"
          placeholder="Enter answer…"
          autocomplete="off" autocapitalize="none" spellcheck="false" />
        <button class="primary" id="unlockBtn">Unlock</button>
      </div>

      <div id="msg" class="msg"></div>
    `,
    nextId: "clue2"
  },

  {
    id: "clue2",
    answer: "hello32",
    render: () => `
      <h2>Clue 2 — Locked Phone</h2>

      <p>
        You did it. The airport’s lost and found had my bag.
        Even better — my phone was inside.
      </p>

      <p>
        Unfortunately… now I can’t unlock it.
      </p>

      <p>
        I remember sending you my phone password in a cryptic email on
        <strong>January 23rd</strong>.
      </p>

      <p>
        I'm sure you can figure it out. My password is pretty simple! Here's how you decrypt my email:
        <strong>What comes first matters most, then count only what was truly said</strong>.
      </p>

      <div class="row">
        <input id="answerInput" type="text"
          placeholder="Enter answer…"
          autocomplete="off" autocapitalize="none" spellcheck="false" />
        <button class="primary" id="unlockBtn">Unlock</button>
      </div>

      <div id="msg" class="msg"></div>
    `,
    nextId: "clue3"
  },

  {
    id: "clue3",
    answer: "toiletfinder.net",
    render: () => `
      <h2>Clue 3 — Bathroom Emergency</h2>

      <p>
        I’m in. Thank you. Crisis averted… and immediately replaced.
      </p>

      <p>
        I’m used to knowing exactly where relief can be found.
      </p>

      <p>
        Travel has disrupted that luxury, and time is ticking.
      </p>

      <p>
        Which website points the way to the nearest bathroom?
      </p>

      <div class="row">
        <span style="
          padding:12px 10px;
          border:1px solid var(--border);
          border-radius:12px;
          background:rgba(7,10,20,.55);
          font-weight:700;
          opacity:.8;
        ">https://</span>

        <input id="answerInput" type="text"
          placeholder="website name…"
          autocomplete="off" autocapitalize="none" spellcheck="false" />

        <button class="primary" id="unlockBtn">Unlock</button>
      </div>

      <div id="msg" class="msg"></div>
    `,
    nextId: "clue4"
  },

  {
    id: "clue4",
    answer: "245",
    render: () => `
      <h2>Clue 4 — Bank Withdrawal</h2>

      <p>
        What a relief, thanks for helping me find the bathroom.
      </p>

      <p>
        With one problem solved, another task awaits.
        Some give with a tap.
        I prefer the weight of it in my hands.
      </p>

      <p>
        Before I reach the bank, I need to know one thing:
        when <strong>all</strong> suggested donations are combined, what number should I walk away with?
        My activities are <strong>Friends for Life</strong>, <strong>Harbor Sunset Cruise</strong> &amp; the food tour
        (I think it's called <strong>Taste and Rejoice</strong>).
      </p>

      <div class="row">
        <span style="padding:12px 10px;border:1px solid var(--border);border-radius:12px;background:rgba(7,10,20,.55);font-weight:800;">$</span>
        <input id="answerInput" type="text"
          placeholder="Enter amount…"
          inputmode="decimal"
          autocomplete="off" autocapitalize="none" spellcheck="false" />
        <button class="primary" id="unlockBtn">Unlock</button>
      </div>

      <div id="msg" class="msg"></div>
    `,
    nextId: "clue5"
  },

  {
    id: "clue5",
    answer: "October 27, 2025",
    render: () => `
      <h2>Clue 5 — Different Languages</h2>

      <p>
        Perfect — thank you for helping me with my bank withdrawal.
      </p>

      <p>
        I’ve noticed something impressive about the volunteers here.
        No matter what language a delegate speaks, someone is always ready to help.
        I heard this didn’t happen by accident — there was an article released to prepare volunteers for exactly this.
        <strong>When was that article published?</strong>
      </p>

      <div class="row">
        <span style="padding:12px 10px;border:1px solid var(--border);border-radius:12px;background:rgba(7,10,20,.55);font-weight:800;">📅</span>
        <input id="answerInput" type="text"
          placeholder="Enter date…"
          autocomplete="off" autocapitalize="none" spellcheck="false" />
        <button class="primary" id="unlockBtn">Unlock</button>
      </div>

      <div id="msg" class="msg"></div>
    `,
    nextId: "clue6"
  },

  {
    id: "clue6",
    answer: "throughout your trip",
    render: () => `
      <h2>Clue 6 — Applicant Requirements</h2>

      <p>
        You’ve been so helpful! All of God’s people are. What a witness this is to the city!
      </p>

      <p>
        You know what, even the staff at the hotel were commenting that they noticed our dress and grooming is different,
        we are very modest and exemplary in every respect!
      </p>

      <p>
        I think I read that somewhere when I was applying and reading over the explanation of applicant requirements..
        it said something like, <em>“because you represent Jehovah and his organization”</em>..
        what <strong>3 words</strong> were underlined again after that?
      </p>

      <div class="row">
        <input id="answerInput" type="text"
          placeholder="Enter answer…"
          autocomplete="off" autocapitalize="none" spellcheck="false" />
        <button class="primary" id="unlockBtn">Unlock</button>
      </div>

      <div id="msg" class="msg"></div>
    `,
    nextId: "clue7"
  },

  {
    id: "clue7",
    answer: "30",
    render: () => `
      <h2>Clue 7 — Workflow Wisdom</h2>

      <p>
        Look at you — so helpful!
      </p>

      <p>
        I hear there’s a map behind the logic that keeps you on track.
      </p>

      <p>
        Tell me… how many stops does that map have?
      </p>

      <div class="row">
        <input id="answerInput" type="text"
          placeholder="Enter number…"
          inputmode="numeric"
          autocomplete="off" autocapitalize="none" spellcheck="false" />
        <button class="primary" id="unlockBtn">Unlock</button>
      </div>

      <div id="msg" class="msg"></div>
    `,
    nextId: "clue8"
  },

{
  id: "clue8",
  answer: "143143",
  render: () => `
    <h2>Clue 8 — Double Email</h2>

    <p>
      Clearly I’m a little clumsy! Don’t be surprised if I accidentally email you twice with the same question.
    </p>

    <p>
      I know you have a prepared email for moments like that.
      Out of curiosity… what <strong>sample ticket number</strong> appears in that message?
    </p>

    <div class="row">
      <input id="answerInput" type="text"
        placeholder="Enter ticket number…"
        inputmode="numeric"
        autocomplete="off" autocapitalize="none" spellcheck="false" />
      <button class="primary" id="unlockBtn">Unlock</button>
    </div>

    <div id="msg" class="msg"></div>
  `,
  nextId: "clue9"
},


];

// -----------------------------
// DOM
// -----------------------------
const screen = document.getElementById("screen");
const timerEl = document.getElementById("timer");
const statusEl = document.getElementById("status");
const logoEl = document.getElementById("logoEl");
const musicBtn = document.getElementById("musicBtn");

// -----------------------------
// State
// -----------------------------
let currentId = "welcome";
let started = false;

const ONE_HOUR_MS = 60 * 60 * 1000;
let endTimeMs = null;
let timerInterval = null;

// -----------------------------
// Helpers
// -----------------------------
function normalize(s) { return (s || "").trim().toLowerCase(); }

function formatHMS(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(total / 3600)).padStart(2, "0");
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function timeRemainingMs() {
  if (!endTimeMs) return ONE_HOUR_MS;
  return endTimeMs - Date.now();
}

function getRoom(id) { return rooms.find(r => r.id === id); }

function goTo(id) {
  currentId = id;
  render();
}

// -----------------------------
// Timer
// -----------------------------
function startTimer() {
  endTimeMs = Date.now() + ONE_HOUR_MS;
  updateTimerUI();

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    updateTimerUI();
    if (timeRemainingMs() <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      onTimeUp();
    }
  }, 250);
}

function updateTimerUI() {
  const rem = timeRemainingMs();
  timerEl.textContent = formatHMS(rem);

  const danger = rem <= (10 * 60 * 1000);
  timerEl.classList.toggle("danger", danger);

  statusEl.textContent = "";
  updateMusicIntensity(rem);
}

function onTimeUp() {
  stopMusic();
  screen.innerHTML = `
    <h1>⏳ Time’s Up</h1>
    <p>You ran out of time. Ima Del Gate is still missing important stuff…</p>
    <div class="row">
      <button class="primary" id="restartBtn">Restart</button>
    </div>
  `;
  document.getElementById("restartBtn").addEventListener("click", () => location.reload());
}

// -----------------------------
// Music (toggleable)
// -----------------------------
let audioCtx = null;
let master = null;
let droneOsc = null;
let droneGain = null;
let tickInterval = null;
let isMusicOn = false;
let tickMs = 1400;

function ensureAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  master = audioCtx.createGain();
  master.gain.value = 0.0;
  master.connect(audioCtx.destination);

  droneOsc = audioCtx.createOscillator();
  droneOsc.type = "triangle"; // warm, calm, non-scary
  droneOsc.frequency.value = 140;

  droneGain = audioCtx.createGain();
  droneGain.gain.value = 0.0;

  droneOsc.connect(droneGain);
  droneGain.connect(master);
  droneOsc.start();

  startTicking(tickMs);
}

function startTicking(ms) {
  tickMs = ms;
  if (tickInterval) clearInterval(tickInterval);
  tickInterval = setInterval(playTick, ms);
}

function playTick() {
  if (!audioCtx || !isMusicOn) return;
  const t = audioCtx.currentTime;

  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = "triangle";
  o.frequency.value = 180;

  g.gain.setValueAtTime(0.0, t);
  g.gain.linearRampToValueAtTime(0.28, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.10);

  o.connect(g);
  g.connect(master);

  o.start(t);
  o.stop(t + 0.12);
}

function setMusic(on) {
  ensureAudio();
  isMusicOn = on;

  if (audioCtx.state === "suspended") audioCtx.resume();

  master.gain.setTargetAtTime(on ? 0.20 : 0.0, audioCtx.currentTime, 0.15);
  droneGain.gain.setTargetAtTime(on ? 0.09 : 0.0, audioCtx.currentTime, 0.18);

  musicBtn.textContent = on ? "🔊 Music On" : "🔇 Music Off";
}

function stopMusic() {
  isMusicOn = false;
  if (master && audioCtx) {
    master.gain.setTargetAtTime(0.0, audioCtx.currentTime, 0.06);
    droneGain.gain.setTargetAtTime(0.0, audioCtx.currentTime, 0.06);
  }
  musicBtn.textContent = "🔇 Music Off";
}

function updateMusicIntensity(remMs) {
  if (!audioCtx || !isMusicOn) return;

  const frac = Math.min(1, Math.max(0, remMs / ONE_HOUR_MS));
  const intensity = 1 - frac;

  droneOsc.frequency.setTargetAtTime(80 + intensity * 20, audioCtx.currentTime, 0.4);
  master.gain.setTargetAtTime(0.12 + intensity * 0.04, audioCtx.currentTime, 0.4);
  droneGain.gain.setTargetAtTime(0.06 + intensity * 0.03, audioCtx.currentTime, 0.4);

  const nextMs = Math.max(320, 950 - intensity * 650);
  if (tickInterval && Math.abs(nextMs - tickMs) > 60) {
    startTicking(nextMs);
  }
}

// -----------------------------
// Answer checking (with friendly flexibility)
// -----------------------------
function normalizeSpaces(s) {
  return String(s || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function tryParseDateToISO(s) {
  const raw = normalizeSpaces(s);

  // MM/DD/YYYY or M/D/YYYY (also supports dashes)
  const mdy = raw.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (mdy) {
    const mm = String(mdy[1]).padStart(2, "0");
    const dd = String(mdy[2]).padStart(2, "0");
    const yyyy = mdy[3];
    return `${yyyy}-${mm}-${dd}`;
  }

  // ISO: YYYY-MM-DD
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return raw;

  // Month name formats (Oct 27, 2025 / October 27 2025, etc.)
  const d = new Date(s);
  if (!isNaN(d.getTime())) {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  return null;
}

function isCorrectAnswer(room, attemptRaw) {
  const attempt = normalizeSpaces(attemptRaw);
  const correct = normalizeSpaces(room.answer);

  // Clue 4: accept 245 OR 245.00 (and allow "$245", "245.0", "245.000" just in case)
  if (room.id === "clue4") {
    const cleaned = attempt.replace(/\$/g, "");
    return cleaned === "245" || cleaned === "245.00" || cleaned === "245.0" || cleaned === "245.000";
  }

  // Clue 5: accept multiple date formats (October 27, 2025 / 10/27/2025 / 2025-10-27)
  if (room.id === "clue5") {
    const aISO = tryParseDateToISO(attemptRaw);
    const cISO = tryParseDateToISO(room.answer);
    if (aISO && cISO) return aISO === cISO;
    return attempt === correct;
  }

  return attempt === correct;
}

// -----------------------------
// Render + Next button
// -----------------------------
function showNextButton(room) {
  if (document.getElementById("nextBtn")) return;

  const row = document.querySelector(".row");
  if (!row) return;

  if (!room.nextId) {
    const done = document.createElement("div");
    done.className = "small";
    done.textContent = "End of demo.";
    row.parentElement.appendChild(done);
    return;
  }

  const nextBtn = document.createElement("button");
  nextBtn.id = "nextBtn";
  nextBtn.className = "primary";
  nextBtn.textContent = "Next clue →";
  nextBtn.addEventListener("click", () => goTo(room.nextId));
  row.appendChild(nextBtn);
}

function render() {
  logoEl.style.display = (currentId === "welcome") ? "block" : "none";

  const room = getRoom(currentId);
  screen.innerHTML = room.render();

  if (currentId === "welcome") {
    musicBtn.disabled = true;
    musicBtn.textContent = "🔇 Music Off";

    document.getElementById("startBtn").addEventListener("click", () => {
      started = true;
      startTimer();
      goTo("clue1");

      musicBtn.disabled = false;
      setMusic(true);
    });
    return;
  }

  const input = document.getElementById("answerInput");
  const unlockBtn = document.getElementById("unlockBtn");
  const msg = document.getElementById("msg");

  function tryUnlock() {
    const attempt = normalizeSpaces(input.value);

    if (!attempt) {
      msg.textContent = "Type an answer first.";
      msg.className = "msg bad";
      return;
    }

    if (isCorrectAnswer(room, input.value)) {
      msg.textContent = "Unlocked! ✅";
      msg.className = "msg ok";
      showNextButton(room);
    } else {
      msg.textContent = "Nope… that doesn’t work.";
      msg.className = "msg bad";
      input.select();
    }
  }

  unlockBtn.addEventListener("click", tryUnlock);
  input.addEventListener("keydown", e => { if (e.key === "Enter") tryUnlock(); });

  setTimeout(() => input.focus(), 50);
}

// Music toggle
musicBtn.addEventListener("click", () => setMusic(!isMusicOn));

// Init
render();
updateTimerUI();
