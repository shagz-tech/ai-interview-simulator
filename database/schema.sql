-- AI Interview Simulator: database schema (PostgreSQL)

CREATE TABLE users (
    id            SERIAL PRIMARY KEY,
    name          VARCHAR(100) NOT NULL,
    email         VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at    TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE interviews (
    id            SERIAL PRIMARY KEY,
    user_id       INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role          VARCHAR(50) NOT NULL,
    difficulty    VARCHAR(10) NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
    status        VARCHAR(15) NOT NULL DEFAULT 'in_progress'
                  CHECK (status IN ('in_progress', 'completed')),
    overall_score INT CHECK (overall_score BETWEEN 0 AND 100),
    started_at    TIMESTAMP NOT NULL DEFAULT NOW(),
    ended_at      TIMESTAMP
);

CREATE TABLE messages (
    id              SERIAL PRIMARY KEY,
    interview_id    INT NOT NULL REFERENCES interviews(id) ON DELETE CASCADE,
    sender          VARCHAR(5) NOT NULL CHECK (sender IN ('ai', 'user')),
    content         TEXT NOT NULL,
    question_number INT NOT NULL,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE evaluations (
    id             SERIAL PRIMARY KEY,
    interview_id   INT NOT NULL UNIQUE REFERENCES interviews(id) ON DELETE CASCADE,
    technical      INT CHECK (technical BETWEEN 0 AND 100),
    communication  INT CHECK (communication BETWEEN 0 AND 100),
    relevance      INT CHECK (relevance BETWEEN 0 AND 100),
    confidence     INT CHECK (confidence BETWEEN 0 AND 100),
    strong_areas   TEXT,
    weak_areas     TEXT,
    recommendation TEXT,
    created_at     TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_interviews_user ON interviews(user_id);
CREATE INDEX idx_messages_interview ON messages(interview_id);