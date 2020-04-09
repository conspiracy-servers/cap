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


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('#input-form').submit(function(e){
	const x = parseFloat($('#x-position').val());
	const y = parseFloat($('#y-position').val());
	const z = parseFloat($('#z-position').val());
	const offset = parseInt($('#offset').val());
	const origin = parseInt($('#origin').val());

	const address = PositionToAddress(x, y, z, offset, origin);

	$('#address').html(address);
	$('#address-english').html(address);

	$('#address').css('display', 'inherit');
	$('#address-box').css('display', 'inherit');
});

$('#reset-button').click(function(e){
	$('#x-position').val('');
	$('#y-position').val('');
	$('#z-position').val('');
	$('#offset').val(0);
	$('#origin').val(0);

	$('#address').css('display', 'none');
	$('#address-box').css('display', 'none');

	$('#address').html('');
	$('#address-english').html('');
});

$('#random-button').click(function(e){
	const x = getRandomInt(-16384, 16384);
	const y = getRandomInt(-16384, 16384);
	const z = getRandomInt(-16384, 16384);
	const offset = getRandomInt(0, 2);
	const origin = getRandomInt(0, 1);

	$('#x-position').val(x);
	$('#y-position').val(y);
	$('#z-position').val(z);
	$('#offset').val(offset);
	$('#origin').val(origin);

	const address = PositionToAddress(x, y, z, offset, origin);

	$('#address').html(address);
	$('#address-english').html(address);

	$('#address').css('display', 'inherit');
	$('#address-box').css('display', 'inherit');
});