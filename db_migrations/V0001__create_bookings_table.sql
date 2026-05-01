CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    car_name VARCHAR(255) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time VARCHAR(10) NOT NULL,
    client_name VARCHAR(150) NOT NULL,
    client_phone VARCHAR(30) NOT NULL,
    contact_method VARCHAR(20) NOT NULL DEFAULT 'tg',
    need_trade_in BOOLEAN NOT NULL DEFAULT FALSE,
    need_test_drive BOOLEAN NOT NULL DEFAULT FALSE,
    comment TEXT,
    status VARCHAR(30) NOT NULL DEFAULT 'new',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(booking_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_phone ON bookings(client_phone);

COMMENT ON TABLE bookings IS 'Брони на просмотр автомобилей в шоуруме';
COMMENT ON COLUMN bookings.car_name IS 'Название выбранного автомобиля';
COMMENT ON COLUMN bookings.booking_date IS 'Дата визита в шоурум';
COMMENT ON COLUMN bookings.booking_time IS 'Время слота, например 14:40';
COMMENT ON COLUMN bookings.contact_method IS 'tg или wa';
COMMENT ON COLUMN bookings.status IS 'new, confirmed, completed, cancelled';