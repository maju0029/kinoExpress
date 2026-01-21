import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import { app } from '../index.js';

describe('Movie list page', () => {
    test('lists movies from API', async () => {
    await request(app)
      .get('/movies')
      .expect(200)
      .expect((res) => {
        expect(res.text).toContain('Filmer');
        expect(res.text).toMatch(/<h2>.*<\/h2>/); // Check for movie titles in h2 tags
      });
    });
});