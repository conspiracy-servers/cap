/*
Stargate World Position Address Calculator - A calculator for converting world positions to Stargate addresses.
Copyright (C) 2020 viral32111

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

/*
X: World X position
Y: World Y position
Z: World Z position

Offset:
 0: Intragalactic (Same galaxy)
 1: Intergalactic (One galaxy to another)
 2: Interuniversal (Galaxy to another universe)

Origin:
 0: Earth
 1: Abydos
*/

const setXX = ['AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'BA', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'CA', 'CB', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'DA', 'DB', 'DC', 'DE', 'DF', 'DG', 'DH', 'DI', 'DJ', 'DK', 'DL', 'EA', 'EB', 'EC', 'ED', 'EF', 'EG', 'EH', 'EI', 'EJ', 'EK', 'EL', 'FA', 'FB', 'FC', 'FD', 'FE', 'FG', 'FH', 'FI', 'FJ', 'FK', 'FL', 'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GH', 'GI', 'GJ', 'GK', 'GL', 'HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HI', 'HJ', 'HK', 'HL', 'IA', 'IB', 'IC', 'ID', 'IE', 'IF', 'IG', 'IH', 'IJ', 'IK', 'IL', 'JA', 'JB', 'JC', 'JD', 'JE', 'JF', 'JG', 'JH', 'JI', 'JK', 'JL', 'KA', 'KB', 'KC', 'KD', 'KE', 'KF', 'KG', 'KH', 'KI', 'KJ', 'KL', 'LA', 'LB', 'LC', 'LD', 'LE', 'LF', 'LG', 'LH', 'LI', 'LJ', 'LK'];

const setYY = ['MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'NM', 'NO', 'NP', 'NQ', 'NR', 'NS', 'NT', 'NU', 'NV', 'NW', 'NX', 'OM', 'ON', 'OP', 'OQ', 'OR', 'OS', 'OT', 'OU', 'OV', 'OW', 'OX', 'PM', 'PN', 'PO', 'PQ', 'PR', 'PS', 'PT', 'PU', 'PV', 'PW', 'PX', 'QM', 'QN', 'QO', 'QP', 'QR', 'QS', 'QT', 'QU', 'QV', 'QW', 'QX', 'RM', 'RN', 'RO', 'RP', 'RQ', 'RS', 'RT', 'RU', 'RV', 'RW', 'RX', 'SM', 'SN', 'SO', 'SP', 'SQ', 'SR', 'ST', 'SU', 'SV', 'SW', 'SX', 'TM', 'TN', 'TO', 'TP', 'TQ', 'TR', 'TS', 'TU', 'TV', 'TW', 'TX', 'UM', 'UN', 'UO', 'UP', 'UQ', 'UR', 'US', 'UT', 'UV', 'UW', 'UX', 'VM', 'VN', 'VO', 'VP', 'VQ', 'VR', 'VS', 'VT', 'VU', 'VW', 'VX', 'WM', 'WN', 'WO', 'WP', 'WQ', 'WR', 'WS', 'WT', 'WU', 'WV', 'WX', 'XM', 'XN', 'XO', 'XP', 'XQ', 'XR', 'XS', 'XT', 'XU', 'XV', 'XW'];

const setZZ = ['YZ', 'Y0', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9', 'ZY', 'Z0', 'Z1', 'Z2', 'Z3', 'Z4', 'Z5', 'Z6', 'Z7', 'Z8', 'Z9', '0Y', '0Z', '01', '02', '03', '04', '05', '06', '07', '08', '09', '1Y', '1Z', '10', '12', '13', '14', '15', '16', '17', '18', '19', '2Y', '2Z', '20', '21', '23', '24', '25', '26', '27', '28', '29', '3Y', '3Z', '30', '31', '32', '34', '35', '36', '37', '38', '39', '4Y', '4Z', '40', '41', '42', '43', '45', '46', '47', '48', '49', '5Y', '5Z', '50', '51', '52', '53', '54', '56', '57', '58', '59', '6Y', '6Z', '60', '61', '62', '63', '64', '65', '67', '68', '69', '7Y', '7Z', '70', '71', '72', '73', '74', '75', '76', '78', '79', '8Y', '8Z', '80', '81', '82', '83', '84', '85', '86', '87', '89', '9Y', '9Z', '90', '91', '92', '93', '94', '95', '96', '97', '98'];

const offsets = ['', '@', '@!'];

const origins = ['#', '?'];


function calc(n, theSet) {
	let counter = -16135.75;

	for (i = 0; i < 132; i++) {
		if (n <= counter) {
			return theSet[i]
		}

		counter += 248.25
	}
}

function clamp(n) {
	return Math.max(-16384, Math.min(n, 16384));
}

function PositionToAddress(x = 0.0, y = 0.0, z = 0.0, offset = 0, origin = 0) {
	return calc(clamp(x), setXX) + calc(clamp(y), setYY) + calc(clamp(z), setZZ) + offsets[offset] + origins[origin];
}