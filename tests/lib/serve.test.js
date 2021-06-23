const next = jest.fn();

describe('serve', () => {
    it('should succeed', async () => {
        expect.assertions(3);

        const ImageFileStore = require('../../lib/store');
        const store = new ImageFileStore();

        const res = {
            setHeader: jest.fn(),
            end: jest.fn()
        };

        const serveStaticContent = store.serve();
        expect(serveStaticContent({}, res)).toBeUndefined();
        // eslint-disable-next-line jest/prefer-called-with
        expect(res.setHeader).toHaveBeenCalledTimes(2);
        // eslint-disable-next-line jest/prefer-called-with
        expect(res.end).toHaveBeenCalled();
    });

    it('should call next', async () => {
        expect.assertions(1);

        const spy = jest.spyOn(require('../../lib/server'), 'static').mockImplementation(() => {
            return function (req, res, cb) {
                cb();
            };
        });

        const ImageFileStore = require('../../lib/store');
        const store = new ImageFileStore();

        const res = {
            setHeader: jest.fn(),
            end: jest.fn()
        };

        const serveStaticContent = store.serve();
        serveStaticContent({}, res, next);
        // eslint-disable-next-line jest/prefer-called-with
        expect(next).toHaveBeenCalled();
        spy.mockClear();
        next.mockReset();
    });

    it('should fail with 404', async () => {
        expect.assertions(1);

        const spy = jest.spyOn(require('../../lib/server'), 'static').mockImplementation(() => {
            return function (req, res, cb) {
                cb({
                    statusCode: 404
                });
            };
        });

        const ImageFileStore = require('../../lib/store');
        const store = new ImageFileStore();

        const res = {
            setHeader: jest.fn(),
            end: jest.fn()
        };

        const serveStaticContent = store.serve();
        serveStaticContent({}, res, next);
        // eslint-disable-next-line jest/prefer-called-with
        expect(next).toHaveBeenCalled();
        spy.mockClear();
        next.mockReset();
    });

    it('should fail with 400', async () => {
        expect.assertions(1);

        const spy = jest.spyOn(require('../../lib/server'), 'static').mockImplementation(() => {
            return function (req, res, cb) {
                cb({
                    statusCode: 400
                });
            };
        });

        const ImageFileStore = require('../../lib/store');
        const store = new ImageFileStore();

        const res = {
            setHeader: jest.fn(),
            end: jest.fn()
        };

        const serveStaticContent = store.serve();
        serveStaticContent({}, res, next);
        // eslint-disable-next-line jest/prefer-called-with
        expect(next).toHaveBeenCalled();
        spy.mockClear();
        next.mockReset();
    });

    it('should fail with 403', async () => {
        expect.assertions(1);

        const spy = jest.spyOn(require('../../lib/server'), 'static').mockImplementation(() => {
            return function (req, res, cb) {
                cb({
                    statusCode: 403
                });
            };
        });

        const ImageFileStore = require('../../lib/store');
        const store = new ImageFileStore();

        const res = {
            setHeader: jest.fn(),
            end: jest.fn()
        };

        const serveStaticContent = store.serve();
        serveStaticContent({}, res, next);
        // eslint-disable-next-line jest/prefer-called-with
        expect(next).toHaveBeenCalled();
        spy.mockClear();
        next.mockReset();
    });

    it('should fail with a generic error', async () => {
        expect.assertions(1);

        const spy = jest.spyOn(require('../../lib/server'), 'static').mockImplementation(() => {
            return function (req, res, cb) {
                cb({
                    statusCode: 500
                });
            };
        });

        const ImageFileStore = require('../../lib/store');
        const store = new ImageFileStore();

        const res = {
            setHeader: jest.fn(),
            end: jest.fn()
        };

        const serveStaticContent = store.serve();
        serveStaticContent({}, res, next);
        // eslint-disable-next-line jest/prefer-called-with
        expect(next).toHaveBeenCalled();
        spy.mockClear();
        next.mockReset();
    });
});
