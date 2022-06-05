const validate = require('./regex');

test('Validação de caracteres', () => {
    expect(validate('djI38D55')).toBe(true);
});

test('Faltou uma maiúscula', () => {
    expect(validate('a2.d412')).toBe(false);
});