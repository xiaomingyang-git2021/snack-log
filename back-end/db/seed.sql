\c snack_a_log; 

INSERT INTO snacks (name, image, fiber, protein, added_sugar, is_healthy) VALUES
('Strawberries','https://picsum.photos/id/1080/300/300', 20, 10, 0, true),
('Raspberries', 'https://picsum.photos/id/102/300/300', 16, 4, 0, true),
('Honey Covered Granola', 'https://picsum.photos/id/312/300/300', 30, 12, 22, false),
('New Wave Nuts', 'https://picsum.photos/id/139/300/300', 11, 55, 9, true),
('Raw Onions & Turnips', 'https://picsum.photos/id/292/300/300', 11, 9, 9, true),
('Healthy Birthday Cake Square', 'https://content.nutrisystem.com/images/products/alc/large/BirthdayCakeSquare_L.jpg', 4, 8, 19, false);

-- use advanced image search to choose images that are square (aspect ratio)
-- https://www.google.com/advanced_image_search