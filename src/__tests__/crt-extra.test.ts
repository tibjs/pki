import '../setup/all';
import {assert} from '@artlab/bsert';
import {PkixCertificate} from '../builders';
import {Certificate} from '../x509';
import {readFixtureAsString} from './support';

describe('crt/extra', function () {
  it('should parse certificate', function () {
    const pem = readFixtureAsString('certs/test-root.crt');
    const cert = <Certificate>Certificate.fromPEM(pem);
    const advcert = PkixCertificate.fromX509(cert);
    assert.ok(advcert);

    // const key = new PrivateKey('p256');
    // key.generate();
    // console.log(advcert.build(key).toPEM());
  });
});
