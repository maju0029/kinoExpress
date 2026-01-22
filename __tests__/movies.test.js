import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import { app } from '../app.js';

describe('Movie list page', () => {
    test("correctly loads the movie title", async () => {
    await request(app)
      .get("/movies/6")
      .expect(200)
      .expect(res => {
        expect(res.text).toContain("Forrest Gump");
      });
    });
});